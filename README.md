# 🚀 Orbit

Orbit is a **production-ready backend foundation for building AI API Gateways**. It provides secure authentication, API key management, and a clean layered architecture designed to support future AI provider integrations such as OpenAI, Gemini, and Anthropic.

Built with **Fastify**, **TypeScript**, **Prisma**, and **PostgreSQL**.

---

## 🌐 Live Demo

**Base URL**

https://orbit-u954.onrender.com

> **Note:** The service is hosted on Render's free tier and may take **30–60 seconds** to wake up after inactivity.

---

# ✨ Features

- JWT Authentication
- User Registration & Login
- Protected Routes
- Secure API Key Generation
- SHA-256 API Key Hashing
- API Key Listing & Revocation
- Centralized Error Handling
- Repository–Service Architecture
- Prisma ORM with PostgreSQL
- Docker-based Local Development
- Production Deployment on Render

---

# ⭐ Highlights

- Production-ready REST API
- Secure JWT Authentication
- Layered Repository–Service Architecture
- SHA-256 API Key Storage
- Prisma ORM + PostgreSQL
- Dockerized Development Environment
- Live Deployment on Render

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Fastify | Web Framework |
| TypeScript | Programming Language |
| Prisma | ORM |
| PostgreSQL | Database |
| JWT | Authentication |
| bcrypt | Password Hashing |
| Node.js | Runtime |
| Docker | Local Database Environment |
| Render | Backend Hosting |
| Neon | Managed PostgreSQL |

---

# 🏛 Architecture

```
                    Client
                       │
                       ▼
               Fastify Routes
                       │
                       ▼
          Authentication Middleware
                       │
                       ▼
                   Services
                       │
                       ▼
                Repositories
                       │
                       ▼
                  Prisma ORM
                       │
                       ▼
                  PostgreSQL
```

The project follows a **layered architecture**, where each layer has a single responsibility.

- **Routes** handle HTTP requests and responses.
- **Middleware** performs authentication and request validation.
- **Services** contain business logic.
- **Repositories** interact with the database.
- **Prisma** maps application models to PostgreSQL.

---

# 📂 Project Structure

```
backend/
├── prisma/
├── src/
│   ├── common/
│   │   └── errors/
│   ├── db/
│   ├── middleware/
│   ├── modules/
│   │   ├── api-key/
│   │   └── user/
│   ├── plugins/
│   ├── types/
│   ├── utils/
│   ├── app.ts
│   └── server.ts
├── package.json
└── README.md
```

---

# 🔗 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/users` | Register a new user |
| POST | `/login` | Authenticate a user |
| GET | `/me` | Get authenticated user's profile |

---

## API Keys

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api-keys` | Generate a new API key |
| GET | `/api-keys` | List API keys |
| PATCH | `/api-keys/:id/revoke` | Revoke an API key |

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/esha21101/Orbit.git
cd Orbit/backend
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Configure environment variables

Create a `.env` file.

```env
DATABASE_URL="postgresql://..."
JWT_SECRET="your-secret-key"
```

---

## 4. Start PostgreSQL

```bash
docker compose up -d
```

---

## 5. Run Prisma migrations

```bash
npx prisma migrate dev
```

---

## 6. Start the development server

```bash
npm run dev
```

The API will be available at

```
http://localhost:3000
```

---

# 🧠 Design Decisions

## Layered Architecture

Business logic is separated from database operations using the **Repository–Service** pattern. This improves maintainability, testability, and scalability.

---

## Secure Password Storage

User passwords are securely hashed using **bcrypt** before being stored.

---

## Secure API Keys

Generated API keys are displayed only once.

Only their **SHA-256 hash** is stored in the database.

---

## Response Shaping

API responses expose only the fields required by the client instead of returning raw database records.

---

## Centralized Error Handling

Application errors are handled through a global error handler, ensuring consistent HTTP responses across all endpoints.

---

# 🛣 Roadmap

- [ ] Delete API Keys
- [ ] API Key Expiration
- [ ] Rate Limiting
- [ ] Redis Caching
- [ ] Usage Analytics
- [ ] Request Logging
- [ ] Retry & Failover
- [ ] Multi-provider AI Routing
- [ ] Cost Tracking
- [ ] Admin Dashboard
- [ ] CI/CD Pipeline

---

# 📄 License

This project is licensed under the **MIT License**.