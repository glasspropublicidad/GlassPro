import type { Route } from "./+types/portafolio";
import { PortfolioHero } from "~/components/portfolio/portfolio-hero";
import { Filters } from "~/components/portfolio/filters";
import { PortfolioGrid } from "~/components/portfolio/portfolio-grid";
import { PortfolioCta } from "~/components/portfolio/portfolio-cta";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Portafolio | GLASSPRO" },
        { name: "description", content: "Explora nuestros casos de Ã©xito y proyectos." },
    ];
}

export default function Portafolio() {
    return (
        <div className="flex flex-col gap-16 pb-20">
            <PortfolioHero />
            <Filters />
            <PortfolioGrid />
            <PortfolioCta />
        </div>
    );
}

