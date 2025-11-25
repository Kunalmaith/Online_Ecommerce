# Ecomm Backend (Prototype)

This is a small Java/Spring Boot prototype backend for a simple e-commerce platform. It demonstrates core Java OOP concepts, JDBC connectivity, and basic REST endpoints for Admin/Seller/Buyer operations.

This prototype is suitable as a submission for an initial project review: it includes models, DAOs using raw JDBC, controllers, a schema and seed data for H2 in-memory DB.

## What is included

- Models: `User`, `Product`, `Order`
- DAOs: `UserDAO`, `ProductDAO`, `OrderDAO` (raw JDBC using injected DataSource)
- REST controllers for basic CRUD and status updates
- `schema.sql` and `data.sql` to initialize an H2 in-memory DB with sample data
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
      │  ├─ model/{User,Product,Order}.java
      │  ├─ dao/{UserDAO,ProductDAO,OrderDAO}.java
      │  └─ controller/{UserController,ProductController,OrderController}.java
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

## Example API endpoints

- GET /api/products — list products
- GET /api/products/{id} — get a product
- POST /api/products — create product (JSON body)
- PUT /api/products/{id}/inventory?inventory=10 — update inventory
- DELETE /api/products/{id} — delete product

- GET /api/users — list users
- GET /api/users/{id}
- POST /api/users — create user
- DELETE /api/users/{id}

- GET /api/orders — list orders
- GET /api/orders/{id}
- POST /api/orders — create order
- PUT /api/orders/{id}/status?status=SHIPPED — update order status

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
