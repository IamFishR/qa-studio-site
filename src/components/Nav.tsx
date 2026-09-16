"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AddToChrome } from "./AddToChrome";

const links = [
  { href: "/features", label: "Features" },
  { href: "/docs", label: "Docs" },
  { href: "/faq", label: "FAQ" },
];

function isActive(pathname: string, href: string) {
  if (href === "/docs") {
    return pathname === "/docs" || pathname.startsWith("/docs/");
  }
  return pathname === href;
}

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-zinc-800/80">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-sm font-medium tracking-tight text-zinc-100 hover:text-white"
          >
            <span
              className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-zinc-800 bg-zinc-950"
              aria-hidden
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="6.5"
                  stroke="#FF6A3D"
                  strokeWidth="1.75"
                />
                <circle cx="12" cy="12" r="2.25" fill="#FF6A3D" />
              </svg>
            </span>
            QA Studio Pro
          </Link>
          <div className="sm:hidden">
            <AddToChrome variant="compact" />
          </div>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-sm text-zinc-100"
                    : "text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                }
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <span className="hidden sm:inline-flex">
            <AddToChrome variant="compact" />
          </span>
        </nav>
      </div>
    </header>
  );
}
