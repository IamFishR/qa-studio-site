export const GUIDES = [
  {
    slug: "record",
    href: "/docs/record",
    title: "Record",
    summary:
      "Capture clicks, typing, and navigation as structured steps — no selectors to write.",
  },
  {
    slug: "variables",
    href: "/docs/variables",
    title: "Variables",
    summary:
      "Named placeholders like {BASE_URL} and masked secrets, stored only on this device.",
  },
  {
    slug: "journeys",
    href: "/docs/journeys",
    title: "Journeys",
    summary:
      "One flow per user journey — login, payment, a config change — not one giant recording.",
  },
  {
    slug: "folders",
    href: "/docs/folders",
    title: "Folders",
    summary:
      "Group related flows and run them in order as a feature suite. Fail-fast.",
  },
  {
    slug: "environments",
    href: "/docs/environments",
    title: "Environments",
    summary:
      "Replay the same flow with different variable values — staging vs prod, or alternate configs.",
  },
  {
    slug: "replay",
    href: "/docs/replay",
    title: "Replay & debug",
    summary:
      "Play locally with real input events, step status, and failure screenshots.",
  },
  {
    slug: "export",
    href: "/docs/export",
    title: "Export",
    summary:
      "Export a flow as JSON, YAML, or Playwright TypeScript. You choose when a file leaves the browser.",
  },
] as const;

export type GuideSlug = (typeof GUIDES)[number]["slug"];

export const DOC_NAV = [
  { slug: "index", href: "/docs", title: "Overview" },
  ...GUIDES.map(({ slug, href, title }) => ({ slug, href, title })),
] as const;
