import type { Route } from "./+types/quienes-somos";
import { AboutHero } from "~/components/about/about-hero";
import { Story } from "~/components/about/story";
import { Principles } from "~/components/about/principles";
import { Capabilities } from "~/components/about/capabilities";
import { Testimonials } from "~/components/about/testimonials";
import { FAQ } from "~/components/about/faq";
import { AboutCTA } from "~/components/about/about-cta";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Quiénes Somos | GLASSPRO" },
        { name: "description", content: "Conoce más sobre GLASSPRO y nuestro compromiso con la innovación en vidrio." },
    ];
}

export default function QuienesSomos() {
    return (
        <div className="flex flex-col gap-16">
            <AboutHero />
            <Story />
            <Principles />
            <Capabilities />
            <Testimonials />
            <FAQ />
            <AboutCTA />
        </div>
    );
}
