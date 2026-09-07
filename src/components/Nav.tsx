import Link from "next/link";

const links = [
  { href: "/", label: "Product" },
  { href: "/privacy", label: "Privacy" },
  { href: "/support", label: "Support" },
];

export function Nav() {
  return (
    <header className="border-b border-zinc-800/80">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sm font-medium tracking-tight text-zinc-100 hover:text-white"
        >
          <span
            className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-zinc-800 bg-zinc-950"
            aria-hidden
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
              <circle cx="12" cy="12" r="6.5" stroke="#FF6A3D" strokeWidth="1.75" />
              <circle cx="12" cy="12" r="2.25" fill="#FF6A3D" />
            </svg>
          </span>
          QA Studio Pro
        </Link>
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
