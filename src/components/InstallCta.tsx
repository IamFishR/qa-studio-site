import Link from "next/link";
import { AddToChrome } from "./AddToChrome";

export function InstallCta({
  secondary = { href: "/docs", label: "Read the guides" },
}: {
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="border-t border-zinc-800/80 pt-14">
      <p className="max-w-xl text-sm leading-relaxed text-zinc-400">
        QA Studio Pro is free on the Chrome Web Store. No account, no server, no
        AI in v1.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <AddToChrome />
        <Link
          href={secondary.href}
          className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-950 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
        >
          {secondary.label}
        </Link>
      </div>
    </section>
  );
}
