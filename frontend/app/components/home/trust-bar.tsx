import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

// Single variant tree — the card entrance AND the item stagger are coordinated
// by one whileInView trigger. delayChildren: 0.2 means items start after the
// card has already begun appearing, so there is never a "visible card with
// invisible content" state.
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
      staggerChildren: 0.1,
      delayChildren: 0.22,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

export function TrustBar() {
  const trustItems = [
    { label: "Años de experiencia", value: "+15" },
    { label: "Calidad Certificada", value: "ISO" },
    { label: "Acompañamiento", value: "100%" },
    { label: "Proyectos realizados", value: "+500" },
  ];

  return (
    <section className="w-full px-6 pb-24 -mt-12 relative z-30">
      {/* Single whileInView — controls both card visibility and item stagger */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-1000" />

        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.08)]">
          <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[2500ms] ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200/80">
            {trustItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center justify-center p-8 text-center transition-all duration-300 hover:bg-slate-50/50"
              >
                <span className="text-4xl md:text-5xl font-extralight tracking-tighter text-slate-800 mb-1">
                  {item.value}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-600 font-semibold leading-tight">
                  {item.label}
                </span>
                <div className="w-0 group-hover:w-8 h-[1px] bg-brand-primary mt-4 transition-all duration-700 opacity-0 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
