import type { Route } from "./+types/contacto";
import { data } from "react-router";
import { ContactHero } from "~/components/contact/contact-hero";
import { ContactForm } from "~/components/contact/contact-form";
import { ContactInfo } from "~/components/contact/contact-info";
import { buildSeoMeta } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
    return buildSeoMeta({
        title: "Contacto y cotizaciones",
        description:
            "Solicita una cotizacion con GlassPro para proyectos de cristal templado, vidrio y herrajes. Respuesta comercial en menos de 24 horas.",
        path: "/contacto",
        keywords: [
            "contacto glasspro",
            "cotizacion cristal templado",
            "cotizacion vidrio",
            "glasspro leon guanajuato",
        ],
    });
}

function sanitizeServer(input: unknown): string {
    if (typeof input !== "string") return "";

    return input
        .replace(/[<>]/g, "")
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;")
        .trim();
}

function escapeHtml(input: string): string {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function isValidEmail(email: string): boolean {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        email
    );
}

function isValidPhone(phone: string): boolean {
    if (!phone) return true;
    return /^[+]?[\d\s\-().]{7,20}$/.test(phone);
}

type ContactEmailPayload = {
    name: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    message: string;
};

function buildTextEmail(values: ContactEmailPayload): string {
    return [
        "Nueva solicitud desde el formulario de contacto de GlassPro",
        "",
        `Nombre: ${values.name}`,
        `Correo: ${values.email}`,
        `Telefono: ${values.phone || "No proporcionado"}`,
        `Empresa: ${values.company || "No proporcionada"}`,
        `Servicio: ${values.service || "No especificado"}`,
        "",
        "Mensaje:",
        values.message,
    ].join("\n");
}

function buildHtmlEmail(values: ContactEmailPayload): string {
    const safe = {
        name: escapeHtml(values.name),
        email: escapeHtml(values.email),
        phone: escapeHtml(values.phone || "No proporcionado"),
        company: escapeHtml(values.company || "No proporcionada"),
        service: escapeHtml(values.service || "No especificado"),
        message: escapeHtml(values.message).replace(/\n/g, "<br />"),
    };

    return `
      <div style="margin:0;padding:32px;background:#f4f8ff;font-family:Arial,sans-serif;color:#1f2937;">
        <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #dbeafe;border-radius:24px;overflow:hidden;">
          <div style="padding:24px 28px;background:linear-gradient(135deg,#0255D1 0%,#47b6ff 100%);color:#ffffff;">
            <p style="margin:0 0 8px;font-size:12px;letter-spacing:.18em;text-transform:uppercase;opacity:.85;">GlassPro</p>
            <h1 style="margin:0;font-size:28px;line-height:1.2;">Nueva solicitud de contacto</h1>
          </div>
          <div style="padding:28px;">
            <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#4b5563;">
              Se recibio una nueva solicitud desde el sitio web de GlassPro. A continuacion se muestran los datos del prospecto.
            </p>
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;font-weight:700;color:#111827;">Nombre</td>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#374151;">${safe.name}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;font-weight:700;color:#111827;">Correo</td>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#374151;">${safe.email}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;font-weight:700;color:#111827;">Telefono</td>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#374151;">${safe.phone}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;font-weight:700;color:#111827;">Empresa</td>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#374151;">${safe.company}</td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;font-weight:700;color:#111827;">Servicio</td>
                <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#374151;">${safe.service}</td>
              </tr>
            </table>
            <div style="padding:20px;border-radius:18px;background:#eff6ff;border:1px solid #bfdbfe;">
              <p style="margin:0 0 10px;font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#0255D1;">Mensaje</p>
              <p style="margin:0;font-size:15px;line-height:1.7;color:#1f2937;">${safe.message}</p>
            </div>
            <div style="margin-top:24px;">
              <a href="mailto:${safe.email}" style="display:inline-block;padding:14px 22px;background:#0255D1;color:#ffffff;text-decoration:none;border-radius:999px;font-weight:700;">
                Responder a ${safe.name}
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
}

const MAX = {
    name: 100,
    email: 254,
    phone: 20,
    company: 120,
    service: 100,
    message: 2000,
} as const;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    if (!entry || now > entry.resetAt) {
        rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return false;
    }

    entry.count++;
    return entry.count > RATE_LIMIT_MAX;
}

export async function action({ request }: Route.ActionArgs) {
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
        return data(
            {
                success: false,
                error:
                    "Has enviado demasiadas solicitudes. Intenta de nuevo en un minuto.",
                fieldErrors: {},
            },
            { status: 429 }
        );
    }

    const formData = await request.formData();

    const honeypot = formData.get("website");
    if (honeypot && typeof honeypot === "string" && honeypot.length > 0) {
        return data({ success: true }, { status: 200 });
    }

    const name = sanitizeServer(formData.get("name"));
    const email = sanitizeServer(formData.get("email"));
    const phone = sanitizeServer(formData.get("phone"));
    const company = sanitizeServer(formData.get("company"));
    const service = sanitizeServer(formData.get("service"));
    const message = sanitizeServer(formData.get("message"));

    const fieldErrors: Record<string, string> = {};

    if (!name || name.length > MAX.name) {
        fieldErrors.name = "El nombre es obligatorio (max. 100 caracteres).";
    }
    if (!email || !isValidEmail(email) || email.length > MAX.email) {
        fieldErrors.email = "Introduce un correo electronico valido.";
    }
    if (phone && (!isValidPhone(phone) || phone.length > MAX.phone)) {
        fieldErrors.phone = "Telefono invalido.";
    }
    if (company.length > MAX.company) {
        fieldErrors.company = "Nombre de empresa demasiado largo.";
    }
    if (service.length > MAX.service) {
        fieldErrors.service = "Servicio invalido.";
    }
    if (!message || message.length > MAX.message) {
        fieldErrors.message = `El mensaje es obligatorio (max. ${MAX.message} caracteres).`;
    }

    if (Object.keys(fieldErrors).length > 0) {
        return data(
            { success: false, error: undefined, fieldErrors },
            { status: 400 }
        );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_FORM_TO_EMAIL;
    const from =
        process.env.CONTACT_FORM_FROM_EMAIL ??
        "GlassPro Contacto <noreply@glass-pro.mx>";

    if (!resendApiKey || !to) {
        console.error("Missing Resend configuration", {
            hasApiKey: Boolean(resendApiKey),
            hasTo: Boolean(to),
        });

        return data(
            {
                success: false,
                error:
                    "El formulario no esta configurado correctamente en este momento. Intenta mas tarde.",
                fieldErrors: {},
            },
            { status: 500 }
        );
    }

    const values = { name, email, phone, company, service, message };

    let resendResponse: Response;

    try {
        resendResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${resendApiKey}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from,
                to: [to],
                reply_to: email,
                subject: `Nueva solicitud GlassPro: ${service || "Contacto general"}`,
                text: buildTextEmail(values),
                html: buildHtmlEmail(values),
            }),
        });
    } catch (error) {
        console.error("Resend request failed", error);

        return data(
            {
                success: false,
                error: "Hubo un problema al enviar tu mensaje. Intenta de nuevo.",
                fieldErrors: {},
            },
            { status: 502 }
        );
    }

    if (!resendResponse.ok) {
        const errorText = await resendResponse.text();
        console.error("Resend send failed", {
            status: resendResponse.status,
            body: errorText,
        });

        return data(
            {
                success: false,
                error: "No fue posible enviar tu mensaje. Intenta nuevamente.",
                fieldErrors: {},
            },
            { status: 502 }
        );
    }

    return data({ success: true, fieldErrors: {} }, { status: 200 });
}

export default function Contacto() {
    return (
        <div className="flex flex-col bg-gradient-to-b from-[#FAFCFF] via-white to-[#FAFCFF] overflow-x-clip min-h-screen">
            <ContactHero />

            <section className="w-full py-16 md:py-24 px-6 relative z-10">
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-gradient-to-br from-[#47b6ff]/8 to-transparent rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-[#0255D1]/8 to-transparent rounded-full blur-[80px] pointer-events-none" />

                <div className="mx-auto max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        <div className="lg:col-span-5 lg:sticky lg:top-32">
                            <ContactInfo />
                        </div>

                        <div className="lg:col-span-7">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
