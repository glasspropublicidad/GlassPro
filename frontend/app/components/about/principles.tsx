import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const cardContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease },
  },
};

const principles = [
  {
    title: "Innovación Radical",
    desc: "Incorporamos y adaptamos la tecnología más avanzada en cada proceso de transformación. No seguimos tendencias, las implementamos con rigor técnico.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Compromiso 360º",
    desc: "Implicación total en tu proyecto. Desde el boceto inicial hasta la última fase de instalación, garantizamos que los acuerdos acordados se cumplan al milímetro.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Excelencia Comprobada",
    desc: "Calidad respaldada por rigurosas certificaciones internacionales. Encontramos el balance perfecto entre desempeño superior y competitividad en costos.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export function Principles() {
  return (
    <section className="w-full py-32 px-6 relative z-10">
      <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none flex justify-center items-center">
        <div className="w-full h-1/2 bg-gradient-to-r from-[#8fd7ff]/10 via-[#0255D1]/5 to-[#47b6ff]/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="text-4xl md:text-6xl font-black text-[#1a1f24]"
          >
            Nuestros{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0255D1] to-[#47b6ff] pb-2 inline-block">
              Principios
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease, delay: 0.12 }}
            className="mt-6 text-xl text-[#373435]/60 max-w-2xl mx-auto"
          >
            Pilares fundamentales que rigen cada corte, cada perforación y cada entrega en nuestras plantas.
          </motion.p>
        </div>

        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {principles.map((p, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              className="group relative p-10 rounded-3xl bg-white border border-[#0255D1]/10 overflow-hidden hover:border-[#0255D1]/30 transition-all duration-500 shadow-sm hover:shadow-[0_20px_60px_rgba(2,85,209,0.08)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0255D1]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#0255D1]/10 flex items-center justify-center text-[#0255D1] mb-8 group-hover:scale-110 group-hover:bg-[#0255D1] group-hover:text-white transition-all duration-500 shadow-inner">
                  {p.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#1a1f24]">{p.title}</h3>
                <p className="text-[#373435]/70 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
