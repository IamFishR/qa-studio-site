import type { Metadata } from "next";
import Link from "next/link";
import { DocPage, DocSection } from "@/components/DocPage";

export const metadata: Metadata = {
  title: "Journeys",
  description:
    "Record one flow per user journey in QA Studio Pro — login, payment, a config change — then compose them into feature suites.",
};

export default function JourneysGuidePage() {
  return (
    <DocPage
      slug="journeys"
      title="Journeys"
      lead="Record one flow per user journey. Login is a journey. Payment is a journey. Changing a setting is a journey. Do not record the whole product as one tape."
    >
      <DocSection title="One flow per journey">
        <p>
          A journey is a single path a person takes to get one thing done. Keep
          the recording to that path. When the path changes, you re-record or
          edit that flow — not an 80-step mega-script that also logs in, also
          searches, also checks out.
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

      <DocSection title="Why not one giant recording">
        <p>
          Giant recordings fail in the middle and waste the rest of the run.
          They are also harder to reuse: staging vs prod, a different user, a
          skip-login when you already have a session. Small journeys compose; a
          blob does not.
        </p>
      </DocSection>

      <DocSection title="Compose with folders">
        <p>
          Put related journeys in a{" "}
          <Link href="/docs/folders" className="text-zinc-200 hover:underline">
            folder
          </Link>{" "}
          and run them in order as a feature suite — login, then payment. Select
          the set you want; it fail-fasts on the first failure.
        </p>
      </DocSection>

      <DocSection title="Edit instead of re-recording everything">
        <p>
          After capture you can change any step: waits, asserts,{" "}
          <Link href="/docs/variables" className="text-zinc-200 hover:underline">
            variables
          </Link>
          . Optional advanced steps: extract, condition, loop, API call, script,
          network mock, prompt/OTP. Use those when the UI is awkward (a custom
          widget, an OTP) — not as a reason to turn one journey into a program.
        </p>
      </DocSection>

      <DocSection title="What a journey is not">
        <p>
          This is not a test-management suite, a shared project, or a CI job.
          A journey is a local flow in Chrome. If you later want it in CI,{" "}
          <Link href="/docs/export" className="text-zinc-200 hover:underline">
            export Playwright TypeScript
          </Link>{" "}
          and own that file in your repo.
        </p>
      </DocSection>
    </DocPage>
  );
}
