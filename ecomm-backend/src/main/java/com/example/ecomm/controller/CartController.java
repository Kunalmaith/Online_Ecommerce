package com.example.ecomm.controller;

import com.example.ecomm.dao.ProductDAO;
import com.example.ecomm.model.Cart;
import com.example.ecomm.model.CartItem;
import com.example.ecomm.model.Product;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.sql.SQLException;
import java.util.Map;

/**
 * Cart Controller with Servlet Session Management
 * Manages shopping cart state via HttpSession
 */
@RestController
@RequestMapping("/api/cart")
public class CartController {
    private static final String CART_SESSION_KEY = "cart";
    private final ProductDAO productDAO;

    public CartController(ProductDAO productDAO) {
        this.productDAO = productDAO;
    }

    /**
     * Get current cart from session
     */
    @GetMapping
    public ResponseEntity<?> getCart(HttpSession session) {
        Cart cart = (Cart) session.getAttribute(CART_SESSION_KEY);
        if (cart == null) {
            cart = new Cart();
            session.setAttribute(CART_SESSION_KEY, cart);
        }
        return ResponseEntity.ok(cart);
    }

    /**
     * Add item to cart (session-based)
     */
    @PostMapping("/add")
    public ResponseEntity<?> addToCart(
            @RequestBody Map<String, Object> request,
            HttpSession session) throws SQLException {
        Long productId = Long.parseLong(request.get("productId").toString());
        int quantity = Integer.parseInt(request.get("quantity").toString());

        Product product = productDAO.findById(productId);
        if (product == null) {
            return ResponseEntity.status(404).body("Product not found");
        }

        Cart cart = (Cart) session.getAttribute(CART_SESSION_KEY);
        if (cart == null) {
            cart = new Cart();
            session.setAttribute(CART_SESSION_KEY, cart);
        }

        CartItem item = new CartItem(product.getId(), product.getName(), product.getPrice(), quantity);
        cart.addItem(item);

        return ResponseEntity.ok(cart);
    }

    /**
     * Remove item from cart (session-based)
     */
    @DeleteMapping("/{productId}")
    public ResponseEntity<?> removeFromCart(@PathVariable Long productId, HttpSession session) {
        Cart cart = (Cart) session.getAttribute(CART_SESSION_KEY);
        if (cart == null) {
            return ResponseEntity.status(400).body("No active cart");
        }

        cart.removeItem(productId);
        return ResponseEntity.ok(cart);
    }

    /**
     * Update item quantity in cart (session-based)
     */
    @PutMapping("/{productId}")
    public ResponseEntity<?> updateQuantity(
            @PathVariable Long productId,
            @RequestParam int quantity,
            HttpSession session) {
        Cart cart = (Cart) session.getAttribute(CART_SESSION_KEY);
        if (cart == null) {
            return ResponseEntity.status(400).body("No active cart");
        }

        if (quantity <= 0) {
            cart.removeItem(productId);
        } else {
            cart.updateQuantity(productId, quantity);
        }

        return ResponseEntity.ok(cart);
    }

    /**
     * Clear cart (session-based)
     */
    @DeleteMapping
    public ResponseEntity<?> clearCart(HttpSession session) {
        Cart cart = (Cart) session.getAttribute(CART_SESSION_KEY);
        if (cart != null) {
            cart.clear();
        }
        return ResponseEntity.ok().build();
    }
}
