import type { Metadata } from "next";
import Link from "next/link";
import { Code, DocPage, DocSection } from "@/components/DocPage";
import { Steps } from "@/components/Steps";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Record",
  description:
    "How to record browser flows in QA Studio Pro, including clicks, typing, and navigation, as steps you can play back.",
  path: "/docs/record",
  ogTitle: "Record · QA Studio Pro",
  ogDescription:
    "How to record browser flows in QA Studio Pro, including clicks, typing, and navigation, as steps you can play back.",
});

export default function RecordGuidePage() {
  return (
    <DocPage
      slug="record"
      title="Record"
      lead="Click Record, then use the page as you normally would. QA Studio Pro captures the interaction as structured steps. You don't write selectors."
    >
      <DocSection title="How to record">
        <Steps
          items={[
            "Open the site in Chrome. Recording cannot attach to chrome:// pages or the Chrome Web Store.",
            "Open QA Studio Pro and press Record.",
            "Click, type, navigate, upload a file, drag, or dismiss a dialog, depending on the path you are recording.",
            "Press Stop. That session is now a flow you can edit, replay, or export.",
          ]}
        />
      </DocSection>

      <DocSection title="What gets captured">
        <ul className="list-disc space-y-2 pl-5">
          <li>Clicks: left, double, right, middle, with optional offsets</li>
          <li>Typing, including contenteditable</li>
          <li>File uploads</li>
          <li>Drag and drop</li>
          <li>Hovers and keypresses</li>
          <li>Dialogs</li>
          <li>Scroll</li>
          <li>Navigations, including SPA soft navigations</li>
        </ul>
      </DocSection>

      <DocSection title="Recording scope">
        <p>
          Recording is limited to the tab where you start and to tabs in that
          tab&apos;s opener lineage. The extension does not record unrelated tabs
          or browse your history outside that scope.
        </p>
      </DocSection>

      <DocSection title="Sensitive fields">
        <p>
          Sensitive field masking is on by default. Values typed into fields
          identified as sensitive (passwords, cards, OTPs) are stored as{" "}
          <Code>{"{VAR}"}</Code> placeholders rather than raw text. Fill the real
          values as <Link href="/docs/variables" className="text-zinc-200 hover:underline">variables</Link>{" "}
          before you replay.
        </p>
      </DocSection>

      <DocSection title="After you stop">
        <p>
          Edit any step. Add waits, asserts, and variables. You can also insert
          extract, condition, loop, API call, script, network mock, or prompt/OTP
          steps when you need them. Keep the recording to{" "}
          <Link href="/docs/journeys" className="text-zinc-200 hover:underline">
            one journey
          </Link>
          . A shorter flow is easier to play back and to edit when a step fails.
        </p>
      </DocSection>

      <DocSection title="The debugger banner">
        <p>
          Chrome shows a debugger banner while the extension attaches the
          debugger API. That API is how record and replay fire real input
          events. The banner is normal for this extension. It is not a malware
          warning. See the{" "}
          <Link href="/faq#permissions" className="text-zinc-200 hover:underline">
            permissions FAQ
          </Link>{" "}
          for more detail.
        </p>
      </DocSection>

      <DocSection title="Honest limits">
        <ul className="list-disc space-y-2 pl-5">
          <li>Debugger cannot attach to chrome:// or the Chrome Web Store.</li>
          <li>
            Closed shadow DOM is session-scoped and can still fail on some hosts.
          </li>
          <li>Virtualized lists need a recorded scroll.</li>
          <li>
            File-upload replay needs an absolute path set after you record.
          </li>
          <li>Complex rich-text editors may need a script step.</li>
        </ul>
      </DocSection>
    </DocPage>
  );
}
