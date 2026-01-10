package com.example.ecomm.controller;

import com.example.ecomm.dao.UserDAO;
import com.example.ecomm.model.User;
import com.example.ecomm.security.jwt.JwtUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UserDAO userDAO;
    public AuthController(UserDAO userDAO) { this.userDAO = userDAO; }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body) throws SQLException {
        String email = body.get("email");
        User u = userDAO.listAll().stream().filter(x -> x.getEmail().equals(email)).findFirst().orElse(null);
        if (u == null) return ResponseEntity.status(401).body("Invalid credentials");
        String token = JwtUtil.generateToken(u.getEmail(), u.getRole());
        return ResponseEntity.ok(Map.of("token", token, "role", u.getRole(), "userId", u.getId()));
    }
}
