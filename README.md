(The file `d:\react\ecomm_web_new\README.md` exists, but is empty)
# Online E-commerce (Prototype)

This repository contains a frontend (React + Vite) and a Java Spring Boot backend prototype (JDBC + H2) designed to demonstrate core e-commerce concepts including transaction management and session-based cart functionality.

**Backend Features (Review 1 Feedback Integration):**
- ✅ JDBC Transaction Management (commit/rollback) for checkout process
- ✅ Servlet Session Management for shopping cart state
- ✅ Inventory reservation with atomic order creation
- ✅ OrderItem model for line-item tracking
- ✅ MVC separation with service layer

The goal is to demonstrate Java/OOP concepts, JDBC connectivity with proper transaction handling, session management, REST endpoints, and a clean architecture suitable for review.

---

## Contents / Structure

Top-level layout:

```
d:/react/ecomm_web_new/
├─ ecomm-backend/            # Spring Boot prototype (Maven)
│  ├─ pom.xml
│  ├─ README.md
│  └─ src/main/
│     ├─ java/com/example/ecomm/
│     │  ├─ model/           # (User, Product, Order, OrderItem, Cart, CartItem)
│     │  ├─ dao/             # (UserDAO, ProductDAO, OrderDAO, OrderItemDAO)
│     │  ├─ service/         # (CheckoutService with transactions)
│     │  └─ controller/      # (User, Product, Order, Cart, Checkout controllers)
│     └─ resources/          # (schema.sql, data.sql, application.properties)
├─ src/                      # Frontend React + Vite app
├─ package.json
├─ vite.config.js
└─ README.md                 # (this file)
```

**Frontend key files:**
- `src/` — React app (Vite). Components, pages, assets organized here.
- `package.json` — frontend deps and scripts.

**Backend key files (under `ecomm-backend`):**
- `pom.xml` — Maven deps (Spring Boot, JDBC, H2, Servlet API)
- `src/main/java/com/example/ecomm/` — models, DAOs, services, controllers
- `src/main/resources/schema.sql` — DB schema with order_items table
- `src/main/resources/data.sql` — seed data (users, products, sample orders)
- `application.properties` — H2 + server config (port 8081)

---

## Prerequisites

Install these tools on Windows before running the projects:

- Node.js 16+ / 18+ (includes `npm`) — for frontend
- Java 17 (or 11+) — for the backend prototype
- Maven 3.6+ — to build/run the backend
- (Optional) Git

Confirm versions in PowerShell:

```powershell
node -v
npm -v
java -version
mvn -v
```

---

## Run the backend (prototype)

The backend is a small Spring Boot app using an in-memory H2 database so you can run it locally without extra setup.

1. Open PowerShell and change to the backend folder:

```powershell
cd d:\react\ecomm_web_new\ecomm-backend
```

2. Build & run with Maven:

```powershell
mvn -q spring-boot:run
```

The backend will start on port `8081` (configurable in `ecomm-backend/src/main/resources/application.properties`).

Useful endpoints (examples):

- `GET http://localhost:8081/api/products` — list products
- `GET http://localhost:8081/api/users` — list users
- `GET http://localhost:8081/api/orders` — list orders

H2 Console (web UI):

- URL: `http://localhost:8081/h2-console`
- JDBC URL: `jdbc:h2:mem:ecommdb`
- User: `sa` (no password)

---

## Key Features Implemented (Review 1 Feedback)

### 1. JDBC Transaction Management (Checkout Process)
The `CheckoutService` implements atomic transactions for the entire checkout:
- Disables auto-commit for manual transaction control
- Creates order + order items atomically
- Reserves inventory (checks availability before booking)
- Commits if all steps succeed; rolls back on any error (insufficient stock, DB failure)
- Handles errors gracefully with meaningful messages

### 2. Servlet Session Management (Shopping Cart)
`CartController` manages cart state via `HttpSession`:
- Cart persists across HTTP requests during a session
- Add/remove/update items without immediate DB writes
- Session stored in-memory (H2 for this prototype)
- Cart cleared after successful checkout
- No external session store needed

### 3. OrderItem Model & Inventory Management
- `OrderItem` table stores line items per order (product_id, quantity, price)
- Inventory decremented atomically during checkout
- Prevents overselling with pre-transaction availability checks
- Full order details preserved for reporting/tracking

---

## Test the API quickly (curl / httpie examples)

From PowerShell you can use `curl` or Postman. Here are example requests:

```powershell
# List products
curl http://localhost:8081/api/products

# Create a user (buyer)
curl -X POST http://localhost:8081/api/users `
  -H "Content-Type: application/json" `
  -d '{"name":"Alice","email":"alice@example.com","role":"BUYER"}'

# Add item to cart (session-based)
curl -X POST http://localhost:8081/api/cart/add `
  -H "Content-Type: application/json" `
  -d '{"productId":1,"quantity":2}'

# Get current cart
curl http://localhost:8081/api/cart

# Checkout with transaction (creates order + updates inventory)
curl -X POST http://localhost:8081/api/checkout `
  -H "Content-Type: application/json" `
  -d '{"buyerId":3}'
```

---

## What this prototype covers (mapping to rubric)

- **Problem understanding & solution design:** separation between frontend and backend, clear data models (User/Product/Order/OrderItem).
- **Core Java concepts:** model classes, constructors, getters/setters, DAO pattern, service layer.
- **Database integration (JDBC):** raw JDBC DAOs with `PreparedStatement`, inventory management.
- **Transaction Management:** `CheckoutService` with `Connection.setAutoCommit(false)`, commit/rollback, exception handling.
- **Servlets & web integration:** Spring Boot controllers, `HttpSession` for cart management.

---

## Backend Architecture (MVC Separation)

```
Controller Layer
    ↓ (HTTP requests/responses)
Service Layer (CheckoutService)
    ↓ (business logic, transactions)
DAO Layer (UserDAO, ProductDAO, OrderDAO, OrderItemDAO)
    ↓ (raw JDBC, SQL execution)
Database (H2 / MySQL / Postgres)
```

---

## Recommended next steps (beyond this prototype)

1. **Authentication & Authorization (JWT):** Protect admin/seller endpoints with role-based access control.
2. **Persistent DB:** Replace H2 with MySQL/Postgres for production.
3. **Input Validation & DTOs:** Use Bean Validation for request sanitization.
4. **Global Exception Handling:** `@ControllerAdvice` to map SQL exceptions to HTTP responses.
5. **Unit & Integration Tests:** Test DAOs, services, and controllers with embedded DB.
6. **Search & Filtering:** Add paging, text search on products.
7. **File Upload:** Store product images on S3 or static server.
8. **Payment Gateway:** Integrate Stripe/PayPal for real transactions.

---

## Checkout Flow Example

```
1. User adds items to cart (session-based)
   POST /api/cart/add → {productId, quantity}

2. User initiates checkout
   POST /api/checkout → {buyerId}

3. CheckoutService (with transaction):
   a. BEGIN TRANSACTION
   b. Create Order record
   c. For each cart item:
      - Check inventory (if insufficient → ROLLBACK)
      - Create OrderItem record
      - Decrement product inventory
   d. COMMIT TRANSACTION (all or nothing)
   e. Clear cart from session

4. Response to user
   {success: true, orderId: 123, total: 99.99, status: PROCESSING}
   OR on failure
   {success: false, error: "Insufficient inventory for Product A"}
```

---

## Run both concurrently (recommended setup)

Open two separate PowerShell terminals:

**Terminal 1 (Backend):**
```powershell
cd d:\react\ecomm_web_new\ecomm-backend
mvn -q spring-boot:run
```

**Terminal 2 (Frontend):**
```powershell
cd d:\react\ecomm_web_new
npm install  # First time only
$env:VITE_API_URL = "http://localhost:8081"
npm run dev
```

Visit `http://localhost:5173` for the React UI and `http://localhost:8081/api/products` for backend API.

---

## Additional Resources

- See `ecomm-backend/README.md` for detailed backend setup and API documentation.
- H2 Console: Visit `http://localhost:8081/h2-console` to inspect DB schema and data.
- Sample data: See `ecomm-backend/src/main/resources/data.sql` for seeded users, products, orders.

---

© 2024 GUVI Geek Network Pvt. Ltd. All rights reserved.

