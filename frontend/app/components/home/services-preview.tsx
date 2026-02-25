const services = [
  {
    title: "Cristal Templado Jumbo",
    desc: "Procesamos cristal en grandes dimensiones con precision milimetrica.",
    link: "/servicios/cristal-templado-jumbo",
  },
  {
    title: "Orientacion y Maquila",
    desc: "Acompanamiento integral, desde la prospeccion hasta la entrega final del proyecto.",
    link: "/servicios/suministro-orientacion-prospeccion-maquila",
  },
  {
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative isolate overflow-hidden rounded-3xl border border-[#0255D1]/15 bg-white/90 p-8 shadow-[0_18px_48px_rgba(12,76,120,0.08)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#0255D1]/35 hover:shadow-[0_24px_52px_rgba(2,85,209,0.16)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#0255D1]/18 blur-2xl" />
                <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#0255D1]/8 to-transparent" />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <span className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0255D1]/20 bg-[#0255D1]/6 text-sm font-semibold text-[#0255D1]">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-bold text-[#373435] transition-colors group-hover:text-[#0255D1]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-[#373435]/68">{service.desc}</p>
                </div>

                <a
                  href={service.link}
                  className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#0255D1] transition-colors hover:text-[#0C4C78]"
                >
                  Ver detalles
                  <span className="text-lg transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
