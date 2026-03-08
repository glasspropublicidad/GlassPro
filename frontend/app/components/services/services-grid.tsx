import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "~/ui/button";

// ── Inline SVG Icons ────────────────────────────────────────────
function GlassIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );
}

function CogIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" /><path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" /><path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  );
}

// ── Service Data ────────────────────────────────────────────────
const SERVICES = [
  {
    id: "venta-vidrio-cristal",
    icon: GlassIcon,
    number: "01",
    title: "Venta de Vidrio y Cristal",
    subtitle: "Amplia variedad de vidrios por hoja y cristales especializados",
    image: "/services-imgs/glass-templado-jumbo.png",
    description:
      "Ofrecemos venta de vidrio por hoja en múltiples espesores y una amplia gama de cristales especializados para todo tipo de proyecto arquitectónico, residencial y comercial.",
    features: [
      "Vidrio por hoja en espesores de 6mm, 8mm, 10mm y 12mm",
      "Cristal Claro, Filtrasol, Satinado y Tintex",
      "Cristal Reflecta, Sol-lite y Evo 50",
      "Luna 3mm, Luna 6mm y Luna Bronce",
      "Asesoría para elegir el cristal ideal según tu proyecto",
    ],
    highlight: "Variedad completa de vidrios y cristales con disponibilidad inmediata",
  },
  {
    id: "vidrio-templado",
    icon: CogIcon,
    number: "02",
    title: "Vidrio Templado",
    subtitle: "Resistencia y seguridad para tu proyecto",
    image: "/services-imgs/suministro-maquila.png",
    description:
      "Procesamos vidrio templado con la precisión que tu proyecto exige. Nuestro horno de última generación garantiza resistencia, seguridad y un acabado impecable en cada pieza.",
    features: [
      "Proceso de templado con tecnología de última generación",
      "Variedad de espesores y dimensiones según requerimiento",
      "Cumplimiento de normativas de seguridad vigentes",
      "Ideal para proyectos residenciales, comerciales e industriales",
      "Control de calidad riguroso en cada pieza producida",
    ],
    highlight: "Capacidad de producción para proyectos de cualquier escala",
  },
  {
    id: "maquila-vidrio",
    icon: WrenchIcon,
    number: "03",
    title: "Maquila de Vidrio",
    subtitle: "Procesos especializados con precisión milimétrica",
    image: "/services-imgs/herrajes-premium.png",
    description:
      "Realizamos todo tipo de procesos sobre vidrio con precisión milimétrica: canteado, perforaciones, saques y cortes especiales adaptados a las necesidades específicas de cada proyecto.",
    features: [
      "Canto plano y canto plano con forma",
      "Barrenos y avellanes de precisión",
      "Saques para clip y bisagra",
      "Saques especiales según diseño",
      "Cortes especiales a medida",
    ],
    highlight: "Tiempo de entrega en procesos de 3 a 4 días",
  },
];

export function ServicesGrid() {
  const [activeId, setActiveId] = useState<string>(SERVICES[0].id);
  const active = SERVICES.find((s) => s.id === activeId) ?? SERVICES[0];

  return (
    <section id="servicios" className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 -translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#47b6ff]/8 to-transparent rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[#0255D1]/6 to-transparent rounded-full blur-[80px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full border border-[#0255D1]/15 bg-[#0255D1]/[0.06] text-xs font-semibold uppercase tracking-[0.16em] text-[#0255D1] mb-6 shadow-sm">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#373435] mb-6 leading-[1.1] tracking-[-0.04em]">
            Soluciones especializadas{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0255D1] to-[#47b6ff]">
              en cada detalle
            </span>
          </h2>
          <p className="text-[#373435]/70 text-lg md:text-xl max-w-2xl font-medium">
            Tres líneas de servicio diseñadas para cubrir todas las
            necesidades de tu proyecto arquitectónico, desde la materia prima
            hasta las piezas de acción.
          </p>
        </div>

        {/* Tabs + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tab navigation */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {SERVICES.map((service) => {
              const isActive = service.id === activeId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  className={`group w-full text-left rounded-2xl p-5 transition-all duration-400 cursor-pointer ${isActive
                      ? "bg-white shadow-[0_20px_50px_-12px_rgba(12,76,120,0.1),0_0_0_1px_rgba(2,85,209,0.15)]"
                      : "bg-transparent hover:bg-white/60"
                    }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="p-2.5 rounded-xl transition-all duration-400 flex-shrink-0"
                      style={{
                        background: isActive ? "rgba(2, 85, 209, 0.08)" : "rgba(55, 52, 53, 0.03)",
                        border: isActive ? "1px solid rgba(2, 85, 209, 0.2)" : "1px solid rgba(55, 52, 53, 0.08)",
                      }}
                    >
                      <service.icon
                        className={`h-5 w-5 transition-colors duration-400 ${isActive ? "text-[#0255D1]" : "text-[#373435]/30 group-hover:text-[#373435]/50"
                          }`}
                      />
                    </div>
                    <div className="pt-0.5">
                      <span
                        className={`text-xs font-bold tracking-widest block mb-1 transition-colors duration-400 ${isActive ? "text-[#0255D1]" : "text-[#373435]/25"
                          }`}
                      >
                        {service.number}
                      </span>
                      <span
                        className={`text-sm font-bold block leading-tight transition-colors duration-400 ${isActive ? "text-[#373435]" : "text-[#373435]/50 group-hover:text-[#373435]/70"
                          }`}
                      >
                        {service.title}
                      </span>
                      <span
                        className={`text-xs font-medium block mt-1 leading-tight transition-colors duration-400 ${isActive ? "text-[#373435]/60" : "text-[#373435]/25"
                          }`}
                      >
                        {service.subtitle}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl bg-white border border-[#0255D1]/12 overflow-hidden shadow-[0_25px_50px_-12px_rgba(12,76,120,0.08)]"
              >
                {/* Service image header */}
                <div className="relative h-52 md:h-64 w-full overflow-hidden">
                  <motion.img
                    key={active.image}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    src={active.image}
                    alt={active.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
                  {/* Floating number badge */}
                  <div className="absolute top-5 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-[#0255D1]/10">
                    <span className="font-black text-sm tracking-widest text-[#0255D1]">
                      SERVICIO {active.number}
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-8 md:p-10 -mt-8 relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black leading-tight tracking-[-0.04em] text-[#373435] mb-4">
                    {active.title}
                  </h3>

                  <p className="text-base md:text-lg leading-relaxed font-medium text-[#373435]/65 mb-8">
                    {active.description}
                  </p>

                  {/* Feature list */}
                  <div
                    className="rounded-2xl p-5 md:p-6 mb-6"
                    style={{
                      background: "rgba(2, 85, 209, 0.03)",
                      border: "1px solid rgba(2, 85, 209, 0.08)",
                    }}
                  >
                    <ul className="space-y-3.5">
                      {active.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06, duration: 0.3 }}
                          className="flex items-start gap-3 text-[15px] font-medium text-[#373435]/75"
                        >
                          <div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0255D1]/60 flex-shrink-0 shadow-[0_0_8px_rgba(2,85,209,0.5)]" />
                          <span className="leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlight badge */}
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[#0255D1]/[0.06] to-transparent border border-[#0255D1]/10">
                    <div className="h-8 w-8 rounded-lg bg-[#0255D1]/10 flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#0255D1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-[#0255D1]/80">
                      {active.highlight}
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="flex justify-end pt-6">
                    <Button href="/contacto" variant="outline" size="md" className="group text-[#0255D1] border-[#0255D1]/30 hover:bg-[#0255D1]/5">
                      Solicitar información
                      <ArrowRightIcon className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
