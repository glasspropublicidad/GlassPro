import { motion } from "framer-motion";

// ── Inline SVG Icons ────────────────────────────────────────────
function MapPinIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

function PhoneIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function MailIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
}

function ClockIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}

const CONTACT_DETAILS = [
    {
        icon: MapPinIcon,
        label: "Ubicación",
        value: "Monterrey, Nuevo León, México",
        href: undefined,
    },
    {
        icon: PhoneIcon,
        label: "Teléfono",
        value: "+52 (81) 1234-5678",
        href: "tel:+528112345678",
    },
    {
        icon: MailIcon,
        label: "Correo",
        value: "contacto@glasspro.mx",
        href: "mailto:contacto@glasspro.mx",
    },
    {
        icon: ClockIcon,
        label: "Horario",
        value: "Lun—Vie: 8:00 AM — 6:00 PM",
        href: undefined,
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
};

export function ContactInfo() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
        >
            <div>
                <span className="inline-block py-1.5 px-4 rounded-full border border-[#0255D1]/15 bg-[#0255D1]/[0.06] text-xs font-semibold uppercase tracking-[0.16em] text-[#0255D1] mb-4 shadow-sm">
                    Información de Contacto
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-[#373435] leading-[1.1] tracking-[-0.04em] mb-3">
                    ¿Cómo{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0255D1] to-[#47b6ff]">
                        encontrarnos?
                    </span>
                </h2>
                <p className="text-[#373435]/60 text-base font-medium leading-relaxed max-w-md">
                    Estamos disponibles para atender tus consultas y brindarte una
                    cotización personalizada.
                </p>
            </div>

            <div className="space-y-4">
                {CONTACT_DETAILS.map((detail, index) => {
                    const content = (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group flex items-start gap-4 rounded-2xl bg-white border border-[#0255D1]/10 p-5 transition-all duration-400 hover:border-[#0255D1]/25 hover:shadow-[0_10px_30px_-8px_rgba(12,76,120,0.1)]"
                        >
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-400 group-hover:scale-110"
                                style={{
                                    background: "rgba(2, 85, 209, 0.06)",
                                    border: "1px solid rgba(2, 85, 209, 0.12)",
                                }}
                            >
                                <detail.icon className="h-5 w-5 text-[#0255D1]" />
                            </div>
                            <div>
                                <span className="block text-xs font-bold uppercase tracking-[0.12em] text-[#0255D1]/60 mb-1">
                                    {detail.label}
                                </span>
                                <span className="block text-[15px] font-semibold text-[#373435]">
                                    {detail.value}
                                </span>
                            </div>
                        </motion.div>
                    );

                    if (detail.href) {
                        return (
                            <a
                                key={index}
                                href={detail.href}
                                className="block no-underline"
                                rel="noopener noreferrer"
                            >
                                {content}
                            </a>
                        );
                    }
                    return content;
                })}
            </div>

            {/* Trust banner */}
            <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-gradient-to-r from-[#0255D1]/[0.06] to-transparent border border-[#0255D1]/10"
            >
                <div className="h-9 w-9 rounded-lg bg-[#0255D1]/10 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-[#0255D1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
                    </svg>
                </div>
                <span className="text-sm font-bold text-[#0255D1]/80 leading-snug">
                    Tu información está protegida. No compartimos tus datos con terceros.
                </span>
            </motion.div>
        </motion.div>
    );
}
