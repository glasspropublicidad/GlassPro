export function Principles() {
    return (
        <section className="w-full py-20 px-6 bg-gradient-to-b from-white via-[#0255D1]/4 to-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-[#373435]">Nuestros Principios</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Innovación", desc: "Incorporamos la tecnología más avanzada en cada uno de nuestros procesos de transformación de vidrio." },
                        { title: "Compromiso", desc: "Acompañamiento 360º al cliente, desde el diseño hasta la instalación, cumpliendo con los acuerdos al 100%." },
                        { title: "Excelencia", desc: "Certificaciones internacionales respaldan el balance correcto entre calidad superior y precio competitivo." },
                    ].map((p, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white border border-[#0255D1]/12 hover:border-[#0255D1]/30 shadow-sm hover:shadow-[0_8px_32px_rgba(2,85,209,0.10)] transition-all">
                            <h3 className="text-xl font-bold mb-4 text-[#0255D1]">{p.title}</h3>
                            <p className="text-[#373435]/60">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
