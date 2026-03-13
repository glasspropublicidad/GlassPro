import { motion } from "framer-motion";
import { Button } from "~/ui/button";

const ease = [0.16, 1, 0.3, 1] as const;

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const projects = [
  {
    title: "Fachada Corporativa Norte",
    category: "Corporativo",
    summary: "Cristal templado jumbo para fachada principal con integración limpia de herrajes.",
    href: "/portafolio",
    image:
      "/home-imgs/portfolio-1.avif",
    layout: "lg:col-span-1",
    imageHeight: "h-64",
  },
  {
    title: "Sistema de Oficinas Ejecutivas",
    category: "Residencial",
    summary: "División de espacios con cristal de alta claridad para oficinas y salas colaborativas.",
    href: "/portafolio",
    image:
      "/home-imgs/portfolio-2.avif",
    layout: "lg:col-span-2",
    imageHeight: "h-64",
  },
  {
    title: "Plaza Comercial Delta",
    category: "Comercial",
    summary: "Maquila y montaje de cancelería para pasillos de alto tráfico y locales ancla.",
    href: "/portafolio",
    image:
      "/home-imgs/portfolio-3.avif",
    layout: "lg:col-span-2",
    imageHeight: "h-72",
  },
  {
    title: "Hotel Mirador Azul",
    category: "Hospitalidad",
    summary: "Cancelería para lobby y suites con acabados premium y especificación arquitectónica.",
    href: "/portafolio",
    image:
      "/home-imgs/portfolio-4.avif",
    layout: "lg:col-span-1",
    imageHeight: "h-72",
  },
];

export function PortfolioPreview() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-24">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-[#0255D1]/15 bg-[#0255D1]/8 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#0255D1]">
              Portafolio
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-[#373435] md:text-5xl">
              Proyectos Destacados
            </h2>
            <p className="mt-4 text-lg text-[#373435]/65 md:text-xl">
              Casos de éxito que reflejan precisión técnica, diseño y ejecución impecable.
            </p>
          </div>

          <a
            href="/portafolio"
            className="group hidden items-center gap-2 rounded-full border border-[#0255D1]/25 px-5 py-2 text-sm font-semibold text-[#0255D1] transition-all hover:border-[#0255D1]/50 hover:bg-[#0255D1] hover:text-white md:inline-flex"
          >
            Ver todo
            <span className="text-base transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </motion.div>

        <div className="rounded-2xl bg-white p-3 md:p-4">
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.a
                key={project.title}
                href={project.href}
                variants={cardVariants}
                className={`group relative overflow-hidden rounded-xl border border-[#0255D1]/18 bg-white shadow-[0_14px_34px_rgba(12,76,120,0.12)] transition-all hover:-translate-y-0.5 hover:border-[#0255D1]/45 hover:shadow-[0_22px_42px_rgba(12,76,120,0.18)] ${project.layout}`}
              >
                <div className={`relative overflow-hidden ${project.imageHeight}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C4C78]/55 via-transparent to-[#0255D1]/25" />
                </div>

                <div className="p-5">
                  <span className="inline-flex w-fit rounded-full border border-[#1C75BC]/35 bg-[#1C75BC]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0C4C78]">
                    {project.category}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-[#373435] transition-colors group-hover:text-[#0255D1]">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm text-[#373435]/72">{project.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#1C75BC]">
                    Ver proyecto
                    <span className="text-base transition-transform group-hover:translate-x-1">&rarr;</span>
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          className="mt-8 text-center md:hidden"
        >
          <Button href="/portafolio" variant="outline" size="md" className="inline-flex">
            Ver Portafolio
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
