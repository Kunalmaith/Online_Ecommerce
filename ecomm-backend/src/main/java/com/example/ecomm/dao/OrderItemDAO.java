package com.example.ecomm.dao;

import com.example.ecomm.model.OrderItem;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.math.BigDecimal;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class OrderItemDAO {
    private final DataSource ds;

    public OrderItemDAO(DataSource ds) { this.ds = ds; }

    public OrderItem create(OrderItem oi) throws SQLException {
        String sql = "INSERT INTO order_items(order_id,product_id,quantity,price) VALUES(?,?,?,?)";
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
            ps.setLong(1, oi.getOrderId());
            ps.setLong(2, oi.getProductId());
            ps.setInt(3, oi.getQuantity());
            ps.setBigDecimal(4, oi.getPrice());
            ps.executeUpdate();
            try (ResultSet rs = ps.getGeneratedKeys()) {
                if (rs.next()) oi.setId(rs.getLong(1));
            }
        }
        return oi;
    }

    public List<OrderItem> findByOrderId(Long orderId) throws SQLException {
        List<OrderItem> list = new ArrayList<>();
        String sql = "SELECT id,order_id,product_id,quantity,price FROM order_items WHERE order_id=?";
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement(sql)) {
            ps.setLong(1, orderId);
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    list.add(mapOrderItem(rs));
                }
            }
        }
        return list;
    }

    private OrderItem mapOrderItem(ResultSet rs) throws SQLException {
        OrderItem oi = new OrderItem(rs.getLong("order_id"), rs.getLong("product_id"), rs.getInt("quantity"), rs.getBigDecimal("price"));
        oi.setId(rs.getLong("id"));
        return oi;
    }
}
