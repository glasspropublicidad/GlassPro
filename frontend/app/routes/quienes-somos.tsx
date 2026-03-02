import type { Route } from "./+types/quienes-somos";
import { AboutHero } from "~/components/about/about-hero";
import { Story } from "~/components/about/story";
import { Principles } from "~/components/about/principles";
import { Capabilities } from "~/components/about/capabilities";
import { FAQ } from "~/components/about/faq";
import { AboutCTA } from "~/components/about/about-cta";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Quiénes Somos | GlassPro" },
        { name: "description", content: "Conoce más sobre GlassPro y nuestro compromiso con la innovación en vidrio." },
    ];
}

export default function QuienesSomos() {
    return (
        <div className="flex flex-col bg-gradient-to-b from-[#FAFCFF] via-white to-[#FAFCFF] overflow-x-hidden min-h-screen">
            <AboutHero />
            <Story />
            <Principles />
            <Capabilities />
            <FAQ />
            <AboutCTA />
        </div>
    );
}
