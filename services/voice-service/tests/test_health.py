from fastapi.testclient import TestClient

from app.main import PUBLIC_PREFIX, app

client = TestClient(app)

# FastAPI's own docs routes; not part of the service's API surface.
BUILTIN_PATHS = {"/openapi.json", "/docs", "/docs/oauth2-redirect", "/redoc"}


def test_health_returns_ok():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_public_voice_service_health_returns_ok():
    response = client.get("/api/voice-service/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_every_route_is_reachable_under_the_public_prefix():
    """A route registered on `app` instead of `router` works locally but 404s in
    production, since Vercel forwards the prefix unstripped. Catch it here."""
    paths = {r.path for r in app.routes if getattr(r, "path", None)} - BUILTIN_PATHS
    bare = {p for p in paths if not p.startswith(PUBLIC_PREFIX)}

    missing = {p for p in bare if PUBLIC_PREFIX + p not in paths}
    assert not missing, (
        f"routes reachable locally but not in production: {sorted(missing)}. "
        f"Define routes on `router`, not on `app`."
    )
