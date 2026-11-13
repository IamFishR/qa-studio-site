import type { Metadata } from "next";
import Link from "next/link";
import { DocPage, DocSection } from "@/components/DocPage";
import { ScreenshotPlaceholder } from "@/components/ScreenshotPlaceholder";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Folders",
  description:
    "Use folders in QA Studio Pro to group journeys and run a selected set in order. If one flow fails, the later ones do not start.",
  path: "/docs/folders",
  ogTitle: "Folders · QA Studio Pro",
  ogDescription:
    "Use folders in QA Studio Pro to group journeys and run a selected set in order. If one flow fails, the later ones do not start.",
});

export default function FoldersGuidePage() {
  return (
    <DocPage
      slug="folders"
      title="Folders"
      lead="A folder groups related journeys so you can run them in order. Select which flows to include, then press Play. If one fails, the later ones do not start."
    >
      <DocSection title="How to group journeys">
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
          . The folder only groups them for a run.
        </p>
      </DocSection>

      <DocSection title="Select and run">
        <p>
          Pick the flows to run. They execute in order. If login fails, payment
          does not start. That is the point of fail-fast: you debug the first
          break instead of watching later journeys fail because the session
          never existed.
        </p>
        <ScreenshotPlaceholder caption="If one flow in a folder fails, the later flows do not start." />
      </DocSection>

      <DocSection title="What to put together">
        <p>
          Group journeys that share a setup, such as a login and the pages that
          follow it. Keep a short smoke path in one folder. Keep an edge-case
          journey out of that folder if you do not want it in every run.
        </p>
      </DocSection>

      <DocSection title="Still local">
        <p>
          Folders live in this browser with the flows. There is no shared
          project, role-based access, or cloud run history.
        </p>
      </DocSection>
    </DocPage>
  );
}
