import { motion } from "framer-motion";

const services = [
  {
    step: "01",
    title: "Cristal Templado Jumbo",
    desc: "Procesamos cristal en grandes dimensiones con precision milimetrica.",
    link: "/servicios/cristal-templado-jumbo",
  },
  {
    step: "02",
    title: "Orientacion y Maquila",
    desc: "Acompanamiento integral, desde la prospeccion hasta la entrega final del proyecto.",
    link: "/servicios/suministro-orientacion-prospeccion-maquila",
  },
  {
    step: "03",
    title: "Venta de Herrajes",
    desc: "Amplio catalogo de herrajes de alta calidad para mayoreo y menudeo.",
    link: "/servicios/venta-herrajes",
  },
];

export function ServicesPreview() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#0255D1]/5 to-white px-6 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[#0255D1]/10 blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-[#1C75BC]/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-t from-transparent to-white" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="mt-5 text-4xl font-bold leading-tight text-[#373435] md:text-5xl">
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-lg text-[#373435]/65 md:text-xl">
              Soluciones integrales de acuerdo a tus necesidades especificas.
            </p>
          </div>

          <a
            href="/servicios"
            className="group inline-flex items-center gap-2 rounded-full border border-[#0255D1]/25 bg-white px-5 py-2 text-sm font-semibold text-[#0255D1] transition-all hover:border-[#0255D1]/45 hover:bg-[#0255D1] hover:text-white"
          >
            Ver todos los servicios
            <span className="text-base transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>

        <div className="relative mt-12">
          {services.map((service, index) => (
            <div key={service.title} className="relative min-h-[72vh] py-6 first:pt-0 last:pb-0" style={{ zIndex: index + 1 }}>
              <motion.article
                initial={{ opacity: 0, y: 90, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ amount: 0.42, once: false }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="sticky top-24 isolate overflow-hidden rounded-[2rem] border border-[#0255D1]/20 bg-[#edf2f7] p-8 shadow-[0_30px_70px_rgba(12,76,120,0.16)] md:p-12"
              >

                <div className="relative z-10 max-w-3xl">
                  <p className="text-7xl font-black leading-none text-[#373435] md:text-8xl">{service.step}</p>
                  <h3 className="mt-4 text-4xl font-bold leading-tight text-[#373435] md:text-6xl">{service.title}</h3>
                  <p className="mt-5 max-w-xl text-xl leading-relaxed text-[#373435]/82 md:text-2xl">{service.desc}</p>
                  <a
                    href={service.link}
                    className="mt-10 inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/80 px-5 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-black transition-all hover:border-black/40 hover:bg-white"
                  >
                    Ver detalles
                    <span className="text-base">&rarr;</span>
                  </a>
                </div>
              </motion.article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
