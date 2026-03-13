import type { Route } from "./+types/terminos-y-condiciones";
import { LegalHero } from "~/components/legal/legal-hero";
import { LegalContent } from "~/components/legal/legal-content";
import { buildSeoMeta, OG_IMAGE_PATHS } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return buildSeoMeta({
    title: "Términos y condiciones",
    description:
      "Revisa los términos y condiciones de uso del sitio web y los servicios digitales de GlassPro.",
    path: "/terminos-y-condiciones",
    image: OG_IMAGE_PATHS.default,
  });
}

export default function TerminosYCondiciones() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      <LegalHero title="Términos y Condiciones" />
      <LegalContent />
    </div>
  );
}
