import type { Metadata } from "next";
import Link from "next/link";
import { CircleHelp, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with QA Studio Pro — FAQ and contact.",
};

const faqs = [
  {
    q: "Why do I see a debugger banner?",
    a: "Chrome shows a debugger banner when an extension attaches the debugger API (used for reliable recording/replay). This is expected behavior for QA Studio Pro, not a malware warning.",
  },
  {
    q: "How do I load an unpacked build?",
    a: "Open chrome://extensions, enable Developer mode, choose Load unpacked, and select the extension folder. Reload the extension after updates.",
  },
  {
    q: "Is anything sent to a server?",
    a: "No. QA Studio Pro is local-only. Recordings, variables, and run history stay on your device. There is no account and no cloud sync.",
  },
  {
    q: "Should I record my whole checkout as one flow?",
    a: "Prefer one flow per journey — login, payment, a config change — then put them in a folder and run them in order as a feature suite. Use environments or variables for the same flow under different configs.",
  },
];

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-28 pt-16 sm:pt-24">
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Support
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-400">
        Need help with QA Studio Pro? Start with the FAQ below, or email us
        directly.
      </p>

      <section className="mt-14 space-y-8 border-t border-zinc-800/80 pt-14">
        <h2 className="flex items-center gap-2 text-sm font-medium tracking-wide text-zinc-500">
          <CircleHelp
            className="h-4 w-4 text-[#FF6A3D]"
            strokeWidth={1.75}
            aria-hidden
          />
          FAQ
        </h2>
        <ul className="space-y-10">
          {faqs.map((item) => (
            <li key={item.q} className="space-y-2">
              <h3 className="text-sm font-medium text-zinc-100">{item.q}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{item.a}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 space-y-3 border-t border-zinc-800/80 pt-14">
        <h2 className="flex items-center gap-2 text-sm font-medium tracking-wide text-zinc-500">
          <Mail
            className="h-4 w-4 text-[#FF6A3D]"
            strokeWidth={1.75}
            aria-hidden
          />
          Contact
        </h2>
        <p className="text-sm text-zinc-400">
          Email{" "}
          <a
            href="mailto:thisisganesh353@gmail.com"
            className="text-[#FF6A3D] hover:underline"
          >
            thisisganesh353@gmail.com
          </a>
        </p>
        <p className="text-sm text-zinc-500">
          Read the{" "}
          <Link href="/privacy" className="text-zinc-300 hover:underline">
            privacy policy
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
