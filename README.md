(The file `d:\react\ecomm_web_new\README.md` exists, but is empty)
# Online E-commerce (Prototype)

This repository contains a frontend (React + Vite) and a small Java Spring Boot backend prototype (JDBC + H2) intended as an initial project submission.

The goal of this prototype is to demonstrate core Java/OOP concepts, JDBC connectivity, simple REST endpoints, and a React-based UI scaffold. It is intentionally lightweight so it can be presented as a non-working or semi-working prototype for review.

---

## Contents / Structure

Top-level layout:

```
d:/react/ecomm_web_new/
├─ ecomm-backend/            # Spring Boot prototype (Maven)
│  ├─ pom.xml
│  └─ src/main/...
├─ src/                      # Frontend React + Vite app
├─ package.json
├─ vite.config.js
└─ README.md                 # (this file)
```

Frontend important files:

- `src/` — React app (Vite). Components, pages, assets are under `src/`.
- `package.json` — frontend deps and scripts.

Backend important files (under `ecomm-backend`):

- `pom.xml` — Maven deps (Spring Boot, JDBC, H2)
- `src/main/java/com/example/ecomm/` — application, models, DAOs, controllers
- `src/main/resources/schema.sql` & `data.sql` — initial DB schema & seed data (H2)
- `application.properties` — DB and server config (default server port 8081)

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

Note: this backend is a prototype — DAOs use raw JDBC and data is seeded from `data.sql` on startup.

---

## Run the frontend (development)

The frontend is a Vite + React app. By default Vite serves on port 5173.

1. From the repo root open PowerShell:

```powershell
cd d:\react\ecomm_web_new
```

2. Install dependencies (run once):

```powershell
npm install
```

3. (Optional) Point frontend to backend API. The app can read an env var `VITE_API_URL` to call the backend. Example (PowerShell):

```powershell
$env:VITE_API_URL = "http://localhost:8081"
npm run dev
```

If you don't set `VITE_API_URL`, you may need to update the frontend `axios` base URL in the code or configure a Vite proxy in `vite.config.js`.

Visit the dev UI at the address printed by Vite (typically `http://localhost:5173`).

---

## Run both concurrently (recommended)

Open two terminals:

- Terminal 1 (backend):

```powershell
cd d:\react\ecomm_web_new\ecomm-backend
mvn -q spring-boot:run
```

- Terminal 2 (frontend):

```powershell
cd d:\react\ecomm_web_new
$env:VITE_API_URL = "http://localhost:8081"
npm run dev
```

Now the frontend can call the backend APIs at `http://localhost:8081`.

---

## Test the API quickly (curl / httpie examples)

From PowerShell you can use `curl`/`Invoke-RestMethod` or Postman to hit endpoints, for example:

```powershell
# list products
curl http://localhost:8081/api/products

# create a user (JSON body)
curl -X POST http://localhost:8081/api/users -H "Content-Type: application/json" -d '{"name":"Test","email":"t@t.com","role":"BUYER"}'
```

---



