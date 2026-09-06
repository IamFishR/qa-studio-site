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
          className="text-sm font-medium tracking-tight text-zinc-100 hover:text-white"
        >
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
