export function AboutCTA() {
    return (
        <section className="w-full py-20 px-6 relative overflow-hidden bg-white">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#0255D1]/8 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-5xl mx-auto relative z-10 text-center rounded-3xl bg-gradient-to-br from-[#0255D1] to-[#0C4C78] text-white p-16 shadow-[0_16px_64px_rgba(2,85,209,0.25)]">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Confía en los expertos</h2>
                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                    Garantizamos tiempos de entrega precisos y calidad superior.
                </p>
                <a href="/contacto" className="inline-block px-10 py-5 bg-white text-[#0255D1] hover:bg-white/90 rounded-full font-bold transition-all shadow-lg">
                    Inicia tu Proyecto
                </a>
            </div>
        </section>
    );
}
