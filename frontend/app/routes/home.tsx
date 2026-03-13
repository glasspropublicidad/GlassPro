import type { Route } from "./+types/home";
import { Hero } from "~/components/home/hero";
import { TrustBar } from "~/components/home/trust-bar";
import { Intro } from "~/components/home/intro";
import { ServicesPreview } from "~/components/home/services-preview";
import { ValueProps } from "~/components/home/value-props";
import { FAQ, COMMON_FAQ_ITEMS } from "~/components/shared/faq";
import { Testimonials } from "~/components/shared/testimonials";
import { ContactCTA } from "~/components/home/contact-cta";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Inicio | GlassPro" },
    { name: "description", content: "Diseñamos, fabricamos y suministramos soluciones de cristal templado con estándares industriales — GlassPro" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Intro />
      <TrustBar />
      <ServicesPreview />
      <ValueProps />
      <Testimonials />
      <FAQ items={COMMON_FAQ_ITEMS} className="w-full py-32 px-6 relative z-10" />
      <ContactCTA />
    </div>
  );
}
