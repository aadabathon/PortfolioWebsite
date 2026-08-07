# Architecture

## Overview

This is a small full-stack application split into three independently
deployable services, backed by a single PostgreSQL database. It is
intentionally a monolith-per-concern setup rather than a microservice
architecture: three services exist because they have genuinely different
runtimes (browser, JVM, Python), not because the domain has been decomposed
into small services.

```
Browser
  |
  v
React Frontend (TypeScript, Vite)
  |
  v
Spring Boot API (Java) ----> PostgreSQL
  |
  v
FastAPI ML Service (Python)
```

The frontend only ever talks to the Spring Boot API. The Python service is
not reachable from the browser directly — it exists to serve the Java
backend, which is the single entry point for all application logic.

## Services

### `frontend/` — React + TypeScript (Vite)

Renders the UI and talks to the backend over REST using `fetch`. All API
calls are wrapped in `src/services/`, response/request shapes live in
`src/types/`, and pages (routed, top-level views) are kept separate from
reusable `src/components/`.

The frontend has no direct knowledge of PostgreSQL or the ML service — it
only knows the backend's base URL, injected via the `VITE_API_BASE_URL`
environment variable so the same build works locally and in production.

### `backend/` — Spring Boot (Java)

The primary application server and single source of truth for domain
logic. Owns:

- All persistent data, via Spring Data JPA against PostgreSQL.
- Input validation and (eventually) authentication/authorization.
- The public REST API consumed by the frontend.
- Coordination with the ML service: if a request needs a prediction, the
  backend calls FastAPI internally and returns a normal REST response to
  the frontend. The browser never talks to Python directly.

A `/actuator/health` endpoint (from Spring Boot Actuator) is exposed for
manual checks and container/orchestrator health probes.

### `ml-service/` — FastAPI (Python)

Exists specifically for Python/ML workloads: model loading, preprocessing,
and inference. It is a plain JSON API with no persistence of its own and no
concept of users or authentication — those concerns stay in the Java
backend. Keeping this service narrowly scoped is deliberate: it should only
grow to the extent there's an actual model behind it, not become a general
second backend.

Exposes `GET /health` for the same reason the backend exposes
`/actuator/health`.

### PostgreSQL

A single database instance for the application's persistent data (projects,
blog posts, and later admin users). The ML service does not get its own
database — it is stateless.

## Environment-based configuration

Nothing about how services find each other is hardcoded. Each service reads
connection details from environment variables, with sensible localhost
defaults for running things outside Docker:

| Variable            | Consumed by | Purpose                                   |
|---------------------|-------------|--------------------------------------------|
| `DB_HOST`/`DB_PORT`/`DB_NAME`/`DB_USER`/`DB_PASSWORD` | backend | PostgreSQL connection |
| `ML_SERVICE_URL`    | backend     | Base URL of the FastAPI service            |
| `VITE_API_BASE_URL` | frontend    | Base URL of the Spring Boot API            |
| `POSTGRES_DB`/`POSTGRES_USER`/`POSTGRES_PASSWORD` | postgres | Database bootstrap credentials |

Inside Docker Compose, services reach each other by service name (e.g.
`http://ml-service:8000`). The frontend is the exception: `VITE_API_BASE_URL`
must be a URL the *browser* can reach, so it points at `localhost`, not the
Docker-internal `backend` hostname.

## Why not more services / less structure?

- **No API gateway or service mesh** — three services on one small VM/PaaS
  don't need one; Docker Compose (locally) and Railway's networking
  (in production) are sufficient.
- **No message queue** — all communication so far is synchronous
  request/response, which fits the workload (a handful of REST calls, not
  background jobs at scale).
- **No separate auth service** — the app has a single admin identity, not
  multi-tenant user management, so authentication lives inside the Spring
  Boot app rather than as its own service.

## Current status

This document describes the scaffolding stage: each service starts, exposes
a health check, and the frontend can reach the backend. No domain data,
authentication, or ML inference is implemented yet. See the project's
vertical-slice plan for what's next.
