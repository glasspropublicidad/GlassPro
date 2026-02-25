import type { Route } from "./+types/portafolio.$slug";
import { ProjectHero } from "~/components/portfolio/project-hero";
import { ProjectGallery } from "~/components/portfolio/project-gallery";
import { ProjectSummary } from "~/components/portfolio/project-summary";
import { MaterialsAndSpecs } from "~/components/portfolio/materials-and-specs";
import { Process } from "~/components/portfolio/process";
import { RelatedProjects } from "~/components/portfolio/related-projects";
import { Faq } from "~/components/portfolio/faq";
import { ProjectCta } from "~/components/portfolio/project-cta";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Proyecto | GLASSPRO" },
        { name: "description", content: "Detalles del proyecto." },
    ];
}

export default function PortafolioProyecto() {
    return (
        <div className="flex flex-col gap-16 pb-20">
            <ProjectHero />
            <ProjectGallery />
            <ProjectSummary />
            <MaterialsAndSpecs />
            <Process />
            <RelatedProjects />
            <Faq />
            <ProjectCta />
        </div>
    );
}

