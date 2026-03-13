import type { Route } from "./+types/aviso-de-privacidad";
import { LegalHero } from "~/components/legal/legal-hero";
import { LegalContent } from "~/components/legal/legal-content";
import { buildSeoMeta, OG_IMAGE_PATHS } from "~/lib/seo";

const LAST_UPDATED = "13 de marzo de 2026";
const CONTACT_EMAIL = "contacto@glasspro.mx";
const CONTACT_PHONE = "+52 477 629 4309";

const PRIVACY_SECTIONS = [
  {
    title: "1. Responsable del tratamiento",
    paragraphs: [
      "GlassPro es responsable del tratamiento de los datos personales que las personas usuarias proporcionan a través de este sitio web, especialmente mediante el formulario de contacto y otros medios de comunicación habilitados en el sitio.",
      "Este aviso aplica a la información que compartes cuando solicitas atención, haces una consulta, pides información sobre productos o servicios, o buscas que un integrante del equipo te contacte para dar seguimiento a tu solicitud.",
    ],
  },
  {
    title: "2. Datos que podemos recopilar",
    paragraphs: [
      "Los datos personales que podemos recibir dependen de la información que tú decidas compartirnos. De forma habitual, esto puede incluir datos de identificación y contacto, así como datos relacionados con tu solicitud.",
    ],
    bullets: [
      "Nombre completo.",
      "Correo electrónico.",
      "Número telefónico.",
      "Empresa, si aplica.",
      "Servicio de interés.",
      "Mensaje, consulta o detalles de tu proyecto.",
    ],
  },
  {
    title: "3. Finalidad del uso de la información",
    paragraphs: [
      "La información personal que compartes se utiliza exclusivamente para atenderte y responder tus dudas, solicitudes o comentarios.",
      "De forma específica, GlassPro puede usar tus datos para recibir y revisar tu mensaje, darte respuesta por correo, teléfono o medios equivalentes, dar seguimiento a una conversación iniciada por ti, preparar información comercial o técnica relacionada con tu consulta, y mantener un registro básico de atención para mejorar el seguimiento y la calidad del servicio.",
      "GlassPro no utiliza estos datos para vender bases de datos ni para fines distintos a la atención de las solicitudes recibidas, salvo que exista una obligación legal aplicable o que tú otorgues una autorización adicional.",
    ],
  },
  {
    title: "4. Compartición de información",
    paragraphs: [
      "GlassPro no vende, renta ni cede tus datos personales a terceros con fines comerciales.",
      "Tus datos solo podrán compartirse cuando sea estrictamente necesario para cumplir obligaciones legales, requerimientos de autoridad competente o para el apoyo operativo de proveedores tecnológicos que participen en el funcionamiento del sitio o en la gestión de comunicaciones, bajo condiciones razonables de confidencialidad y seguridad.",
    ],
  },
  {
    title: "5. Conservación y seguridad",
    paragraphs: [
      "GlassPro adopta medidas razonables de carácter administrativo, técnico y organizativo para proteger la información personal frente a pérdida, uso indebido, acceso no autorizado o divulgación indebida.",
      "Los datos se conservarán únicamente durante el tiempo necesario para atender tu solicitud, dar seguimiento a la relación derivada de esa consulta y cumplir obligaciones legales o administrativas aplicables.",
    ],
  },
  {
    title: "6. Derechos de acceso, rectificación y cancelación",
    paragraphs: [
      "Puedes solicitar en cualquier momento el acceso, corrección, actualización o eliminación de la información personal que nos hayas proporcionado, siempre que ello proceda conforme a la normativa aplicable.",
      "Para ejercer cualquiera de estos derechos, puedes comunicarte a través de los medios de contacto publicados en este documento e indicar claramente tu solicitud, junto con la información necesaria para identificar tu caso.",
    ],
  },
  {
    title: "7. Cambios a este aviso",
    paragraphs: [
      "GlassPro podrá actualizar este aviso de privacidad cuando cambien los procesos de atención, el funcionamiento del sitio o las disposiciones legales aplicables.",
      "Cualquier cambio será publicado en esta misma página, indicando la fecha de la última actualización.",
    ],
  },
] as const;

export function meta({}: Route.MetaArgs) {
  return buildSeoMeta({
    title: "Aviso de privacidad",
    description:
      "Consulta cómo GlassPro utiliza la información que compartes para atenderte, responder tus dudas y dar seguimiento a tus solicitudes.",
    path: "/aviso-de-privacidad",
    image: OG_IMAGE_PATHS.default,
    keywords: [
      "aviso de privacidad glasspro",
      "datos personales glasspro",
      "contacto glasspro",
      "privacidad sitio web",
    ],
  });
}

export default function AvisoDePrivacidad() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FAFCFF] via-white to-[#F7FAFF] overflow-x-hidden">
      <LegalHero
        title="Aviso de Privacidad"
        description="Este aviso explica qué información comparte la persona usuaria con GlassPro, para qué se utiliza y cómo se protege cuando el objetivo es atender consultas, responder dudas y dar seguimiento a solicitudes enviadas desde el sitio."
        lastUpdated={LAST_UPDATED}
      />
      <LegalContent
        sections={PRIVACY_SECTIONS}
        contactEmail={CONTACT_EMAIL}
        contactPhone={CONTACT_PHONE}
      />
    </div>
  );
}
