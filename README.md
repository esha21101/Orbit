# 🚀 Orbit

Orbit is an AI API Gateway that provides secure authentication and API key management with a clean, modular backend architecture. It is designed to serve as the foundation for applications that need to manage and route AI API requests securely.

Built with Fastify, TypeScript, Prisma, and PostgreSQL.

---

## Features

- JWT authentication
- User registration and login
- Protected routes
- Secure API key generation
- SHA-256 API key hashing
- API key listing and revocation
- Centralized error handling
- Repository–Service architecture
- Prisma ORM with PostgreSQL

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Fastify | Web framework |
| TypeScript | Language |
| Prisma | ORM |
| PostgreSQL | Database |
| JWT | Authentication |
| bcrypt | Password hashing |
| Node.js | Runtime |
| Docker | Local database environment |

---

## Architecture

```
                    Client
                       │
                       ▼
               Fastify Routes
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

The project follows a layered architecture where each layer has a single responsibility.

- **Routes** handle HTTP requests and responses.
- **Services** contain business logic.
- **Repositories** interact with the database.
- **Prisma** maps application models to PostgreSQL.

---

## Project Structure

```
backend/
├── src/
│   ├── common/
│   │   └── errors/
│   ├── db/
│   ├── middleware/
│   ├── modules/
│   │   ├── user/
│   │   └── api-key/
│   ├── plugins/
│   ├── types/
│   ├── utils/
│   ├── app.ts
│   └── server.ts
├── prisma/
├── package.json
└── README.md
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/users` | Register a new user |
| POST | `/login` | Authenticate a user |
| GET | `/me` | Get the authenticated user's profile |

### API Keys

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api-keys` | Generate a new API key |
| GET | `/api-keys` | List all API keys for the authenticated user |
| PATCH | `/api-keys/:id/revoke` | Revoke an API key |

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/orbit.git
cd orbit/backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
DATABASE_URL="postgresql://..."
JWT_SECRET="your-secret-key"
```

### 4. Start PostgreSQL

```bash
docker compose up -d
```

### 5. Run Prisma migrations

```bash
npx prisma migrate dev
```

### 6. Start the development server

```bash
npm run dev
```

The API will be available at:

```
http://localhost:3000
```

Health check:

```
GET /health
```

---

## Design Decisions

### Layered Architecture

Business logic is separated from database operations using the Repository–Service pattern. This keeps each layer focused on a single responsibility and makes the codebase easier to extend and maintain.

### Secure Password Storage

User passwords are hashed with **bcrypt** before being stored.

### Secure API Keys

Generated API keys are shown only once. The database stores only their SHA-256 hash, never the original key.

### Response Shaping

API responses expose only the fields required by the client instead of returning raw database records.

### Centralized Error Handling

Application errors are handled through a global error handler, allowing consistent HTTP responses across all endpoints.

---

## Roadmap

- [ ] Delete API keys
- [ ] API key expiration
- [ ] Rate limiting
- [ ] Usage analytics
- [ ] Request logging
- [ ] AI provider management
- [ ] Redis caching
- [ ] Cost tracking
- [ ] Admin dashboard
- [ ] CI/CD pipeline
- [ ] Production deployment

---

## License

This project is licensed under the MIT License.
