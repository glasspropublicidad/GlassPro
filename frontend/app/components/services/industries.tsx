import { motion } from "framer-motion";

// ── Inline SVG Icons ────────────────────────────────────────────
function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" />
      <path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" />
      <path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" />
    </svg>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function StoreIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
      <path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2 2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" />
    </svg>
  );
}

function HotelIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
      <path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16" />
      <path d="M8 7h.01" /><path d="M16 7h.01" /><path d="M12 7h.01" />
      <path d="M12 11h.01" /><path d="M16 11h.01" /><path d="M8 11h.01" />
      <path d="M10 22v-6.5m4 0V22" />
    </svg>
  );
}

function FactoryIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" /><path d="M12 18h1" /><path d="M7 18h1" />
    </svg>
  );
}

function HospitalIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 6v4" /><path d="M14 14h-4" /><path d="M14 18h-4" />
      <path d="M14 8h-4" /><path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
      <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
    </svg>
  );
}

// ── Industries Data ────────────────────────────────────────────
const INDUSTRIES = [
  {
    icon: BuildingIcon,
    title: "Edificios Corporativos",
    description: "Fachadas, muros cortina y divisiones interiores con cristal templado de alto rendimiento.",
  },
  {
    icon: HomeIcon,
    title: "Proyectos Residenciales",
    description: "Barandales, cancelerías, puertas de baño y ventanales para residencias de lujo.",
  },
  {
    icon: StoreIcon,
    title: "Comercio y Retail",
    description: "Aparadores, vitrinas y sistemas de exhibición con acabados premium.",
  },
  {
    icon: HotelIcon,
    title: "Hotelería y Restaurantes",
    description: "Ambientes elegantes con divisiones, espejos y cancelería decorativa.",
  },
  {
    icon: FactoryIcon,
    title: "Industria",
    description: "Cristal de seguridad para naves industriales, laboratorios y áreas controladas.",
  },
  {
    icon: HospitalIcon,
    title: "Salud y Educación",
    description: "Soluciones de cristal seguro para hospitales, clínicas y centros educativos.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Industries() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#0255D1]/5 to-[#47b6ff]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full border border-[#0255D1]/15 bg-[#0255D1]/[0.06] text-xs font-semibold uppercase tracking-[0.16em] text-[#0255D1] mb-6 shadow-sm">
            Sectores que Atendemos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#373435] mb-6 leading-[1.1] tracking-[-0.04em]">
            Experiencia en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0255D1] to-[#47b6ff]">
              múltiples industrias
            </span>
          </h2>
          <p className="text-[#373435]/65 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Nuestras soluciones en cristal templado y herrajes se adaptan a
            las exigencias de cada sector.
          </p>
        </div>

        {/* Industries grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {INDUSTRIES.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex items-start gap-4 rounded-2xl p-6 transition-all duration-400 hover:bg-white hover:shadow-[0_15px_40px_-12px_rgba(12,76,120,0.08)] hover:border-[#0255D1]/15 border border-transparent"
            >
              <div
                className="p-3 rounded-xl flex-shrink-0 transition-all duration-400 group-hover:scale-110"
                style={{
                  background: "rgba(2, 85, 209, 0.06)",
                  border: "1px solid rgba(2, 85, 209, 0.12)",
                }}
              >
                <industry.icon className="h-5 w-5 text-[#0255D1]" />
              </div>
              <div>
                <h3 className="text-base font-black text-[#373435] mb-1 tracking-[-0.01em]">
                  {industry.title}
                </h3>
                <p className="text-sm leading-relaxed font-medium text-[#373435]/55">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
