import type { Metadata } from "next";
import Link from "next/link";
import { Code, DocPage, DocSection } from "@/components/DocPage";

export const metadata: Metadata = {
  title: "Variables",
  description:
    "Use named variables like {BASE_URL} and {PASSWORD} in QA Studio Pro. Sensitive fields are masked at capture. Values stay in this browser.",
};

export default function VariablesGuidePage() {
  return (
    <DocPage
      slug="variables"
      title="Variables"
      lead="Define named placeholders such as {BASE_URL}, {USERNAME}, and {PASSWORD}. Steps reference them instead of hard-coded values. Everything stays in this browser."
    >
      <DocSection title="Named placeholders">
        <p>
          A variable is a name you reuse in steps. Typical ones:{" "}
          <Code>{"{BASE_URL}"}</Code>, <Code>{"{USERNAME}"}</Code>,{" "}
          <Code>{"{PASSWORD}"}</Code> — plus whatever your product actually
          needs (an org id, a locale, a feature flag).
        </p>
        <p>
          Use variables for anything that should change when you switch{" "}
          <Link href="/docs/environments" className="text-zinc-200 hover:underline">
            environments
          </Link>
          , or anything you do not want baked into a recorded step.
        </p>
      </DocSection>

      <DocSection title="Masked at capture">
        <p>
          Sensitive field masking is on by default. Passwords, cards, and OTPs
          are stored as <Code>{"{VAR}"}</Code> placeholders rather than the
          characters you typed. You set the real values in the extension before
          replay.
        </p>
        <p>
          That is a local convenience, not a vault. Anyone with this Chrome
          profile can open the extension and see the values you stored. Treat
          the profile like you would a password manager on this machine.
        </p>
      </DocSection>

      <DocSection title="Where values live">
        <p>
          Variables are stored with your flows in IndexedDB on this device. They
          are not synced, not backed up to us, and not sent to an AI service.
          Uninstalling the extension clears them.
        </p>
      </DocSection>

      <DocSection title="With environments">
        <p>
          The same flow can run against staging and prod (or two test users)
          because the steps say <Code>{"{BASE_URL}"}</Code>, not a literal host.
          You pick the environment at play time; that choice supplies the
          values. Details in the{" "}
          <Link href="/docs/environments" className="text-zinc-200 hover:underline">
            environments guide
          </Link>
          .
        </p>
      </DocSection>

      <DocSection title="Exporting">
        <p>
          Export is explicit — JSON, YAML, or Playwright TypeScript. If a file
          includes credentials you stored as variable values, treat that file as
          sensitive. QA Studio Pro does not upload it; you decide where it goes.
          See{" "}
          <Link href="/docs/export" className="text-zinc-200 hover:underline">
            export
          </Link>
          .
        </p>
      </DocSection>
    </DocPage>
  );
}
