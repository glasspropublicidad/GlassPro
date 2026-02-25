export function Hero() {
    return (
        <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden bg-[#373435]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/home-imgs/hero-bg.avif"
                    alt="Modern Glass Architecture"
                    className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-[#0255D1]/10 mix-blend-overlay"></div>
                {/* Bottom fade for smooth transition */}
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none"></div>
            </div>

            <div className="container relative z-10 mx-auto px-6 h-full flex flex-col justify-center">
                <div className="max-w-4xl">
                    {/* Decorative accent line */}
                    <div className="w-24 h-1 bg-brand-primary mb-8 rounded-full shadow-[0_0_20px_rgba(2,85,209,0.8)]"></div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-none">
                            INOVATION <br />
                            <span className="text-brand-gradient drop-shadow-sm">GLASS</span> SOLUTIONS
                        </h1>

                        <div className="flex items-center gap-4">
                            <div className="h-px flex-1 max-w-[40px] bg-white/30"></div>
                            <h2 className="text-2xl md:text-4xl font-light text-white/90 tracking-widest uppercase">
                                VISIONARY GLASS SOLUTIONS
                            </h2>
                        </div>
                    </div>

                    <div className="mt-8 p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl max-w-2xl transition-transform duration-500">
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed italic">
                            "Innovación, confiabilidad y calidad en cada proyecto de cristal templado. Proyectamos confianza con maquinaria de punta y un acompañamiento técnico inigualable."
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 mt-12">
                        <a
                            href="/servicios"
                            className="group relative px-10 py-5 bg-brand-primary text-white rounded-full font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_40px_-10px_rgba(2,85,209,0.5)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Nuestros Servicios
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </a>

                        <a
                            href="/contacto"
                            className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full font-bold transition-all hover:scale-105 active:scale-95 text-center"
                        >
                            Cotizar Proyecto
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
