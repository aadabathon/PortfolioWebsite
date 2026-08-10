# Portfolio

My personal engineering portfolio: About Me, Projects, and (eventually) a
blog, built as a plain static React/TypeScript site and deployed on
Cloudflare Workers.

It used to be a four-service full-stack app (React frontend, Spring Boot
API, FastAPI ML service, Postgres) hosted on Railway. That was fun to build
and a good way to learn Docker/Compose and PaaS deployment, but a resume
site doesn't need a JVM and a Python runtime idling 24/7 for basically zero
traffic. Everything here is static content now, so it costs nothing to
host. The Quant and ML tools mentioned in the nav will come back later as
their own separate apps, built and deployed independently, spun up only
when actually being demoed.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router

## Running locally

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173.

## Deployment

Pushes to `main` auto-deploy via Cloudflare Workers Builds:

1. Cloudflare clones the repo and runs `npm run build` inside `frontend/`
   (Vite's static output goes to `frontend/dist`).
2. `frontend/wrangler.jsonc` tells Wrangler to serve that `dist` folder as
   static assets, with `not_found_handling: single-page-application` so
   client-side routes like `/blog` fall back to `index.html` instead of
   404ing.
3. `npx wrangler deploy` ships it.

No environment variables, no build secrets, no backend to wire up.

## Repository layout

```
frontend/     React + TypeScript site (the whole app)
```

## What's next

Real content for the Projects section, a proper photo, and blog posts.
Quant and ML tools are future, separate projects — not part of this repo.
