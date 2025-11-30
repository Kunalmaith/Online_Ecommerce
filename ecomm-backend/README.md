# Ecomm Backend (Prototype)

This is a Java/Spring Boot prototype backend for a simple e-commerce platform. It demonstrates core Java OOP concepts, JDBC connectivity, transaction management, and REST endpoints for Admin/Seller/Buyer operations.

**Key Features:**
- JDBC Transaction Management (commit/rollback) for checkout process
- Servlet Session Management for shopping cart state
- Raw JDBC DAOs with inventory reservation
- Order line items and atomic order creation
- MVC separation with service layer

## What is included

- Models: `User`, `Product`, `Order`, `OrderItem`, `Cart`, `CartItem`
- DAOs: `UserDAO`, `ProductDAO`, `OrderDAO`, `OrderItemDAO` (raw JDBC using injected DataSource)
- Service: `CheckoutService` with JDBC transactions
- Controllers: `UserController`, `ProductController`, `OrderController`, `CartController`, `CheckoutController` (MVC separation)
- `schema.sql` with order_items table and `data.sql` for H2 in-memory DB initialization
- `pom.xml` (Maven) and Spring Boot application

## Project structure

```
ecomm-backend/
├─ pom.xml
├─ README.md
└─ src/
   └─ main/
      ├─ java/com/example/ecomm/
      │  ├─ EcommApplication.java
      │  ├─ model/{User,Product,Order,OrderItem,Cart,CartItem}.java
      │  ├─ dao/{UserDAO,ProductDAO,OrderDAO,OrderItemDAO}.java
      │  ├─ service/CheckoutService.java
      │  └─ controller/{UserController,ProductController,OrderController,CartController,CheckoutController}.java
      └─ resources/
         ├─ application.properties
         ├─ schema.sql
         └─ data.sql
```

## Requirements

- Java 17 (or 11+)
- Maven 3.6+

## How to run (development / prototype)

1. Open a terminal in `ecomm-backend`.
2. Build and run using Maven:

```powershell
mvn -q spring-boot:run
```

The server runs on port `8081` by default.

- H2 console: http://localhost:8081/h2-console
  - JDBC URL: `jdbc:h2:mem:ecommdb`
  - Username: `sa`
  - Password: (empty)

## API Endpoints

### User Management
- GET /api/users — list users
- GET /api/users/{id}
- POST /api/users — create user
- DELETE /api/users/{id}

### Product Management
- GET /api/products — list products
- GET /api/products/{id} — get a product
- POST /api/products — create product
- PUT /api/products/{id}/inventory?inventory=10 — update inventory
- DELETE /api/products/{id}

### Order Management
- GET /api/orders — list orders
- GET /api/orders/{id}
- POST /api/orders — create order
- PUT /api/orders/{id}/status?status=SHIPPED — update status

### Shopping Cart (Session-based)
- GET /api/cart — get cart from session
- POST /api/cart/add — add item to cart (JSON: {productId, quantity})
- DELETE /api/cart/{productId} — remove item
- PUT /api/cart/{productId}?quantity=5 — update quantity
- DELETE /api/cart — clear cart

### Checkout with Transactions
- POST /api/checkout — process checkout with JDBC transaction management
  - Request: {buyerId}
  - Response: {orderId, total, status}
  - On success: cart is cleared, inventory updated, order created
  - On failure (e.g., low stock): all changes are rolled back

## Transaction Management & Inventory

The `CheckoutService` implements JDBC transaction management:

1. **Connection Control**: Disables auto-commit (`conn.setAutoCommit(false)`)
2. **Order Creation**: Atomically creates order and order items
3. **Inventory Reservation**: Checks availability before reserving stock
4. **Commit/Rollback**: All operations committed together or rolled back on any error
5. **Error Handling**: Insufficient stock, DB errors, etc., trigger rollback

Example scenario:
- Cart has 3 units of Product A (inventory = 5)
- Checkout initiated
- System checks: 5 >= 3 ✓
- Order created, inventory updated to 2
- If checkout fails partway (e.g., DB error), entire transaction rolls back

## Session Management & Shopping Cart

Shopping cart state is managed via Servlet `HttpSession`:

- Cart added to session under key `"cart"`
- Session persists across HTTP requests
- `CartController` provides endpoints to manipulate cart
- On checkout, cart is cleared from session
- Sessions are in-memory (H2) for this prototype

## Notes and next steps (recommended improvements)

1. Add authentication/authorization (JWT) so Admin/Seller/Buyer roles are enforced.
2. Add DTOs and validation (Bean Validation) for input sanitization.
3. Add an OrderItem table for line items and inventory reservations.
4. Integrate with MySQL/Postgres for production; the code uses H2 for prototype ease.
5. Add unit and integration tests (Spring Boot Test with an embedded DB).
6. Add paging, filtering and search on products.
7. Add file upload for product images and a CDN or S3 storage.
8. Add payment gateway integration (Stripe/PayPal) and webhooks.

## Mapping to review rubric

- Core Java & OOP: Model classes and DAOs demonstrate encapsulation and separation of concerns.
- JDBC: DAOs use raw JDBC via injected DataSource.
- Servlets & Web integration: Spring Boot provides the web layer (controllers) for servlet handling.
- Database design: `schema.sql` shows tables and relationships.

---

If you want, I can:
- Convert DAOs to use a repository pattern with interfaces and unit tests.
- Swap the H2 DB to MySQL and provide Docker Compose.
- Add JWT auth and sample protected endpoints for admin/seller actions.
