export const GUIDES = [
  {
    slug: "record",
    href: "/docs/record",
    title: "Record",
    summary:
      "Records clicks, typing, and navigation as steps. You do not write selectors.",
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
    summary: "One flow per path, such as login or payment.",
  },
  {
    slug: "folders",
    href: "/docs/folders",
    title: "Folders",
    summary:
      "Group related flows and run them in order. If one flow fails, the later ones do not start.",
  },
  {
    slug: "environments",
    href: "/docs/environments",
    title: "Environments",
    summary:
      "Play the same flow with different variable values, such as staging or production.",
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
      "Export a flow as JSON, YAML, or a Playwright .spec.ts file. The file leaves the browser when you press Export.",
  },
] as const;

export type GuideSlug = (typeof GUIDES)[number]["slug"];

export const DOC_NAV = [
  { slug: "index", href: "/docs", title: "Overview" },
  ...GUIDES.map(({ slug, href, title }) => ({ slug, href, title })),
] as const;
