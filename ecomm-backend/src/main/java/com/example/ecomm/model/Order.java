package com.example.ecomm.model;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class Order {
    private Long id;
    private Long buyerId;
    private String status; // NEW, PROCESSING, SHIPPED, DELIVERED
    private BigDecimal total;
    private LocalDateTime createdAt;

    public Order() {}

    public Order(Long id, Long buyerId, String status, BigDecimal total, LocalDateTime createdAt) {
        this.id = id;
        this.buyerId = buyerId;
        this.status = status;
        this.total = total;
        this.createdAt = createdAt;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Long getBuyerId() { return buyerId; }
    public void setBuyerId(Long buyerId) { this.buyerId = buyerId; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public BigDecimal getTotal() { return total; }
    public void setTotal(BigDecimal total) { this.total = total; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
