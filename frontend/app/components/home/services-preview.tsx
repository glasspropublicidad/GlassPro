import { motion } from "framer-motion";
import { Button } from "~/ui/button";

const services = [
  {
    step: "01",
    title: "Venta de Vidrio y Cristal",
    desc: "Vidrio por hoja en multiples espesores y cristales especializados: Filtrasol, Satinado, Reflecta y mas.",
    link: "/servicios",
    image: "/home-imgs/jumbo_tempered.png",
  },
  {
    step: "02",
    title: "Vidrio Templado",
    desc: "Procesamos vidrio templado con tecnologia de ultima generacion para maxima resistencia y seguridad.",
    link: "/servicios",
    image: "/home-imgs/maquila_meeting.png",
  },
  {
    step: "03",
    title: "Maquila de Vidrio",
    desc: "Canto plano, barrenos, avellanes, saques y cortes especiales con precision milimetrica.",
    link: "/servicios",
    image: "/home-imgs/herrajes_hardware.png",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <motion.article variants={cardVariants} className="group relative">
      <a
        href={service.link}
        className="relative flex aspect-[3/4] flex-col overflow-hidden rounded-2xl md:rounded-3xl"
      >
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/55 to-[#0a1628]/5 transition-colors duration-500 group-hover:from-[#0a1628]/95" />

        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#47b6ff] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="absolute right-4 top-3 select-none text-[7rem] font-black leading-none text-white/[0.06] md:right-6 md:top-4 md:text-[9rem]">
          {service.step}
        </span>

        <div className="relative mt-auto p-6 md:p-8">
          <span className="mb-3 inline-block rounded-full border border-[#47b6ff]/25 bg-[#47b6ff]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#47b6ff] backdrop-blur-sm">
            Servicio {service.step}
          </span>
          <h3 className="text-2xl font-black leading-tight tracking-[-0.02em] text-white md:text-3xl">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-base">
            {service.desc}
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#47b6ff] transition-all duration-300 group-hover:gap-3">
            Ver detalles
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </a>
    </motion.article>
  );
}

export function ServicesPreview() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-24 md:py-36">
      <div className="absolute inset-0">
        <img
          src="/home-imgs/services-preview.avif"
          alt="Fondo de vidrio"
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/30" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white via-white/50 to-transparent md:h-32" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white via-white/50 to-transparent md:h-56" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center md:mb-20"
        >
          <h2 className="text-3xl font-black leading-[0.9] tracking-[-0.04em] text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.42)] md:text-5xl">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-[#8fd7ff] via-[#47b6ff] to-[#0255D1] bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex justify-center md:mt-16"
        >
          <Button
            href="/servicios"
            variant="glass"
            size="lg"
            className="border-white/30 bg-white/15 text-white shadow-lg backdrop-blur-xl hover:bg-white/25"
          >
            Explorar todos los servicios
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
