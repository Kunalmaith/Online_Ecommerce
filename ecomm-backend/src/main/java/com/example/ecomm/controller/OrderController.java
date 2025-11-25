package com.example.ecomm.controller;

import com.example.ecomm.dao.OrderDAO;
import com.example.ecomm.model.Order;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderDAO orderDAO;

    public OrderController(OrderDAO orderDAO) {
        this.orderDAO = orderDAO;
    }

    @GetMapping
    public ResponseEntity<?> list() throws SQLException {
        List<Order> list = orderDAO.listAll();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable Long id) throws SQLException {
        Order o = orderDAO.findById(id);
        if (o == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(o);
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Order o) throws SQLException {
        // set some defaults
        if (o.getCreatedAt() == null) o.setCreatedAt(LocalDateTime.now());
        if (o.getStatus() == null) o.setStatus("NEW");
        Order created = orderDAO.create(o);
        return ResponseEntity.ok(created);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateStatus(@PathVariable Long id, @RequestParam String status) throws SQLException {
        boolean ok = orderDAO.updateStatus(id, status);
        if (!ok) return ResponseEntity.notFound().build();
        return ResponseEntity.ok().build();
    }
}
