import { useState, useRef, useCallback } from "react";
import { useFetcher } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

// ── Sanitization utilities (no libraries) ───────────────────────
// Strips HTML tags and trims whitespace
function sanitize(input: string): string {
  return input
    .replace(/[<>]/g, "") // strip angle brackets
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

// Validates email format with a strict regex
function isValidEmail(email: string): boolean {
  // RFC 5322 simplified — no weird edge chars
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
    email
  );
}

// Validates phone — digits, spaces, dashes, parens, plus only
function isValidPhone(phone: string): boolean {
  if (!phone) return true; // optional
  return /^[+]?[\d\s\-().]{7,20}$/.test(phone);
}

// ── Max lengths ─────────────────────────────────────────────────
const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_PHONE = 20;
const MAX_COMPANY = 120;
const MAX_SERVICE = 100;
const MAX_MESSAGE = 2000;

// ── Types ───────────────────────────────────────────────────────
type FieldErrors = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
};

type ActionData = {
  success?: boolean;
  error?: string;
  fieldErrors?: FieldErrors;
};

const SERVICE_OPTIONS = [
  "Cristal Templado",
  "Vidrio Laminado",
  "Cancelería de Aluminio",
  "Barandales de Cristal",
  "Muros Cortina",
  "Espejos y Acabados",
  "Otro",
];

// ── Icons ───────────────────────────────────────────────────────
function UserIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function AtSignIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    </svg>
  );
}

function PhoneSmIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" /><path d="M16 6h.01" />
      <path d="M12 6h.01" /><path d="M12 10h.01" />
      <path d="M12 14h.01" /><path d="M16 10h.01" />
      <path d="M16 14h.01" /><path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

function AlertIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" /><path d="M12 17h.01" />
    </svg>
  );
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

// ── Client-side validation ──────────────────────────────────────
function validateFields(formData: FormData): FieldErrors {
  const errors: FieldErrors = {};
  const name = (formData.get("name") as string) || "";
  const email = (formData.get("email") as string) || "";
  const phone = (formData.get("phone") as string) || "";
  const company = (formData.get("company") as string) || "";
  const service = (formData.get("service") as string) || "";
  const message = (formData.get("message") as string) || "";

  if (!name.trim() || name.length > MAX_NAME) {
    errors.name = "El nombre es obligatorio (máx. 100 caracteres).";
  }
  if (!email.trim() || !isValidEmail(email) || email.length > MAX_EMAIL) {
    errors.email = "Introduce un correo electrónico válido.";
  }
  if (phone && (!isValidPhone(phone) || phone.length > MAX_PHONE)) {
    errors.phone = "Teléfono inválido.";
  }
  if (company.length > MAX_COMPANY) {
    errors.company = "Nombre de empresa demasiado largo.";
  }
  if (service.length > MAX_SERVICE) {
    errors.service = "Servicio inválido.";
  }
  if (!message.trim() || message.length > MAX_MESSAGE) {
    errors.message = `El mensaje es obligatorio (máx. ${MAX_MESSAGE} caracteres).`;
  }

  return errors;
}

// ── Component ───────────────────────────────────────────────────
export function ContactForm() {
  const fetcher = useFetcher<ActionData>();
  const formRef = useRef<HTMLFormElement>(null);
  const [clientErrors, setClientErrors] = useState<FieldErrors>({});
  const [charCount, setCharCount] = useState(0);

  const isSubmitting = fetcher.state === "submitting";
  const actionData = fetcher.data;

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      const formData = new FormData(e.currentTarget);

      // Client-side validation
      const errors = validateFields(formData);
      if (Object.keys(errors).length > 0) {
        e.preventDefault();
        setClientErrors(errors);
        return;
      }

      setClientErrors({});
      // Let fetcher handle the rest — action runs server-side
    },
    []
  );

  // Merge errors — server takes priority
  const errors: FieldErrors = {
    ...clientErrors,
    ...(actionData?.fieldErrors ?? {}),
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {actionData?.success ? (
          /* ── Success state ─────────────────────────────────── */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl bg-white border border-emerald-200 p-12 text-center shadow-[0_20px_60px_-15px_rgba(16,185,129,0.15)]"
          >
            <div className="mx-auto mb-6 w-20 h-20 rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-200">
              <CheckCircleIcon className="h-10 w-10 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-black text-[#373435] mb-3">
              ¡Mensaje Enviado!
            </h3>
            <p className="text-[#373435]/60 text-base font-medium max-w-md mx-auto mb-8">
              Gracias por contactarnos. Un especialista revisará tu solicitud y
              te responderá en un plazo máximo de 24 horas hábiles.
            </p>
            <button
              onClick={() => {
                formRef.current?.reset();
                setCharCount(0);
                // Reload the page to reset action data
                window.location.reload();
              }}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 text-white font-bold px-8 py-3 transition-all hover:bg-emerald-600 active:scale-95 shadow-[0_10px_30px_-8px_rgba(16,185,129,0.4)]"
            >
              Enviar Otro Mensaje
            </button>
          </motion.div>
        ) : (
          /* ── Form ──────────────────────────────────────────── */
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <fetcher.Form
              ref={formRef}
              method="post"
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl bg-white border border-[#0255D1]/10 p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(12,76,120,0.08)] space-y-6"
            >
              {/* ── Honeypot — invisible to real users ────────── */}
              <div aria-hidden="true" className="absolute -left-[9999px] -top-[9999px]">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* ── Global error banner ───────────────────────── */}
              {actionData?.error && (
                <div className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 p-4" role="alert">
                  <AlertIcon className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold text-red-700">
                    {actionData.error}
                  </p>
                </div>
              )}

              {/* ── Row: Name + Email ─────────────────────────── */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  id="contact-name"
                  name="name"
                  label="Nombre completo"
                  placeholder="Tu nombre"
                  required
                  maxLength={MAX_NAME}
                  icon={<UserIcon className="h-4.5 w-4.5" />}
                  error={errors.name}
                />
                <FormField
                  id="contact-email"
                  name="email"
                  label="Correo electrónico"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  required
                  maxLength={MAX_EMAIL}
                  icon={<AtSignIcon className="h-4.5 w-4.5" />}
                  error={errors.email}
                />
              </div>

              {/* ── Row: Phone + Company ──────────────────────── */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  id="contact-phone"
                  name="phone"
                  label="Teléfono"
                  type="tel"
                  placeholder="(81) 1234-5678"
                  maxLength={MAX_PHONE}
                  icon={<PhoneSmIcon className="h-4.5 w-4.5" />}
                  error={errors.phone}
                />
                <FormField
                  id="contact-company"
                  name="company"
                  label="Empresa"
                  placeholder="Nombre de tu empresa"
                  maxLength={MAX_COMPANY}
                  icon={<BuildingIcon className="h-4.5 w-4.5" />}
                  error={errors.company}
                />
              </div>

              {/* ── Service Selector ──────────────────────────── */}
              <div>
                <label
                  htmlFor="contact-service"
                  className="block text-sm font-bold text-[#373435] mb-2"
                >
                  Servicio de interés
                </label>
                <select
                  id="contact-service"
                  name="service"
                  defaultValue=""
                  className="w-full appearance-none rounded-xl border border-[#0255D1]/12 bg-[#FAFCFF] px-4 py-3.5 text-sm font-medium text-[#373435] transition-all duration-300 focus:outline-none focus:border-[#0255D1]/40 focus:ring-2 focus:ring-[#0255D1]/10 focus:bg-white hover:border-[#0255D1]/25"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%230255D1' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: "right 12px center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "20px",
                  }}
                >
                  <option value="" disabled>
                    Selecciona un servicio
                  </option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1.5 text-xs font-semibold text-red-500">
                    {errors.service}
                  </p>
                )}
              </div>

              {/* ── Message ──────────────────────────────────── */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-bold text-[#373435]"
                  >
                    Mensaje <span className="text-red-400">*</span>
                  </label>
                  <span
                    className={`text-xs font-semibold ${charCount > MAX_MESSAGE ? "text-red-500" : "text-[#373435]/40"
                      }`}
                  >
                    {charCount}/{MAX_MESSAGE}
                  </span>
                </div>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  maxLength={MAX_MESSAGE}
                  placeholder="Cuéntanos sobre tu proyecto, dimensiones, tipo de vidrio que necesitas..."
                  onChange={(e) => setCharCount(e.target.value.length)}
                  className="w-full resize-none rounded-xl border border-[#0255D1]/12 bg-[#FAFCFF] px-4 py-3.5 text-sm font-medium text-[#373435] leading-relaxed placeholder:text-[#373435]/35 transition-all duration-300 focus:outline-none focus:border-[#0255D1]/40 focus:ring-2 focus:ring-[#0255D1]/10 focus:bg-white hover:border-[#0255D1]/25"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs font-semibold text-red-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* ── Submit Button ─────────────────────────────── */}
              <button
                type="submit"
                disabled={isSubmitting}
                id="contact-submit-btn"
                className="group relative w-full overflow-hidden rounded-full bg-[#0255D1] text-white font-bold px-8 py-4 text-base transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_10px_40px_-10px_rgba(2,85,209,0.5)] hover:shadow-[0_15px_50px_-10px_rgba(2,85,209,0.6)]"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

                <span className="relative flex items-center justify-center gap-2.5">
                  {isSubmitting ? (
                    <>
                      <span className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <SendIcon className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </span>
              </button>

              <p className="text-center text-xs text-[#373435]/40 font-medium">
                Al enviar este formulario, aceptas nuestro{" "}
                <a
                  href="/aviso-de-privacidad"
                  className="underline underline-offset-2 text-[#0255D1]/60 hover:text-[#0255D1] transition-colors"
                >
                  Aviso de Privacidad
                </a>
                .
              </p>
            </fetcher.Form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Reusable form field component ───────────────────────────────
function FormField({
  id,
  name,
  label,
  type = "text",
  placeholder,
  required,
  maxLength,
  icon,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  maxLength: number;
  icon: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-bold text-[#373435] mb-2">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#0255D1]/40 pointer-events-none">
          {icon}
        </span>
        <input
          id={id}
          type={type}
          name={name}
          required={required}
          maxLength={maxLength}
          placeholder={placeholder}
          autoComplete={
            name === "name"
              ? "name"
              : name === "email"
                ? "email"
                : name === "phone"
                  ? "tel"
                  : name === "company"
                    ? "organization"
                    : undefined
          }
          className={`w-full rounded-xl border bg-[#FAFCFF] pl-11 pr-4 py-3.5 text-sm font-medium text-[#373435] placeholder:text-[#373435]/35 transition-all duration-300 focus:outline-none focus:ring-2 focus:bg-white hover:border-[#0255D1]/25 ${error
            ? "border-red-300 focus:border-red-400 focus:ring-red-100"
            : "border-[#0255D1]/12 focus:border-[#0255D1]/40 focus:ring-[#0255D1]/10"
            }`}
        />
      </div>
      {error && (
        <p className="mt-1.5 text-xs font-semibold text-red-500">{error}</p>
      )}
    </div>
  );
}
