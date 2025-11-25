package com.example.ecomm.dao;

import com.example.ecomm.model.Order;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.math.BigDecimal;
import java.sql.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Repository
public class OrderDAO {
    private final DataSource ds;

    public OrderDAO(DataSource ds) { this.ds = ds; }

    public Order create(Order o) throws SQLException {
        String sql = "INSERT INTO orders(buyer_id,status,total,created_at) VALUES(?,?,?,?)";
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
            ps.setLong(1, o.getBuyerId());
            ps.setString(2, o.getStatus());
            ps.setBigDecimal(3, o.getTotal());
            ps.setTimestamp(4, Timestamp.valueOf(o.getCreatedAt()));
            ps.executeUpdate();
            try (ResultSet rs = ps.getGeneratedKeys()) {
                if (rs.next()) o.setId(rs.getLong(1));
            }
        }
        return o;
    }

    public Order findById(Long id) throws SQLException {
        String sql = "SELECT id,buyer_id,status,total,created_at FROM orders WHERE id=?";
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement(sql)) {
            ps.setLong(1, id);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) return mapOrder(rs);
            }
        }
        return null;
    }

    public List<Order> listAll() throws SQLException {
        List<Order> list = new ArrayList<>();
        String sql = "SELECT id,buyer_id,status,total,created_at FROM orders";
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement(sql); ResultSet rs = ps.executeQuery()) {
            while (rs.next()) list.add(mapOrder(rs));
        }
        return list;
    }

    public boolean updateStatus(Long orderId, String status) throws SQLException {
        String sql = "UPDATE orders SET status=? WHERE id=?";
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement(sql)) {
            ps.setString(1, status);
            ps.setLong(2, orderId);
            return ps.executeUpdate() > 0;
        }
    }

    private Order mapOrder(ResultSet rs) throws SQLException {
        Long id = rs.getLong("id");
        Long buyer = rs.getLong("buyer_id");
        String status = rs.getString("status");
        BigDecimal total = rs.getBigDecimal("total");
        LocalDateTime created = rs.getTimestamp("created_at").toLocalDateTime();
        return new Order(id, buyer, status, total, created);
    }
}
