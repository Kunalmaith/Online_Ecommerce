package com.example.ecomm.dao;

import com.example.ecomm.model.Product;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.math.BigDecimal;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ProductDAO {
    private final DataSource ds;

    public ProductDAO(DataSource ds) {
        this.ds = ds;
    }

    public Product create(Product p) throws SQLException {
        String sql = "INSERT INTO products(name,description,price,inventory) VALUES(?,?,?,?)";
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
            ps.setString(1, p.getName());
            ps.setString(2, p.getDescription());
            ps.setBigDecimal(3, p.getPrice());
            ps.setInt(4, p.getInventory());
            ps.executeUpdate();
            try (ResultSet rs = ps.getGeneratedKeys()) {
                if (rs.next()) p.setId(rs.getLong(1));
            }
        }
        return p;
    }

    public Product findById(Long id) throws SQLException {
        String sql = "SELECT id,name,description,price,inventory FROM products WHERE id=?";
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement(sql)) {
            ps.setLong(1, id);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return new Product(rs.getLong("id"), rs.getString("name"), rs.getString("description"), rs.getBigDecimal("price"), rs.getInt("inventory"));
                }
            }
        }
        return null;
    }

    public List<Product> listAll() throws SQLException {
        List<Product> list = new ArrayList<>();
        String sql = "SELECT id,name,description,price,inventory FROM products";
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement(sql); ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                list.add(new Product(rs.getLong("id"), rs.getString("name"), rs.getString("description"), rs.getBigDecimal("price"), rs.getInt("inventory")));
            }
        }
        return list;
    }

    public List<Product> search(String q, Integer limit, Integer offset) throws SQLException {
        List<Product> list = new ArrayList<>();
        StringBuilder sql = new StringBuilder("SELECT id,name,description,price,inventory FROM products");
        boolean hasQ = q != null && !q.isBlank();
        if (hasQ) sql.append(" WHERE LOWER(name) LIKE ? OR LOWER(description) LIKE ?");
        sql.append(" ORDER BY id DESC");
        if (limit != null) sql.append(" LIMIT ?");
        if (offset != null) sql.append(" OFFSET ?");
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement(sql.toString())) {
            int idx = 1;
            if (hasQ) {
                String like = "%" + q.toLowerCase() + "%";
                ps.setString(idx++, like);
                ps.setString(idx++, like);
            }
            if (limit != null) ps.setInt(idx++, limit);
            if (offset != null) ps.setInt(idx++, offset);
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    list.add(new Product(rs.getLong("id"), rs.getString("name"), rs.getString("description"), rs.getBigDecimal("price"), rs.getInt("inventory")));
                }
            }
        }
        return list;
    }


    public boolean updateInventory(Long productId, int newInventory) throws SQLException {
        String sql = "UPDATE products SET inventory=? WHERE id=?";
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement(sql)) {
            ps.setInt(1, newInventory);
            ps.setLong(2, productId);
            return ps.executeUpdate() > 0;
        }
    }

    public boolean delete(Long id) throws SQLException {
        String sql = "DELETE FROM products WHERE id=?";
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement(sql)) {
            ps.setLong(1, id);
            return ps.executeUpdate() > 0;
        }
    }
}
