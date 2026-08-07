import type { BackendStatus } from "../types/health";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080";

export async function fetchBackendStatus(): Promise<BackendStatus> {
  const response = await fetch(`${API_BASE_URL}/actuator/health`);

  if (!response.ok) {
    throw new Error(`Backend health check failed: ${response.status}`);
  }

  return response.json();
}
