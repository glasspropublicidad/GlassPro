import type { Route } from "./+types/aviso-de-privacidad";
import { LegalHero } from "~/components/legal/legal-hero";
import { LegalContent } from "~/components/legal/legal-content";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Aviso de Privacidad | GLASSPRO" },
    ];
}

export default function AvisoDePrivacidad() {
    return (
        <div className="flex flex-col gap-16 pb-20">
            <LegalHero title="Aviso de Privacidad" />
            <LegalContent />
        </div>
    );
}
