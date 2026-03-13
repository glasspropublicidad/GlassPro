import type { Route } from "./+types/terminos-y-condiciones";
import { LegalHero } from "~/components/legal/legal-hero";
import { LegalContent } from "~/components/legal/legal-content";
import { buildSeoMeta, OG_IMAGE_PATHS } from "~/lib/seo";

const LAST_UPDATED = "13 de marzo de 2026";
const CONTACT_EMAIL = "contacto@glasspro.mx";
const CONTACT_PHONE = "+52 477 629 4309";

const TERMS_SECTIONS = [
  {
    title: "1. Objeto y aceptación",
    paragraphs: [
      "El acceso y uso de este sitio web implica la aceptación de los presentes términos y condiciones. Si no estás de acuerdo con ellos, debes abstenerte de utilizar el sitio.",
      "El sitio tiene como finalidad brindar información sobre GlassPro, sus productos, servicios y canales de contacto, así como facilitar la recepción de consultas o solicitudes enviadas por personas interesadas.",
    ],
  },
  {
    title: "2. Uso permitido del sitio",
    paragraphs: [
      "La persona usuaria se compromete a utilizar este sitio de manera lícita, responsable y conforme a su finalidad informativa y de contacto.",
    ],
    bullets: [
      "No debe utilizarse el sitio para enviar información falsa, engañosa, ilícita o que afecte derechos de terceros.",
      "No debe intentarse interferir con el funcionamiento del sitio, sus formularios, servidores o sistemas asociados.",
      "No debe utilizarse el contenido del sitio con fines contrarios a la ley o a estos términos.",
    ],
  },
  {
    title: "3. Información proporcionada por el usuario",
    paragraphs: [
      "Cuando una persona usuaria completa formularios o comparte datos a través del sitio, declara que la información proporcionada es correcta, actual y corresponde a datos propios o respecto de los cuales cuenta con autorización suficiente para compartirlos.",
      "GlassPro podrá utilizar esa información para atender la consulta, responder dudas, dar seguimiento a la solicitud y, en su caso, proporcionar información relacionada con los productos o servicios solicitados.",
    ],
  },
  {
    title: "4. Atención de solicitudes",
    paragraphs: [
      "El envío de un formulario o mensaje a través del sitio no garantiza la aceptación de un servicio, cotización definitiva, relación comercial inmediata ni un tiempo de respuesta específico, aunque GlassPro hará esfuerzos razonables para atender cada solicitud.",
      "Las respuestas emitidas a través del sitio, correo electrónico, teléfono o mensajería derivadas de una consulta tienen carácter informativo inicial y podrán requerir validaciones técnicas, comerciales o de disponibilidad.",
    ],
  },
  {
    title: "5. Propiedad intelectual",
    paragraphs: [
      "Los textos, imágenes, logotipos, diseños, elementos gráficos, marcas y demás contenidos del sitio pertenecen a GlassPro o se utilizan con autorización, y están protegidos por la normativa aplicable.",
      "No se permite copiar, reproducir, distribuir, modificar o explotar el contenido del sitio sin autorización previa y por escrito del titular correspondiente, salvo los usos expresamente permitidos por la ley.",
    ],
  },
  {
    title: "6. Disponibilidad y cambios",
    paragraphs: [
      "GlassPro podrá modificar, actualizar, suspender o interrumpir en cualquier momento el contenido del sitio, sus formularios, sus secciones o estos términos y condiciones, sin necesidad de aviso previo.",
      "Las modificaciones entrarán en vigor desde su publicación en este sitio. Se recomienda revisar esta página periódicamente.",
    ],
  },
  {
    title: "7. Privacidad de la información",
    paragraphs: [
      "El tratamiento de los datos personales compartidos a través del sitio se rige por el aviso de privacidad vigente.",
      "La información enviada por las personas usuarias se utiliza principalmente para atenderlas, responder sus dudas y dar seguimiento a sus solicitudes, conforme a lo indicado en el aviso de privacidad.",
    ],
  },
  {
    title: "8. Limitación de responsabilidad",
    paragraphs: [
      "GlassPro procura que la información publicada en el sitio sea útil y razonablemente actualizada; sin embargo, no garantiza que el contenido esté permanentemente libre de errores, omisiones o interrupciones.",
      "GlassPro no será responsable por daños derivados del uso indebido del sitio por parte de la persona usuaria, ni por fallas ajenas a su control razonable, incluyendo interrupciones técnicas o servicios de terceros.",
    ],
  },
  {
    title: "9. Legislación aplicable",
    paragraphs: [
      "Estos términos y condiciones se interpretarán de conformidad con la legislación aplicable en México.",
      "Cualquier duda relacionada con el uso del sitio o con estos términos podrá canalizarse a través de los medios de contacto oficiales de GlassPro.",
    ],
  },
] as const;

export function meta({}: Route.MetaArgs) {
  return buildSeoMeta({
    title: "Términos y condiciones",
    description:
      "Consulta los términos y condiciones de uso del sitio web de GlassPro y las reglas aplicables al envío de solicitudes y consultas.",
    path: "/terminos-y-condiciones",
    image: OG_IMAGE_PATHS.default,
    keywords: [
      "terminos y condiciones glasspro",
      "uso del sitio glasspro",
      "condiciones de contacto",
      "legal glasspro",
    ],
  });
}

export default function TerminosYCondiciones() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FAFCFF] via-white to-[#F7FAFF] overflow-x-hidden">
      <LegalHero
        title="Términos y Condiciones"
        description="Estos términos regulan el acceso y uso del sitio web de GlassPro, así como el envío de información por parte de las personas usuarias a través de sus formularios y canales de contacto."
        lastUpdated={LAST_UPDATED}
      />
      <LegalContent
        sections={TERMS_SECTIONS}
        contactEmail={CONTACT_EMAIL}
        contactPhone={CONTACT_PHONE}
      />
    </div>
  );
}
