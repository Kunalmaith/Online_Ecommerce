package com.example.ecomm.controller;
import org.springframework.security.access.prepost.PreAuthorize;

import javax.validation.Valid;


import com.example.ecomm.dao.ProductDAO;
import com.example.ecomm.model.Product;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductDAO productDAO;

    public ProductController(ProductDAO productDAO) {
        this.productDAO = productDAO;
    }

    @GetMapping
    public ResponseEntity<?> list(
            @RequestParam(required = false) String q,
            @RequestParam(required = false) Integer limit,
            @RequestParam(required = false) Integer offset) throws SQLException {
        List<Product> list = productDAO.search(q, limit, offset);
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable Long id) throws SQLException {
        Product p = productDAO.findById(id);
        if (p == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(p);
    }

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody Product p) throws SQLException {
        Product created = productDAO.create(p);
        return ResponseEntity.ok(created);
    }

    @PutMapping("/{id}/inventory")
    public ResponseEntity<?> updateInventory(@PathVariable Long id, @RequestParam int inventory) throws SQLException {
        boolean ok = productDAO.updateInventory(id, inventory);
        if (!ok) return ResponseEntity.notFound().build();
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) throws SQLException {
        boolean ok = productDAO.delete(id);
        if (!ok) return ResponseEntity.notFound().build();
        return ResponseEntity.ok().build();
    }
}
