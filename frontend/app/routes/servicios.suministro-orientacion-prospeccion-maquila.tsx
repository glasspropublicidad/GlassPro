import type { Route } from "./+types/servicios.suministro-orientacion-prospeccion-maquila";
import { ServiceDetailHero } from "~/components/services/suministro/service-detail-hero";
import { ServiceOverview } from "~/components/services/suministro/service-overview";
import { Workflow } from "~/components/services/suministro/workflow";
import { Deliverables } from "~/components/services/suministro/deliverables";
import { RequirementsChecklist } from "~/components/services/suministro/requirements-checklist";
import { RelatedProjects } from "~/components/services/suministro/related-projects";
import { Faq } from "~/components/services/suministro/faq";
import { ServiceCta } from "~/components/services/suministro/service-cta";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Suministro, Orientación, Prospección y Maquila | GlassPro" },
        { name: "description", content: "Acompañamiento integral para tus proyectos de vidrio." },
    ];
}

export default function SuministroOrientacionProspeccionMaquila() {
    return (
        <div className="flex flex-col gap-16 pb-20">
            <ServiceDetailHero />
            <ServiceOverview />
            <Workflow />
            <Deliverables />
            <RequirementsChecklist />
            <RelatedProjects />
            <Faq />
            <ServiceCta />
        </div>
    );
}

