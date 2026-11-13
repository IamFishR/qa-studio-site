import type { Metadata } from "next";
import Link from "next/link";
import { Code, DocPage, DocSection } from "@/components/DocPage";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Environments",
  description:
    "Switch environments when you press Play in QA Studio Pro. Reuse the same journey with different variable values, such as staging or production.",
  path: "/docs/environments",
  ogTitle: "Environments · QA Studio Pro",
  ogDescription:
    "Switch environments when you press Play in QA Studio Pro. Reuse the same journey with different variable values, such as staging or production.",
});

export default function EnvironmentsGuidePage() {
  return (
    <DocPage
      slug="environments"
      title="Environments"
      lead="Reuse the same flow with different variables. Choose the environment when you press Play, such as staging versus production, or two configs of the same journey."
    >
      <DocSection title="Same flow, different values">
        <p>
          An environment is a named set of{" "}
          <Link href="/docs/variables" className="text-zinc-200 hover:underline">
            variable
          </Link>{" "}
          values. The steps stay the same. The data changes when you hit Play.
        </p>
        <p>Typical split:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Staging — <Code>{"{BASE_URL}"}</Code> points at staging, a QA user,
            test payment details
          </li>
          <li>
            Prod smoke — production host, a dedicated smoke user, no real
            charges
          </li>
        </ul>
      </DocSection>

      <DocSection title="When to use one">
        <ul className="list-disc space-y-2 pl-5">
          <li>The same journey against more than one host</li>
          <li>Alternate users, locales, or feature flags</li>
          <li>Payment × currency, plan, or other config matrix</li>
        </ul>
        <p>
          If only one value ever exists, a single variable is enough. Add an
          environment when you would otherwise duplicate the whole flow.
        </p>
      </DocSection>

      <DocSection title="Play time">
        <p>
          Choose the environment when you play a flow or a{" "}
          <Link href="/docs/folders" className="text-zinc-200 hover:underline">
            folder
          </Link>
          . Do not bake a host name into a recorded navigation if you already
          know you will switch.
        </p>
      </DocSection>

      <DocSection title="Local only">
        <p>
          Environment names and values sit in IndexedDB with everything else.
          There is no server. A production environment in the extension still
          runs in your Chrome, against the URL you set.
        </p>
      </DocSection>
    </DocPage>
  );
}
