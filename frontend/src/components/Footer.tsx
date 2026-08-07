import { BackendStatus } from "./BackendStatus";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 text-xs text-slate-400 dark:border-slate-800 dark:text-slate-600">
      <Container>
        <BackendStatus />
      </Container>
    </footer>
  );
}
