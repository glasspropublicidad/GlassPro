export function FAQ() {
    return (
        <section className="w-full py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto flex flex-col gap-12">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-[#373435]">Preguntas Frecuentes</h2>
                <div className="space-y-4">
                    {[
                        {
                            q: "¿Qué dimensiones abarca el cristal templado jumbo?",
                            a: "Nuestra maquinaria nos permite procesar cristales de gran formato que superan las medidas estándar, contáctanos para medidas exactas de acuerdo a tu proyecto."
                        },
                        {
                            q: "¿En qué consiste el servicio de orientación y maquila?",
                            a: "Desde el diseño y cálculo hasta la manufactura del cristal, brindamos acompañamiento total."
                        },
                        {
                            q: "¿Hacen envíos de herrajes?",
                            a: "Sí, contamos con venta de mayoreo y menudeo con envíos asegurados a todo el país."
                        }
                    ].map((faq, i) => (
                        <div key={i} className="rounded-2xl bg-white border border-[#0255D1]/12 hover:border-[#0255D1]/30 p-6 shadow-sm hover:shadow-md transition-all">
                            <h3 className="text-xl font-bold mb-2 text-[#373435]">{faq.q}</h3>
                            <p className="text-[#373435]/60">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
