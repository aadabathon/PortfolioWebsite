import { profile } from "../content/profile";

// Two columns rather than four stacked rows: thirty-odd identical pills in a
// single column was the noisiest block on the page.
export function Skills() {
  return (
    <div className="mt-16">
      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
        Skills
      </h3>
      <div className="mt-6 grid gap-x-12 gap-y-8 sm:grid-cols-2">
        {profile.skillGroups.map((group) => (
          <div key={group.title}>
            <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
              {group.title}
            </h4>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
              {group.skills.map((skill) => (
                <li key={skill} className="text-sm text-ink-muted">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
