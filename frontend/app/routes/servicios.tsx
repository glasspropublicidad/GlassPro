import type { Route } from "./+types/servicios";
import { ServicesHero } from "~/components/services/services-hero";
import { ServicesGrid } from "~/components/services/services-grid";
import { ProcessOverview } from "~/components/services/process-overview";
import { Industries } from "~/components/services/industries";
import { QualityAndSafety } from "~/components/services/quality-and-safety";
import { Testimonials } from "~/components/services/testimonials";
import { Faq } from "~/components/services/faq";
import { ServicesCta } from "~/components/services/services-cta";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Servicios | GLASSPRO" },
        { name: "description", content: "Nuestros servicios de cristal templado, herrajes y maquila." },
    ];
}

export default function Servicios() {
    return (
        <div className="flex flex-col gap-16 pb-20">
            <ServicesHero />
            <ServicesGrid />
            <ProcessOverview />
            <Industries />
            <QualityAndSafety />
            <Testimonials />
            <Faq />
            <ServicesCta />
        </div>
    );
}

