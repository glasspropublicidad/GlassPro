import { motion } from "framer-motion";

// ── Inline SVG Icons ────────────────────────────────────────────
function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ScaleIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}

// ── Benefits Data ───────────────────────────────────────────────
const BENEFITS = [
  {
    icon: ShieldCheckIcon,
    title: "Calidad Certificada",
    description:
      "Cada pieza de cristal templado se fabrica bajo rigurosos controles de calidad y cumple con las normativas de seguridad vigentes. Garantizamos resistencia, durabilidad y un acabado que supera los estándares de la industria.",
    stats: [
      { label: "Control en cada pieza", value: "100%" },
      { label: "Normas de seguridad", value: "NOM" },
    ],
  },
  {
    icon: UsersIcon,
    title: "Personal Altamente Capacitado",
    description:
      "Nuestro equipo cuenta con formación técnica especializada y experiencia probada en cristal templado. Desde la asesoría inicial hasta la instalación final, cada miembro aporta el conocimiento necesario para un resultado impecable.",
    stats: [
      { label: "Años de experiencia", value: "10+" },
      { label: "Proyectos ejecutados", value: "500+" },
    ],
  },
  {
    icon: ScaleIcon,
    title: "Balance entre Calidad y Precio",
    description:
      "Ofrecemos soluciones de primer nivel a precios competitivos. Optimizamos cada etapa del proceso para brindarte la mayor rentabilidad sin comprometer la calidad del producto ni del servicio.",
    stats: [
      { label: "Cotización transparente", value: "Sí" },
      { label: "Satisfacción del cliente", value: "98%" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function QualityAndSafety() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-gradient-to-br from-[#47b6ff]/8 to-transparent rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-[#0255D1]/8 to-transparent rounded-full blur-[80px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Top: Image + intro text in a split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          {/* Image side — creative masked shape */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(12,76,120,0.15)]">
              <img
                src="/services-imgs/quality-certified.avif"
                alt="Control de calidad de cristal templado GlassPro"
                className="w-full h-[380px] md:h-[440px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C4C78]/40 via-transparent to-transparent" />

              {/* Floating stat overlays */}
              <div className="absolute bottom-5 left-5 right-5 flex gap-3">
                <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center border border-[#0255D1]/10 shadow-lg">
                  <span className="block text-2xl font-black text-[#0255D1]">500+</span>
                  <span className="block text-[10px] font-semibold text-[#373435]/50 uppercase tracking-wider">Proyectos</span>
                </div>
                <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center border border-[#0255D1]/10 shadow-lg">
                  <span className="block text-2xl font-black text-[#0255D1]">10+</span>
                  <span className="block text-[10px] font-semibold text-[#373435]/50 uppercase tracking-wider">Años</span>
                </div>
                <div className="flex-1 bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center border border-[#0255D1]/10 shadow-lg">
                  <span className="block text-2xl font-black text-[#0255D1]">98%</span>
                  <span className="block text-[10px] font-semibold text-[#373435]/50 uppercase tracking-wider">Satisfacción</span>
                </div>
              </div>
            </div>

            {/* Decorative border element behind the image */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-[#0255D1]/10 -z-10" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full border border-[#0255D1]/15 bg-[#0255D1]/[0.06] text-xs font-semibold uppercase tracking-[0.16em] text-[#0255D1] mb-6 shadow-sm">
              ¿Por qué GlassPro?
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#373435] mb-6 leading-[1.1] tracking-[-0.04em]">
              Beneficios que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0255D1] to-[#47b6ff]">
                nos distinguen
              </span>
            </h2>
            <p className="text-[#373435]/65 text-lg md:text-xl font-medium leading-relaxed mb-6">
              Cada proyecto es respaldado por los pilares que definen nuestro
              compromiso con la excelencia: calidad certificada, personal
              capacitado y precios competitivos.
            </p>
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[#0255D1]/[0.06] to-transparent border border-[#0255D1]/10">
              <div className="h-8 w-8 rounded-lg bg-[#0255D1]/10 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#0255D1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-bold text-[#0255D1]/80">
                Más de una década de experiencia respalda nuestro compromiso
              </span>
            </div>
          </motion.div>
        </div>

        {/* Benefits grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {BENEFITS.map((benefit, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="group relative rounded-3xl bg-white border border-[#0255D1]/10 p-8 transition-all duration-500 hover:border-[#0255D1]/25 hover:shadow-[0_25px_50px_-12px_rgba(12,76,120,0.1)]"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
                style={{
                  background: "rgba(2, 85, 209, 0.06)",
                  border: "1px solid rgba(2, 85, 209, 0.12)",
                }}
              >
                <benefit.icon className="h-6 w-6 text-[#0255D1]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-black text-[#373435] mb-3 tracking-[-0.02em]">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] leading-relaxed font-medium text-[#373435]/65 mb-6">
                {benefit.description}
              </p>

              {/* Stats */}
              <div className="flex gap-4">
                {benefit.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-xl p-3 text-center"
                    style={{
                      background: "rgba(2, 85, 209, 0.03)",
                      border: "1px solid rgba(2, 85, 209, 0.08)",
                    }}
                  >
                    <span className="block text-lg font-black text-[#0255D1] leading-tight">
                      {stat.value}
                    </span>
                    <span className="block text-[11px] font-semibold text-[#373435]/45 uppercase tracking-wider mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative hover corner */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-[3rem] bg-gradient-to-bl from-[#0255D1]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
