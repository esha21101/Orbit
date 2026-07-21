# 🚀 Orbit

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-000000?logo=fastify)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white)
![Render](https://img.shields.io/badge/Render-Deployed-success)
![License](https://img.shields.io/badge/License-MIT-blue)

Orbit is a **production-ready backend foundation for building AI API Gateways**. It provides secure authentication, API key management, and a clean layered architecture designed to support future AI provider integrations such as OpenAI, Gemini, and Anthropic.

Built with **Fastify**, **TypeScript**, **Prisma ORM**, and **PostgreSQL**.

---

# 🌐 Live Demo

**Base URL**

https://orbit-u954.onrender.com

> **Note:** This project is hosted on Render's free tier. The first request may take **30–60 seconds** while the server wakes up.

---

# ✨ Features

- JWT Authentication
- User Registration & Login
- Protected Routes
- Secure API Key Generation
- SHA-256 API Key Hashing
- API Key Listing
- API Key Revocation
- Centralized Error Handling
- Repository–Service Architecture
- Prisma ORM with PostgreSQL
- Docker-based Local Development
- Live Deployment on Render

---

# ⭐ Highlights

- Production-ready REST API
- JWT-based Authentication
- Secure SHA-256 API Key Storage
- Layered Repository–Service Architecture
- Prisma ORM + PostgreSQL
- Dockerized Local Development
- Deployed on Render

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Fastify | Web Framework |
| TypeScript | Programming Language |
| Prisma ORM | Database ORM |
| PostgreSQL | Database |
| JWT | Authentication |
| bcrypt | Password Hashing |
| Node.js | Runtime |
| Docker | Local PostgreSQL Environment |
| Render | Deployment |
| Neon | Managed PostgreSQL |

---

# 🏛 Architecture

```text
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

The project follows a **layered architecture**, where every layer has a single responsibility.

- **Routes** handle HTTP requests and responses.
- **Middleware** authenticates and validates incoming requests.
- **Services** contain business logic.
- **Repositories** interact with the database.
- **Prisma** maps application models to PostgreSQL.

---

# 📂 Project Structure

```text
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
| GET | `/me` | Get the authenticated user's profile |

---

## API Keys

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api-keys` | Generate a new API key |
| GET | `/api-keys` | List all API keys |
| PATCH | `/api-keys/:id/revoke` | Revoke an API key |

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/esha21101/Orbit.git
cd Orbit/backend
```

## 2. Install dependencies

```bash
npm install
```

## 3. Configure environment variables

Create a `.env` file.

```env
DATABASE_URL="postgresql://..."
JWT_SECRET="your-secret-key"
```

## 4. Start PostgreSQL

```bash
docker compose up -d
```

## 5. Apply database migrations

```bash
npx prisma migrate dev
```

## 6. Start the development server

```bash
npm run dev
```

The API will run at

```text
http://localhost:3000
```

Health Check

```http
GET /health
```

---

# 🧠 Design Decisions

## Layered Architecture

Business logic is separated from database operations using the **Repository–Service** pattern, making the codebase easier to maintain, test, and extend.

---

## Secure Password Storage

Passwords are hashed using **bcrypt** before being stored.

---

## Secure API Keys

Generated API keys are displayed only once.

Only their **SHA-256 hash** is stored in the database.

---

## Response Shaping

The API returns only the fields required by clients instead of exposing raw database records.

---

## Centralized Error Handling

A global error handler ensures consistent HTTP responses across the application.

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