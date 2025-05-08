import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <div className="container py-10 md:py-0 md:h-20"></div>
      <p className="text-center text-sm md:text-left">
        Built by {""}
        <Link
          href={siteConfig.links.x}
          className="underline font-medium"
          target="_blank"
          rel="noreferrer"
        >
          Rakuinfo
        </Link>
        . Hosted on {""}
        <Link
          href={"http://vercel.com"}
          className="underline font-medium"
          target="_blank"
          rel="noreferrer"
        >
          Vercel
        </Link>
      </p>
    </footer>
  );
}
