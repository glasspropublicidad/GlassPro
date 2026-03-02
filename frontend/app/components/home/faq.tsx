import { FAQ as SharedFAQ } from "~/components/shared/faq";

const homeFaqs = [
    {
        q: "¿Qué dimensiones abarca el cristal templado jumbo?",
        a: "Nuestra maquinaria nos permite procesar cristales de gran formato que superan las medidas estándar, contáctanos para medidas exactas de acuerdo a tu proyecto."
    },
    {
        q: "¿En qué consiste el servicio de orientación y maquila?",
        a: "Desde el diseño y cálculo hasta la manufactura del cristal, brindamos acompañamiento total."
    },
    {
        q: "¿Hacen envíos de herrajes?",
        a: "Sí, contamos con venta de mayoreo y menudeo con envíos asegurados a todo el país."
    }
];

export function FAQ() {
    return <SharedFAQ items={homeFaqs} className="w-full py-32 px-6 relative z-10" />;
}
