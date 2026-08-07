import { profile } from "../content/profile";

export function Hero() {
  return (
    <div className="mt-4">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
        {profile.name}
      </h1>
      <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
        {profile.role} · {profile.location}
      </p>
      <a
        href={`mailto:${profile.links.email}`}
        className="mt-1 inline-block text-slate-500 hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-100"
      >
        {profile.links.email}
      </a>
      {/* Capped at max-w-3xl on purpose: the page column is wider than this
          now, but unconstrained line length hurts readability for prose. */}
      <div className="mt-6 max-w-3xl space-y-4 text-slate-700 dark:text-slate-300">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
