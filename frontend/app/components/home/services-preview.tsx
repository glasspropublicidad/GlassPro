export function ServicesPreview() {
    return (
        <section className="w-full py-20 px-6 bg-gradient-to-b from-white via-[#0255D1]/4 to-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#373435]">Nuestros Servicios</h2>
                    <p className="text-xl text-[#373435]/60 max-w-2xl mx-auto">Soluciones integrales de acuerdo a tus necesidades específicas.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Cristal Templado Jumbo",
                            desc: "Procesamos cristal en grandes dimensiones con precisión milimétrica.",
                            link: "/servicios/cristal-templado-jumbo",
                        },
                        {
                            title: "Orientación y Maquila",
                            desc: "Acompañamiento integral, desde la prospección hasta la entrega final del proyecto.",
                            link: "/servicios/suministro-orientacion-prospeccion-maquila",
                        },
                        {
                            title: "Venta de Herrajes",
                            desc: "Amplio catálogo de herrajes de alta calidad para mayoreo y menudeo.",
                            link: "/servicios/venta-herrajes",
                        }
                    ].map((s, i) => (
                        <div key={i} className="group p-8 rounded-3xl bg-white border border-[#0255D1]/12 hover:border-[#0255D1]/40 hover:shadow-[0_8px_40px_rgba(2,85,209,0.12)] transition-all flex flex-col justify-between shadow-sm">
                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-[#373435] group-hover:text-[#0255D1] transition-colors">{s.title}</h3>
                                <p className="text-[#373435]/60 mb-8">{s.desc}</p>
                            </div>
                            <a href={s.link} className="text-[#0255D1] font-medium hover:text-[#0C4C78] flex items-center gap-2 transition-colors">
                                Ver Detalles <span className="text-xl">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
