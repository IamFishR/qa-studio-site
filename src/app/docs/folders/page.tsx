import type { Metadata } from "next";
import Link from "next/link";
import { DocPage, DocSection } from "@/components/DocPage";

export const metadata: Metadata = {
  title: "Folders",
  description:
    "Use folders in QA Studio Pro as feature suites — group journeys and run a selected set in order, fail-fast.",
};

export default function FoldersGuidePage() {
  return (
    <DocPage
      slug="folders"
      title="Folders"
      lead="A folder is a feature suite: related journeys grouped so you can run them in order. Select the set, play, fail-fast."
    >
      <DocSection title="Folders as feature suites">
        <p>
          Name a folder after the feature, not after a date or a person.
          Example: a <strong className="font-medium text-zinc-200">Checkout</strong>{" "}
          folder that holds:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Login</li>
          <li>Add to cart</li>
          <li>Pay</li>
        </ul>
        <p>
          Each item is its own{" "}
          <Link href="/docs/journeys" className="text-zinc-200 hover:underline">
            journey
          </Link>
          . The folder is how you say &ldquo;this is the suite.&rdquo;
        </p>
      </DocSection>

      <DocSection title="Select and run, fail-fast">
        <p>
          Pick the flows to run. They execute in order. If login fails, payment
          does not start. That is the point of fail-fast: you debug the first
          break instead of watching later journeys fail because the session
          never existed.
        </p>
      </DocSection>

      <DocSection title="What to put together">
        <p>
          Group journeys that share a setup and a product surface. Keep a smoke
          path short. Keep an edge-case journey out of the happy-path folder if
          you do not want it in every run.
        </p>
      </DocSection>

      <DocSection title="Still local">
        <p>
          Folders live in this browser with the flows. There is no shared
          project, no role-based access, no cloud run. If you need a team
          test-management tool, this extension is not that — and does not try
          to be.
        </p>
      </DocSection>
    </DocPage>
  );
}
