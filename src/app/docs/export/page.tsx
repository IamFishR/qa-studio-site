import type { Metadata } from "next";
import Link from "next/link";
import { DocPage, DocSection } from "@/components/DocPage";

export const metadata: Metadata = {
  title: "Export",
  description:
    "Export a QA Studio Pro flow as JSON, YAML, or Playwright TypeScript. Explicit, local, and under your control — nothing is uploaded.",
};

export default function ExportGuidePage() {
  return (
    <DocPage
      slug="export"
      title="Export"
      lead="Export a flow as JSON, YAML, or a Playwright TypeScript file. That is the moment a copy leaves the browser — because you asked, not because we sync."
    >
      <DocSection title="Formats">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-zinc-200">JSON</strong> — a
            structured copy of the flow for backup or moving to another machine
            yourself
          </li>
          <li>
            <strong className="font-medium text-zinc-200">YAML</strong> — same
            idea, easier to skim and diff in a text editor
          </li>
          <li>
            <strong className="font-medium text-zinc-200">Playwright TypeScript</strong>{" "}
            — a starting point you drop into your own Playwright repo
          </li>
        </ul>
      </DocSection>

      <DocSection title="JSON and YAML">
        <p>
          Use these when you want a file you control. Copy it to another Chrome
          profile, keep a backup, or review steps in git. QA Studio Pro does
          not host the file. If it contains variable values, treat it like any
          other secret-bearing artifact.
        </p>
      </DocSection>

      <DocSection title="Playwright TypeScript">
        <p>
          When a journey has earned a place in CI, export TS and take it into
          the project that already runs Playwright. From that point the test is
          yours: browsers, fixtures, reporters, grid. The extension is not a CI
          runner and does not talk to your pipeline.
        </p>
        <p>
          Export is a handoff, not a sync. Edit the generated file like any
          other test. See{" "}
          <Link href="/faq#playwright" className="text-zinc-200 hover:underline">
            vs Playwright and Selenium
          </Link>
          .
        </p>
      </DocSection>

      <DocSection title="Optional local CLI">
        <p>
          A local CLI runner exists for power users. It is not part of the
          Chrome Web Store item. If you are only using the extension, you can
          ignore it.
        </p>
      </DocSection>

      <DocSection title="What export is not">
        <p>
          Not cloud sync. Not a team workspace. Not telemetry. The other way
          data can leave the browser is an HTTP step you add, to a destination
          you type. Those requests are yours. We do not receive them.
        </p>
      </DocSection>
    </DocPage>
  );
}
