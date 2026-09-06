import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "QA Studio Pro privacy policy — local-first, no servers, telemetry, analytics, or AI.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-28 pt-16 sm:pt-24">
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-zinc-500">Last updated: July 10, 2026</p>

      <div className="mt-12 space-y-12 text-sm leading-relaxed text-zinc-400">
        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-100">Overview</h2>
          <p>
            QA Studio Pro is a local-first Chrome extension. It does not use
            servers, telemetry, analytics, or AI. Your data stays on your device.
            We do not collect, transmit, or store personal information about you
            or your browsing activity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-100">
            Data handled locally
          </h2>
          <p>
            The extension may store the following on your device only, for the
            purpose of recording and replaying QA flows:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>URLs visited during a recording</li>
            <li>CSS selectors and related interaction metadata</li>
            <li>Typed values (subject to sensitive-field masking)</li>
            <li>Failure screenshots captured during replay</li>
            <li>Run history</li>
            <li>Settings and variables you configure</li>
          </ul>
          <p>
            This data never leaves your browser except when you explicitly
            export it or when a step you configure makes an HTTP request to a
            destination you choose.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-100">
            Recording scope
          </h2>
          <p>
            Recording is limited to the tab where you start recording and to tabs
            in that tab&apos;s opener lineage. The extension does not record
            unrelated tabs or browse your history outside that scope.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-100">
            Sensitive field masking
          </h2>
          <p>
            Sensitive field masking is on by default. Values typed into fields
            identified as sensitive are stored as{" "}
            <code className="rounded border border-zinc-800 bg-zinc-950 px-1.5 py-0.5 text-zinc-300">
              {"{VAR}"}
            </code>{" "}
            placeholders rather than raw text. You can manage variables in
            settings.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-100">
            What we do not transmit
          </h2>
          <p>
            Nothing is transmitted to us. There is no backend for QA Studio Pro,
            no account system, and no analytics or crash reporting that phones
            home. If you add API call steps to a flow, those requests go only to
            the destinations you specify — they are your calls, not ours.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-100">
            Retention and deletion
          </h2>
          <p>
            Data is kept in IndexedDB (and related browser storage) on your
            device. Run history retains the newest 50 runs; older runs are
            pruned automatically. Uninstalling the extension clears stored data
            from your browser.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-100">Contact</h2>
          <p>
            Questions about this policy:{" "}
            <a
              href="mailto:thisisganesh353@gmail.com"
              className="text-[#FF6A3D] hover:underline"
            >
              thisisganesh353@gmail.com
            </a>
            . See also{" "}
            <Link href="/support" className="text-zinc-200 hover:underline">
              Support
            </Link>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
