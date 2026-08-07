import { profile } from "../content/profile";

export function Skills() {
  return (
    <div className="mt-10">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        Skills
      </h3>
      <div className="mt-4 space-y-4">
        {profile.skillGroups.map((group) => (
          <div key={group.title}>
            <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {group.title}
            </h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
