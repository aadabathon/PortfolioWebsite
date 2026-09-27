import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  const { pathname, hash } = useLocation();

  // React Router doesn't act on the hash itself. Without this, "/#projects"
  // from another route lands on the home page at the top and never scrolls.
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const target = document.querySelector(hash);
    target?.scrollIntoView({ behavior: "smooth" });
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
