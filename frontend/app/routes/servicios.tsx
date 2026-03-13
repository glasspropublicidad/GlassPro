import type { Route } from "./+types/servicios";
import { ServicesHero } from "~/components/services/services-hero";
import { ServicesGrid } from "~/components/services/services-grid";
import Process from "~/components/services/process";
import { QualityAndSafety } from "~/components/services/quality-and-safety";
import { Industries } from "~/components/services/industries";
import { FAQ, COMMON_FAQ_ITEMS } from "~/components/shared/faq";
import { Testimonials } from "~/components/shared/testimonials";
import { ServicesCta } from "~/components/services/services-cta";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Servicios | GlassPro" },
        { name: "description", content: "Cristal templado jumbo, suministro y maquila, venta de herrajes. Calidad certificada, personal capacitado y el mejor balance calidad-precio." },
    ];
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
