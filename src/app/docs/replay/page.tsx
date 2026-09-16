import type { Metadata } from "next";
import Link from "next/link";
import { DocPage, DocSection } from "@/components/DocPage";
import { Steps } from "@/components/Steps";

export const metadata: Metadata = {
  title: "Replay & debug",
  description:
    "Replay QA Studio Pro flows locally with Chrome DevTools Protocol input, step status, and failure screenshots. Debug in the extension — no cloud.",
};

export default function ReplayGuidePage() {
  return (
    <DocPage
      slug="replay"
      title="Replay & debug"
      lead="Play a flow with one click. Replay uses the Chrome DevTools Protocol to fire real input events, then shows you step status and a screenshot if something fails."
    >
      <DocSection title="How replay works">
        <p>
          Play runs in this browser, against the live page. It is not a
          headless grid and not a cloud runner.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Real input events via the Chrome DevTools Protocol</li>
          <li>Retries when selector resolution is flaky</li>
          <li>Waits for the page to settle before the next step</li>
          <li>
            Follows tabs the flow opens, plus iframes and open shadow DOM
          </li>
        </ul>
      </DocSection>

      <DocSection title="A debug loop">
        <Steps
          items={[
            "Play the journey (or the selected folder).",
            "If a step fails, open the failure screenshot and the step that broke.",
            "Edit that step — wait, assert, offset, variable — instead of re-recording the whole flow.",
            "Play again. Run history keeps the newest 50 runs; older runs are pruned.",
          ]}
        />
      </DocSection>

      <DocSection title="What you will see">
        <p>
          Each step gets a clear status as it runs. Failures capture a
          screenshot locally. Chrome will show a debugger banner while the
          debugger API is attached; that is expected. See{" "}
          <Link href="/faq#permissions" className="text-zinc-200 hover:underline">
            permissions
          </Link>
          .
        </p>
      </DocSection>

      <DocSection title="Before you hit Play">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Pick the{" "}
            <Link href="/docs/environments" className="text-zinc-200 hover:underline">
              environment
            </Link>{" "}
            if the flow uses variables.
          </li>
          <li>
            Fill{" "}
            <Link href="/docs/variables" className="text-zinc-200 hover:underline">
              variable
            </Link>{" "}
            values for anything that was masked at capture.
          </li>
          <li>
            For file-upload steps, set an absolute path after record — replay
            cannot guess the file you picked last time.
          </li>
        </ul>
      </DocSection>

      <DocSection title="Honest limits">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Closed shadow DOM is session-scoped and can still fail on some hosts.
          </li>
          <li>Virtualized lists need a recorded scroll.</li>
          <li>Complex rich-text editors may need a script step.</li>
          <li>
            Debugger cannot attach to chrome:// or the Chrome Web Store.
          </li>
          <li>
            This is Chrome-only in v1. It is not Playwright, Selenium, or a CI
            worker —{" "}
            <Link href="/faq#playwright" className="text-zinc-200 hover:underline">
              how they differ
            </Link>
            .
          </li>
        </ul>
      </DocSection>
    </DocPage>
  );
}
