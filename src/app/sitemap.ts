import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/site";

export const dynamic = "force-static";

const PATHS = [
  "/",
  "/features",
  "/docs",
  "/docs/record",
  "/docs/variables",
  "/docs/journeys",
  "/docs/folders",
  "/docs/environments",
  "/docs/replay",
  "/docs/export",
  "/faq",
  "/privacy",
  "/support",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({
    url: `${SITE_ORIGIN}${path === "/" ? "" : path}`,
    lastModified: new Date(),
  }));
}
