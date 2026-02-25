import type { Route } from "./+types/contacto";
import { ContactHero } from "~/components/contact/contact-hero";
import { ContactForm } from "~/components/contact/contact-form";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Contacto | GlassPro" },
        { name: "description", content: "Ponte en contacto con nosotros para tus proyectos de vidrio." },
    ];
}

export default function Contacto() {
    return (
        <div className="flex flex-col gap-16 pb-20">
            <ContactHero />
            <ContactForm />
        </div>
    );
}
