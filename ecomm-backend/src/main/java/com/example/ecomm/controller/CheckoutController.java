package com.example.ecomm.controller;

import com.example.ecomm.model.Cart;
import com.example.ecomm.model.Order;
import com.example.ecomm.service.CheckoutService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Map;

/**
 * Checkout Controller
 * Handles order creation with transactional checkout
 */
@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {
    private static final String CART_SESSION_KEY = "cart";
    private final CheckoutService checkoutService;

    public CheckoutController(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    /**
     * Process checkout with JDBC transaction management
     * Atomically creates order, reserves inventory, and updates DB
     * On failure, rolls back all changes
     */
    @PostMapping
    public ResponseEntity<?> checkout(
            @RequestBody Map<String, Object> request,
            HttpSession session) {
        try {
            Cart cart = (Cart) session.getAttribute(CART_SESSION_KEY);
            if (cart == null || cart.getItems().isEmpty()) {
                return ResponseEntity.status(400).body("Cart is empty");
            }

            Long buyerId = Long.parseLong(request.get("buyerId").toString());

            // Process checkout with transaction management
            Order order = checkoutService.processCheckout(cart, buyerId);

            return ResponseEntity.ok(Map.of(
                "success", true,
                "orderId", order.getId(),
                "total", order.getTotal(),
                "status", order.getStatus()
            ));
        } catch (Exception e) {
            return ResponseEntity.status(400).body(Map.of(
                "success", false,
                "error", e.getMessage()
            ));
        }
    }
}
