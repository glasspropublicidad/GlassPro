import type { Route } from "./+types/servicios";
import { ServicesHero } from "~/components/services/services-hero";
import { ServicesGrid } from "~/components/services/services-grid";
import Process from "~/components/services/process";
import { QualityAndSafety } from "~/components/services/quality-and-safety";
import { Industries } from "~/components/services/industries";
import { FAQ, COMMON_FAQ_ITEMS } from "~/components/shared/faq";
import { Testimonials } from "~/components/shared/testimonials";
import { ServicesCta } from "~/components/services/services-cta";
import { buildSeoMeta } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return buildSeoMeta({
    title: "Servicios de vidrio y cristal templado",
    description:
      "Conoce los servicios de GlassPro: venta de vidrio y cristal, templado jumbo, maquila especializada y herrajes premium con calidad certificada.",
    path: "/servicios",
    keywords: [
      "servicios de vidrio",
      "cristal templado jumbo",
      "maquila de vidrio",
      "venta de herrajes",
      "vidrio arquitectonico",
    ],
  });
}

export default function Servicios() {
  return (
    <div className="flex flex-col">
      <ServicesHero />
      <ServicesGrid />
      <Process />
      <QualityAndSafety />
      <Industries />
      <Testimonials />
      <FAQ
        title="Preguntas Frecuentes"
        subtitle="Todo lo que necesitas saber sobre nuestros servicios de vidrio y cristal."
        items={COMMON_FAQ_ITEMS}
      />
      <ServicesCta />
    </div>
  );
}
