import { profile } from "../content/profile";

export function Header() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <span className="font-semibold text-slate-900 dark:text-slate-100">
          {profile.name}
        </span>
        <nav className="flex gap-4 text-sm text-slate-600 dark:text-slate-400">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900 dark:hover:text-slate-100"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900 dark:hover:text-slate-100"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.links.email}`}
            className="hover:text-slate-900 dark:hover:text-slate-100"
          >
            Email
          </a>
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900 dark:hover:text-slate-100"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
