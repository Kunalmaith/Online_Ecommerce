package com.example.ecomm.dao;

import com.example.ecomm.model.User;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class UserDAO {
    private final DataSource ds;

    public UserDAO(DataSource ds) {
        this.ds = ds;
    }

    public User create(User u) throws SQLException {
        String sql = "INSERT INTO users(name,email,role) VALUES(?,?,?)";
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
            ps.setString(1, u.getName());
            ps.setString(2, u.getEmail());
            ps.setString(3, u.getRole());
            ps.executeUpdate();
            try (ResultSet rs = ps.getGeneratedKeys()) {
                if (rs.next()) u.setId(rs.getLong(1));
            }
        }
        return u;
    }

    public User findById(Long id) throws SQLException {
        String sql = "SELECT id,name,email,role FROM users WHERE id=?";
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement(sql)) {
            ps.setLong(1, id);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) return new User(rs.getLong("id"), rs.getString("name"), rs.getString("email"), rs.getString("role"));
            }
        }
        return null;
    }

    public List<User> listAll() throws SQLException {
        List<User> list = new ArrayList<>();
        String sql = "SELECT id,name,email,role FROM users";
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement(sql); ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                list.add(new User(rs.getLong("id"), rs.getString("name"), rs.getString("email"), rs.getString("role")));
            }
        }
        return list;
    }

    public boolean delete(Long id) throws SQLException {
        String sql = "DELETE FROM users WHERE id=?";
        try (Connection c = ds.getConnection(); PreparedStatement ps = c.prepareStatement(sql)) {
            ps.setLong(1, id);
            return ps.executeUpdate() > 0;
        }
    }
}
