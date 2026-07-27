from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health_returns_ok():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_public_voice_service_health_returns_ok():
    response = client.get("/api/voice-service/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}
