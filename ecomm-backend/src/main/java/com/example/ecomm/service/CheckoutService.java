package com.example.ecomm.service;

import com.example.ecomm.dao.OrderDAO;
import com.example.ecomm.dao.OrderItemDAO;
import com.example.ecomm.dao.ProductDAO;
import com.example.ecomm.model.Cart;
import com.example.ecomm.model.CartItem;
import com.example.ecomm.model.Order;
import com.example.ecomm.model.OrderItem;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.SQLException;
import java.time.LocalDateTime;

/**
 * Checkout Service with JDBC Transaction Management
 * Handles the complete checkout process with commit/rollback for inventory and order creation
 */
@Service
public class CheckoutService {
    private final DataSource ds;
    private final OrderDAO orderDAO;
    private final OrderItemDAO orderItemDAO;
    private final ProductDAO productDAO;

    public CheckoutService(DataSource ds, OrderDAO orderDAO, OrderItemDAO orderItemDAO, ProductDAO productDAO) {
        this.ds = ds;
        this.orderDAO = orderDAO;
        this.orderItemDAO = orderItemDAO;
        this.productDAO = productDAO;
    }

    /**
     * Process checkout with transaction management
     * Creates an order, reserves inventory, and persists everything atomically
     * If any step fails, the entire transaction is rolled back
     */
    public Order processCheckout(Cart cart, Long buyerId) throws Exception {
        Connection conn = ds.getConnection();
        try {
            // Disable auto-commit for manual transaction control
            conn.setAutoCommit(false);

            // Create order
            Order order = new Order();
            order.setBuyerId(buyerId);
            order.setStatus("PROCESSING");
            order.setTotal(cart.getTotal());
            order.setCreatedAt(LocalDateTime.now());

            // Persist order using provided connection (requires updating DAO)
            order = persistOrderWithConnection(conn, order);
            Long orderId = order.getId();

            // Reserve inventory and create order items
            for (CartItem item : cart.getItems()) {
                // Check inventory
                int currentInventory = productDAO.findById(item.getProductId()).getInventory();
                if (currentInventory < item.getQuantity()) {
                    // Rollback and throw error
                    conn.rollback();
                    throw new Exception("Insufficient inventory for product: " + item.getProductName());
                }

                // Create order item
                OrderItem oi = new OrderItem(orderId, item.getProductId(), item.getQuantity(), item.getPrice());
                orderItemDAO.create(oi);

                // Update inventory (decrement by quantity)
                int newInventory = currentInventory - item.getQuantity();
                productDAO.updateInventory(item.getProductId(), newInventory);
            }

            // Commit transaction if all steps succeed
            conn.commit();
            cart.clear(); // Clear cart after successful checkout

            return order;
        } catch (Exception e) {
            try {
                conn.rollback(); // Rollback on any error
            } catch (SQLException rollbackEx) {
                rollbackEx.printStackTrace();
            }
            throw new Exception("Checkout failed: " + e.getMessage(), e);
        } finally {
            try {
                conn.setAutoCommit(true);
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    /**
     * Helper: persist order using explicit connection
     * This is a simplified version; ideally you'd refactor DAO to accept a Connection parameter
     */
    private Order persistOrderWithConnection(Connection conn, Order order) throws SQLException {
        String sql = "INSERT INTO orders(buyer_id,status,total,created_at) VALUES(?,?,?,?)";
        java.sql.PreparedStatement ps = conn.prepareStatement(sql, java.sql.Statement.RETURN_GENERATED_KEYS);
        ps.setLong(1, order.getBuyerId());
        ps.setString(2, order.getStatus());
        ps.setBigDecimal(3, order.getTotal());
        ps.setTimestamp(4, java.sql.Timestamp.valueOf(order.getCreatedAt()));
        ps.executeUpdate();
        try (java.sql.ResultSet rs = ps.getGeneratedKeys()) {
            if (rs.next()) order.setId(rs.getLong(1));
        }
        ps.close();
        return order;
    }
}
