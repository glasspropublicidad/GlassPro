import type { Route } from "./+types/home";
import { Hero } from "~/components/home/hero";
import { TrustBar } from "~/components/home/trust-bar";
import { Intro } from "~/components/home/intro";
import { ServicesPreview } from "~/components/home/services-preview";
import { ValueProps } from "~/components/home/value-props";
import { FAQ, COMMON_FAQ_ITEMS } from "~/components/shared/faq";
import { Testimonials } from "~/components/shared/testimonials";
import { ContactCTA } from "~/components/home/contact-cta";
import { buildSeoMeta } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return buildSeoMeta({
    title: "Cristal templado y soluciones en vidrio",
    description:
      "GlassPro diseña, fabrica y suministra cristal templado, maquila de vidrio y herrajes para proyectos residenciales, comerciales e industriales en México.",
    path: "/",
    keywords: [
      "cristal templado",
      "vidrio templado",
      "maquila de vidrio",
      "herrajes para cristal",
      "glasspro",
    ],
  });
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
