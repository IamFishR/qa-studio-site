import Link from "next/link";

const features = [
  {
    title: "Record",
    body: "Capture clicks, typing, and navigation on the start tab and its opener lineage.",
  },
  {
    title: "Replay",
    body: "Run recorded flows locally with clear step status and failure screenshots.",
  },
  {
    title: "Variables",
    body: "Mask sensitive fields by default and reuse values as {VAR} placeholders.",
  },
  {
    title: "Export",
    body: "Take your flows with you — keep them on-device, share as you choose.",
  },
  {
    title: "Privacy",
    body: "No account. No server. No telemetry. No AI. Everything stays in your browser.",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="pb-20 pt-24 sm:pt-32">
        <p className="mb-4 text-sm font-medium tracking-wide text-[#FF6A3D]">
          Chrome extension
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          QA Studio Pro
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-400">
          Local-first record and replay for QA flows. Capture once, run again —
          entirely on your machine. No account, no server, no AI.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/privacy"
            className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-950 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
          >
            Privacy policy
          </Link>
          <Link
            href="/support"
            className="inline-flex items-center rounded-full border border-transparent px-5 py-2.5 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
          >
            Support →
          </Link>
        </div>
      </section>

      <section className="border-t border-zinc-800/80 pb-24 pt-16">
        <h2 className="text-sm font-medium tracking-wide text-zinc-500">
          What it does
        </h2>
        <ul className="mt-10 space-y-10">
          {features.map((f) => (
            <li key={f.title} className="grid gap-2 sm:grid-cols-[140px_1fr]">
              <span className="text-sm font-medium text-zinc-100">{f.title}</span>
              <p className="text-sm leading-relaxed text-zinc-400">{f.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-zinc-800/80 pb-28 pt-16">
        <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
          QA Studio Pro is a Chrome extension. Your recordings, variables, and
          run history live in local storage on your device. Nothing is sent to
          us.
        </p>
      </section>
    </div>
  );
}
