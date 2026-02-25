import type { Route } from "./+types/servicios.venta-herrajes";
import { ServiceDetailHero } from "~/components/services/herrajes/service-detail-hero";
import { CatalogPreview } from "~/components/services/herrajes/catalog-preview";
import { WholesaleRetail } from "~/components/services/herrajes/wholesale-retail";
import { CompatibilityNotes } from "~/components/services/herrajes/compatibility-notes";
import { RequestQuote } from "~/components/services/herrajes/request-quote";
import { Faq } from "~/components/services/herrajes/faq";
import { ServiceCta } from "~/components/services/herrajes/service-cta";


export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Venta de Herrajes | GlassPro" },
        { name: "description", content: "Venta de herrajes por mayoreo y menudeo." },
    ];
}

export default function VentaHerrajes() {
    return (
        <div className="flex flex-col gap-16 pb-20">
            <ServiceDetailHero />
            <CatalogPreview />
            <WholesaleRetail />
            <CompatibilityNotes />
            <RequestQuote />
            <Faq />
            <ServiceCta />
        </div>
    );
}

