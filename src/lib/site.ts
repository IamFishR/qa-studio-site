import type { Metadata } from "next";

/** Live Chrome Web Store listing. */
export const CHROME_WEB_STORE_URL =
  "https://chromewebstore.google.com/detail/qa-studio-pro/gbecpdccfeemhcnecgodpljiidfdfiem";

export const SUPPORT_EMAIL = "thisisganesh353@gmail.com";

export const SITE_ORIGIN = "https://qa-studio-site.vercel.app";

export const SITE_VERSION = "0.1.7";

export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "QA Studio Pro. Record, play, and export Playwright in Chrome. Version 0.1.7.",
} as const;

export function pageMeta({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
}: {
  title?: string;
  description: string;
  path: string;
  ogTitle: string;
  ogDescription: string;
}): Metadata {
  return {
    ...(title !== undefined ? { title } : {}),
    description,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: "website",
      url: path,
      siteName: "QA Studio Pro",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [OG_IMAGE.url],
    },
  };
}
