import { profile } from "../content/profile";

export function ResumeViewer() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Resume
        </h3>
        <div className="flex gap-4 text-sm">
          <a
            href="/transcript.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 underline underline-offset-2 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            Transcripts
          </a>
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 underline underline-offset-2 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            Open in New Tab
          </a>
          <a
            href={profile.links.resume}
            download
            className="text-slate-600 underline underline-offset-2 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
          >
            Download
          </a>
        </div>
      </div>
      <iframe
        src={profile.links.resume}
        title="Resume"
        className="mt-3 h-[70vh] min-h-[500px] w-full rounded-lg border border-slate-200 dark:border-slate-800"
      >
        <p>
          Your browser can't display embedded PDFs.{" "}
          <a
            href={profile.links.resume}
            className="underline underline-offset-2"
          >
            Download the resume instead
          </a>
          .
        </p>
      </iframe>
    </div>
  );
}
