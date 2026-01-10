package com.example.ecomm.controller;
import org.springframework.security.access.prepost.PreAuthorize;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {
    @PostMapping("/intent")
    @PreAuthorize("hasRole('BUYER')")
    public ResponseEntity<?> createIntent(@RequestBody Map<String, Object> body) {
        // Stub: pretend we created a payment intent with a provider
        String clientSecret = "stub_" + UUID.randomUUID();
        return ResponseEntity.ok(Map.of("clientSecret", clientSecret));
    }
}
