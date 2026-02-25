import type { Route } from "./+types/terminos-y-condiciones";
import { LegalHero } from "~/components/legal/legal-hero";
import { LegalContent } from "~/components/legal/legal-content";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Términos y Condiciones | GlassPro" },
    ];
}

export default function TerminosYCondiciones() {
    return (
        <div className="flex flex-col gap-16 pb-20">
            <LegalHero title="Términos y Condiciones" />
            <LegalContent />
        </div>
    );
}
