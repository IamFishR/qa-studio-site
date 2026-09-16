import { ExternalLink } from "lucide-react";
import { CHROME_WEB_STORE_URL } from "@/lib/site";

type Variant = "primary" | "compact";

const styles: Record<Variant, string> = {
  primary:
    "inline-flex items-center gap-2 rounded-full bg-[#FF6A3D] px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#ff7d55]",
  compact:
    "inline-flex items-center gap-1.5 rounded-full bg-[#FF6A3D] px-3.5 py-1.5 text-sm font-medium text-black transition-colors hover:bg-[#ff7d55]",
};

export function AddToChrome({ variant = "primary" }: { variant?: Variant }) {
  return (
    <a
      href={CHROME_WEB_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles[variant]}
    >
      Add to Chrome
      <ExternalLink
        className={variant === "compact" ? "h-3 w-3" : "h-3.5 w-3.5"}
        strokeWidth={1.75}
        aria-hidden
      />
    </a>
  );
}
