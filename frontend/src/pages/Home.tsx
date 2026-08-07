import { useEffect, useState } from "react";
import { fetchBackendStatus } from "../services/api";

type ConnectionState = "checking" | "connected" | "unreachable";

export function Home() {
  const [backendState, setBackendState] = useState<ConnectionState>("checking");

  useEffect(() => {
    fetchBackendStatus()
      .then(() => setBackendState("connected"))
      .catch(() => setBackendState("unreachable"));
  }, []);

  return (
    <main>
      <h1>Portfolio</h1>
      <p>Frontend is running.</p>
      <p>Backend API: {backendState}</p>
    </main>
  );
}
