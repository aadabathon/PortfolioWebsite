import { profile } from "../content/profile";

export function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
        {profile.name}
      </h1>
      <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
        {profile.role} · {profile.location}
      </p>
      <div className="mt-6 space-y-4 text-slate-700 dark:text-slate-300">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
