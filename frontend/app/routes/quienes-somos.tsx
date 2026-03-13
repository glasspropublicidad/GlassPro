import type { Route } from "./+types/quienes-somos";
import { AboutHero } from "~/components/about/about-hero";
import { Story } from "~/components/about/story";
import { Principles } from "~/components/about/principles";
import { Capabilities } from "~/components/about/capabilities";
import { FAQ, ABOUT_FAQ_ITEMS } from "~/components/shared/faq";
import { AboutCTA } from "~/components/about/about-cta";
import { buildSeoMeta } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return buildSeoMeta({
    title: "Quiénes somos",
    description:
      "Conoce a GlassPro, nuestra experiencia en soluciones de vidrio y el enfoque técnico con el que atendemos proyectos residenciales y comerciales.",
    path: "/quienes-somos",
    keywords: [
      "glasspro",
      "empresa de vidrio",
      "quienes somos glasspro",
      "vidrio en leon guanajuato",
    ],
  });
}

export default function QuienesSomos() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-[#FAFCFF] via-white to-[#FAFCFF] overflow-x-hidden min-h-screen">
      <AboutHero />
      <Story />
      <Principles />
      <Capabilities />
      <FAQ items={ABOUT_FAQ_ITEMS} className="w-full py-32 px-6 relative z-10" />
      <AboutCTA />
    </div>
  );
}
