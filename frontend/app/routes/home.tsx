import type { Route } from "./+types/home";
import { Hero } from "~/components/home/hero";
import { TrustBar } from "~/components/home/trust-bar";
import { Intro } from "~/components/home/intro";
import { ServicesPreview } from "~/components/home/services-preview";
import { ValueProps } from "~/components/home/value-props";
import { PortfolioPreview } from "~/components/home/portfolio-preview";
import { Testimonials } from "~/components/home/testimonials";
import { FAQ } from "~/components/home/faq";
import { ContactCTA } from "~/components/home/contact-cta";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Inicio | GLASSPRO" },
    { name: "description", content: "INOVATION GLASS SOLUTIONS · VISIONARY GLASS SOLUTIONS" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Intro />
      <TrustBar />
      <ServicesPreview />
      <ValueProps />
      <PortfolioPreview />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </div>
  );
}
