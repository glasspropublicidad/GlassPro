import type { Route } from "./+types/aviso-de-privacidad";
import { LegalHero } from "~/components/legal/legal-hero";
import { LegalContent } from "~/components/legal/legal-content";
import { buildSeoMeta, OG_IMAGE_PATHS } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return buildSeoMeta({
    title: "Aviso de privacidad",
    description:
      "Consulta el aviso de privacidad de GlassPro para conocer cómo recopilamos, utilizamos y protegemos tus datos personales.",
    path: "/aviso-de-privacidad",
    image: OG_IMAGE_PATHS.default,
  });
}

export default function AvisoDePrivacidad() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      <LegalHero title="Aviso de Privacidad" />
      <LegalContent />
    </div>
  );
}
