import { BackendStatus } from "./BackendStatus";

export function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-6 py-8 text-xs text-slate-400 dark:text-slate-600">
      <BackendStatus />
    </footer>
  );
}
