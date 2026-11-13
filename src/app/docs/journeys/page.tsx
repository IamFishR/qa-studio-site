import type { Metadata } from "next";
import Link from "next/link";
import { DocPage, DocSection } from "@/components/DocPage";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Journeys",
  description:
    "Record one flow per path in QA Studio Pro, such as login or payment, then group those flows in a folder and run them in order.",
  path: "/docs/journeys",
  ogTitle: "Journeys · QA Studio Pro",
  ogDescription:
    "Record one flow per path in QA Studio Pro, such as login or payment, then group those flows in a folder and run them in order.",
});

export default function JourneysGuidePage() {
  return (
    <DocPage
      slug="journeys"
      title="Journeys"
      lead="Record one flow per path. Login is a journey. Payment is a journey. Changing a setting is a journey. Do not record the entire product as one long flow."
    >
      <DocSection title="One flow per journey">
        <p>
          A journey is a single path a person takes to get one thing done. Keep
          the recording to that path. When the path changes, re-record or edit
          that flow. Avoid one long script that also logs in, searches, and
          checks out.
        </p>
        <p>Typical splits:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Sign in</li>
          <li>Create or update a record</li>
          <li>Add to cart</li>
          <li>Pay</li>
          <li>Toggle a config or feature flag</li>
        </ul>
      </DocSection>

      <DocSection title="Why shorter flows help">
        <p>
          A long flow that fails halfway still wastes the rest of the run. It
          is also harder to reuse with a different host, user, or an already
          open session. Separate journeys can be combined in a folder.
        </p>
      </DocSection>

      <DocSection title="Compose with folders">
        <p>
          Put related journeys in a{" "}
          <Link href="/docs/folders" className="text-zinc-200 hover:underline">
            folder
          </Link>{" "}
          and run them in order, such as login, then payment. Select the flows
          you want. If one fails, the later ones do not start.
        </p>
      </DocSection>

      <DocSection title="Edit instead of re-recording everything">
        <p>
          After recording, you can change any step, including waits, asserts,
          and{" "}
          <Link href="/docs/variables" className="text-zinc-200 hover:underline">
            variables
          </Link>
          . Optional advanced steps are extract, condition, loop, API call,
          script, network mock, and prompt/OTP. Use those when the UI needs
          them, such as a custom widget or an OTP. Do not turn one journey into
          a long program.
        </p>
      </DocSection>

      <DocSection title="Where a journey lives">
        <p>
          A journey is a flow stored in this Chrome browser. It does not run in
          your build pipeline. If you want a test in your Playwright project,
          export a{" "}
          <Link href="/docs/export" className="text-zinc-200 hover:underline">
            .spec.ts file
          </Link>{" "}
          and keep that file in your repo. The extension does not talk to CI.
        </p>
      </DocSection>
    </DocPage>
  );
}
