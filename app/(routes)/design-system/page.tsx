import { DesignSystemShowcase } from "@/components/design-system-showcase";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Design System",
  robots: {
    index: false,
    follow: false
  }
};

export default function DesignSystemPage() {
  return (
    <>
      <PageHero
        title="Mulligan Design System"
        subtitle="A simple visual system for consistent, trustworthy healthcare communication across site pages and campaigns."
      />
      <section className="section pt-0">
        <div className="container">
          <DesignSystemShowcase />
        </div>
      </section>
    </>
  );
}
