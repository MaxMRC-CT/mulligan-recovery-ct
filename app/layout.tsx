import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mulliganrecoveryct.org"),
  title: {
    default: "Mulligan Recovery Centers of CT | ASAM 3.1 Residential",
    template: "%s | Mulligan Recovery Centers of CT"
  },
  description:
    "ASAM Level 3.1 low-intensity residential treatment in Connecticut supporting adults building stable recovery routines.",
  openGraph: {
    title: "Mulligan Recovery Centers of CT",
    description:
      "Compassionate low-intensity residential treatment in Connecticut with person-centered admissions and family-informed care.",
    type: "website",
    url: "https://www.mulliganrecoveryct.org"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen text-ink antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:bg-white focus:px-3 focus:py-2">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="bg-[#f5f4f1]">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
