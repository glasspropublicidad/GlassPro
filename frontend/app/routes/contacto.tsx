import type { Route } from "./+types/contacto";
import { data } from "react-router";
import { ContactHero } from "~/components/contact/contact-hero";
import { ContactForm } from "~/components/contact/contact-form";
import { ContactInfo } from "~/components/contact/contact-info";

// ── SEO Meta ────────────────────────────────────────────────────
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Contacto | GlassPro" },
        {
            name: "description",
            content:
                "Contacta a GlassPro para cotizar tu proyecto de cristal templado. Respuesta en menos de 24 horas.",
        },
    ];
}

// ═══════════════════════════════════════════════════════════════════
// SERVER-ONLY ACTION — runs exclusively on the server.
// API keys and sensitive logic never reach the browser bundle.
// ═══════════════════════════════════════════════════════════════════

// ── Server-side sanitization (mirrors client but MANDATORY here) ─
function sanitizeServer(input: unknown): string {
    if (typeof input !== "string") return "";
    return input
        .replace(/[<>]/g, "")
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;")
        .trim();
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

// Max lengths (server-enforced)
const MAX = {
    name: 100,
    email: 254,
    phone: 20,
    company: 120,
    service: 100,
    message: 2000,
} as const;

// Simple in-memory rate limiter (per IP, per deployment instance)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // max 5 submissions per minute per IP

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
    // ── Rate limiting ───────────────────────────────────────────
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

    // ── Parse form data ─────────────────────────────────────────
    const formData = await request.formData();

    // ── Honeypot check — if filled, it's a bot ──────────────────
    const honeypot = formData.get("website");
    if (honeypot && typeof honeypot === "string" && honeypot.length > 0) {
        // Silently accept — don't reveal to bot that we rejected it
        return data({ success: true }, { status: 200 });
    }

    // ── Sanitize all inputs ─────────────────────────────────────
    const name = sanitizeServer(formData.get("name"));
    const email = sanitizeServer(formData.get("email"));
    const phone = sanitizeServer(formData.get("phone"));
    const company = sanitizeServer(formData.get("company"));
    const service = sanitizeServer(formData.get("service"));
    const message = sanitizeServer(formData.get("message"));

    // ── Server-side validation ──────────────────────────────────
    const fieldErrors: Record<string, string> = {};

    if (!name || name.length > MAX.name) {
        fieldErrors.name = "El nombre es obligatorio (máx. 100 caracteres).";
    }
    if (!email || !isValidEmail(email) || email.length > MAX.email) {
        fieldErrors.email = "Introduce un correo electrónico válido.";
    }
    if (phone && (!isValidPhone(phone) || phone.length > MAX.phone)) {
        fieldErrors.phone = "Teléfono inválido.";
    }
    if (company.length > MAX.company) {
        fieldErrors.company = "Nombre de empresa demasiado largo.";
    }
    if (service.length > MAX.service) {
        fieldErrors.service = "Servicio inválido.";
    }
    if (!message || message.length > MAX.message) {
        fieldErrors.message = `El mensaje es obligatorio (máx. ${MAX.message} caracteres).`;
    }

    if (Object.keys(fieldErrors).length > 0) {
        return data(
            { success: false, error: undefined, fieldErrors },
            { status: 400 }
        );
    }

    // ═══════════════════════════════════════════════════════════════
    // RESEND INTEGRATION — uncomment when ready to send emails.
    //
    // 1. Install:  npm install resend
    //
    // 2. Set env vars in Vercel Dashboard:
    //    → Settings → Environment Variables
    //    ┌─────────────────────┬──────────────────────────────────┐
    //    │ RESEND_API_KEY      │ re_xxxxxxxxxxxxxxxxxxxxxxxxxx    │
    //    │ CONTACT_EMAIL       │ contacto@glasspro.mx             │
    //    │ RESEND_FROM_DOMAIN  │ noreply@glasspro.mx              │
    //    └─────────────────────┴──────────────────────────────────┘
    //    For local dev, add the same vars to .env (already gitignored).
    //
    // 3. Uncomment the block below:
    //
    // import { Resend } from "resend";
    //
    // const resendApiKey = process.env.RESEND_API_KEY;
    // const contactEmail = process.env.CONTACT_EMAIL || "contacto@glasspro.mx";
    // const fromDomain = process.env.RESEND_FROM_DOMAIN || "noreply@glasspro.mx";
    //
    // if (!resendApiKey) {
    //   console.error("❌ RESEND_API_KEY is not set");
    //   return data(
    //     {
    //       success: false,
    //       error: "Error de configuración del servidor. Contacta al administrador.",
    //       fieldErrors: {},
    //     },
    //     { status: 500 }
    //   );
    // }
    //
    // const resend = new Resend(resendApiKey);
    //
    // try {
    //   await resend.emails.send({
    //     from: `GlassPro <${fromDomain}>`,
    //     to: [contactEmail],
    //     subject: `Nueva cotización: ${name} — ${service || "General"}`,
    //     html: `
    //       <h2>Nueva solicitud de contacto</h2>
    //       <p><strong>Nombre:</strong> ${name}</p>
    //       <p><strong>Correo:</strong> ${email}</p>
    //       <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
    //       <p><strong>Empresa:</strong> ${company || "No proporcionada"}</p>
    //       <p><strong>Servicio:</strong> ${service || "No especificado"}</p>
    //       <hr />
    //       <p>${message.replace(/\n/g, "<br />")}</p>
    //     `,
    //     replyTo: email,
    //   });
    // } catch (err) {
    //   console.error("Resend error:", err);
    //   return data(
    //     {
    //       success: false,
    //       error: "Hubo un problema al enviar tu mensaje. Intenta de nuevo.",
    //       fieldErrors: {},
    //     },
    //     { status: 500 }
    //   );
    // }
    // ═══════════════════════════════════════════════════════════════

    // For now, log to server console (remove when Resend is active)
    console.log("📬 New contact submission:", {
        name,
        email,
        phone,
        company,
        service,
        message: message.substring(0, 100) + "...",
    });

    return data({ success: true, fieldErrors: {} }, { status: 200 });
}

// ── Page Component ──────────────────────────────────────────────
export default function Contacto() {
    return (
        <div className="flex flex-col bg-gradient-to-b from-[#FAFCFF] via-white to-[#FAFCFF] overflow-x-clip min-h-screen">
            <ContactHero />

            <section className="w-full py-16 md:py-24 px-6 relative z-10">
                {/* Background decorations */}
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-gradient-to-br from-[#47b6ff]/8 to-transparent rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-[#0255D1]/8 to-transparent rounded-full blur-[80px] pointer-events-none" />

                <div className="mx-auto max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Left: Contact Info */}
                        <div className="lg:col-span-5 lg:sticky lg:top-32">
                            <ContactInfo />
                        </div>

                        {/* Right: Form */}
                        <div className="lg:col-span-7">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
