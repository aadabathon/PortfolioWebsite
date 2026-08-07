# Development-only image: runs the Vite dev server with hot module reload.
# A production build (multi-stage, served via nginx) will replace this
# during the production-hardening slice.
FROM node:22-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev"]
