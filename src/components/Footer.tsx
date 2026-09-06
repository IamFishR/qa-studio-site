import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} QA Studio Pro</p>
        <div className="flex gap-5">
          <Link href="/privacy" className="hover:text-zinc-300">
            Privacy
          </Link>
          <Link href="/support" className="hover:text-zinc-300">
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
}
