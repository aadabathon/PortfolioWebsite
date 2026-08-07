from fastapi import FastAPI

from app.api import health

app = FastAPI(title="Portfolio ML Service")

app.include_router(health.router)
