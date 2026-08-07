from fastapi import APIRouter

router = APIRouter()


@router.get("/health")
def health_check() -> dict[str, str]:
    """Liveness check used by Docker/Railway and manual testing."""
    return {"status": "ok"}
