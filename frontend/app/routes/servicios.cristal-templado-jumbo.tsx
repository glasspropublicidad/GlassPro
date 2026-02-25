import type { Route } from "./+types/servicios.cristal-templado-jumbo";
import { ServiceDetailHero } from "~/components/services/cristal-templado-jumbo/service-detail-hero";
import { ServiceOverview } from "~/components/services/cristal-templado-jumbo/service-overview";
import { SpecsHighlights } from "~/components/services/cristal-templado-jumbo/specs-highlights";
import { UseCases } from "~/components/services/cristal-templado-jumbo/use-cases";
import { RequirementsChecklist } from "~/components/services/cristal-templado-jumbo/requirements-checklist";
import { RelatedProjects } from "~/components/services/cristal-templado-jumbo/related-projects";
import { Faq } from "~/components/services/cristal-templado-jumbo/faq";
import { ServiceCta } from "~/components/services/cristal-templado-jumbo/service-cta";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Cristal Templado Jumbo | GLASSPRO" },
        { name: "description", content: "Expertos en cristal templado de medidas jumbo." },
    ];
}

export default function CristalTempladoJumbo() {
    return (
        <div className="flex flex-col gap-16 pb-20">
            <ServiceDetailHero />
            <ServiceOverview />
            <SpecsHighlights />
            <UseCases />
            <RequirementsChecklist />
            <RelatedProjects />
            <Faq />
            <ServiceCta />
        </div>
    );
}

