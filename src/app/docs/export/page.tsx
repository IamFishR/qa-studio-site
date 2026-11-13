import type { Metadata } from "next";
import Link from "next/link";
import { DocPage, DocSection } from "@/components/DocPage";
import { ScreenshotPlaceholder } from "@/components/ScreenshotPlaceholder";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Export",
  description:
    "Export a QA Studio Pro flow as JSON, YAML, or a Playwright .spec.ts file. Press Export, and Chrome downloads the file. Nothing is uploaded.",
  path: "/docs/export",
  ogTitle: "Export from QA Studio Pro",
  ogDescription:
    "Export a flow as JSON, YAML, or a Playwright .spec.ts file. Chrome downloads the file. Nothing is uploaded.",
});

export default function ExportGuidePage() {
  return (
    <DocPage
      slug="export"
      title="Export"
      lead="Press the Export button and choose JSON, YAML, or Playwright TypeScript (.spec.ts). Chrome downloads the file with a safe filename. A copy leaves the browser only when you export, or when a step you added makes an HTTP request you configured."
    >
      <ScreenshotPlaceholder caption="Export saves the file through Chrome downloads, with a safe filename." />

      <DocSection title="Formats">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-medium text-zinc-200">JSON</strong>. A
            structured copy of the flow for backup or moving to another machine
            yourself
          </li>
          <li>
            <strong className="font-medium text-zinc-200">YAML</strong>. Same
            idea, easier to skim and diff in a text editor
          </li>
          <li>
            <strong className="font-medium text-zinc-200">Playwright TypeScript</strong>
            {" "}(.spec.ts). A starting point you can add to your own Playwright
            project.
          </li>
        </ul>
      </DocSection>

      <DocSection title="JSON and YAML">
        <p>
          Use these when you want a file you control. Copy it to another Chrome
          profile, keep a backup, or review steps in git. Chrome downloads the
          file. QA Studio Pro does not host it. If it contains variable values,
          treat it like any other secret-bearing artifact.
        </p>
      </DocSection>

      <DocSection title="Playwright TypeScript">
        <p>
          If you want the flow as a Playwright test, export a .spec.ts file and
          add it to the project that already runs Playwright. From then on you
          maintain that file, including browsers, fixtures, and reporters. The
          extension is not a CI runner and does not talk to your pipeline.
        </p>
        <p>
          The downloaded file is a copy you edit like any other test. The
          extension does not keep it in sync with the flow. See{" "}
          <Link href="/faq#playwright" className="text-zinc-200 hover:underline">
            how this differs from Playwright and Selenium
          </Link>
          .
        </p>
      </DocSection>

      <DocSection title="Optional local CLI">
        <p>
          A separate local CLI runner exists. It is not part of the Chrome Web
          Store item. If you only use the extension, you can ignore it.
        </p>
      </DocSection>

      <DocSection title="What else can leave the browser">
        <p>
          The other way data can leave the browser is an HTTP step you add, to
          a destination you type. Those requests go only to that destination.
          We do not receive them. Export is not cloud sync, a team workspace,
          or telemetry.
        </p>
      </DocSection>
    </DocPage>
  );
}
