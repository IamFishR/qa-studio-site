import type { Metadata } from "next";
import Link from "next/link";
import { Code, DocPage, DocSection } from "@/components/DocPage";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Variables",
  description:
    "Use named variables like {BASE_URL} and {PASSWORD} in QA Studio Pro. Sensitive fields are masked at capture. Values stay in this browser.",
  path: "/docs/variables",
  ogTitle: "Variables · QA Studio Pro",
  ogDescription:
    "Use named variables like {BASE_URL} and {PASSWORD} in QA Studio Pro. Sensitive fields are masked at capture. Values stay in this browser.",
});

export default function VariablesGuidePage() {
  return (
    <DocPage
      slug="variables"
      title="Variables"
      lead="Define named placeholders such as {BASE_URL}, {USERNAME}, and {PASSWORD}. Steps reference them instead of hard-coded values. Everything stays in this browser."
    >
      <DocSection title="Named placeholders">
        <p>
          A variable is a name you reuse in steps. Common names are{" "}
          <Code>{"{BASE_URL}"}</Code>, <Code>{"{USERNAME}"}</Code>, and{" "}
          <Code>{"{PASSWORD}"}</Code>. Add others your product needs, such as
          an org id, a locale, or a feature flag.
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
          Values stay in this Chrome profile. Anyone who can open this profile
          can open the extension and see them. Treat the profile the way you
          would a password manager on this machine.
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
          Export is a file you choose: JSON, YAML, or Playwright TypeScript
          (.spec.ts). If that file includes credentials you stored as variable
          values, treat the file as sensitive. QA Studio Pro does not upload
          it. You decide where it goes. See the{" "}
          <Link href="/docs/export" className="text-zinc-200 hover:underline">
            export guide
          </Link>
          .
        </p>
      </DocSection>
    </DocPage>
  );
}
