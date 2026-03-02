import { FAQ as SharedFAQ } from "~/components/shared/faq";

const aboutFaqs = [
    {
        q: "¿Cuántos años de experiencia respaldan a GlassPro?",
        a: "Contamos con más de 15 años de experiencia liderando proyectos de cristal templado a nivel nacional, ejecutando con excelencia desde pequeños espacios hasta corporativos completos."
    },
    {
        q: "¿Cuentan con certificaciones de calidad?",
        a: "Absolutamente, todos nuestros procesos están certificados bajo estrictas normas internacionales (ISO), garantizando la máxima seguridad y durabilidad en cada lámina de cristal."
    },
    {
        q: "¿Atienden proyectos residenciales y corporativos?",
        a: "Sí, nuestra infraestructura nos permite escalar nuestra producción para abarcar diseños residenciales selectos y requerimientos de volumen a nivel corporativo."
    },
    {
        q: "¿Cuál es el formato máximo de cristal que trabajan?",
        a: "Ofrecemos manufactura en medidas Jumbo, ideales para fachadas continuas, escaparates espectaculares y divisiones arquitectónicas de gran formato sin interrupciones."
    }
];

export function FAQ() {
    return <SharedFAQ items={aboutFaqs} className="w-full py-32 px-6 relative z-10" />;
}
