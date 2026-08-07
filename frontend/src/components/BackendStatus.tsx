import { useEffect, useState } from "react";
import { fetchBackendStatus } from "../services/api";

type ConnectionState = "checking" | "connected" | "unreachable";

const DOT_COLOR: Record<ConnectionState, string> = {
  checking: "bg-slate-400",
  connected: "bg-emerald-500",
  unreachable: "bg-red-500",
};

export function BackendStatus() {
  const [state, setState] = useState<ConnectionState>("checking");

  useEffect(() => {
    fetchBackendStatus()
      .then(() => setState("connected"))
      .catch(() => setState("unreachable"));
  }, []);

  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`h-1.5 w-1.5 rounded-full ${DOT_COLOR[state]}`} />
      API: {state}
    </span>
  );
}
