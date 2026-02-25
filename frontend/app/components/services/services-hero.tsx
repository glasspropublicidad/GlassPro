export function ServicesHero() {
    return (
        <section className="relative w-full h-[80vh] px-6 flex items-center justify-center bg-white border-b border-[#0255D1]/10 overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#0255D1]/10 blur-3xl"></div>
                <div className="absolute top-1/2 -right-48 w-[400px] h-[400px] rounded-full bg-[#1C75BC]/8 blur-3xl"></div>
            </div>
            <div className="relative z-10 text-center max-w-4xl py-32">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-[#373435]">Nuestros Servicios</h1>
                <p className="text-xl md:text-2xl text-[#373435]/60">
                    Ofrecemos soluciones integrales y personalizadas que se adaptan a la escala y exigencia de cada proyecto arquitectónico.
                </p>
            </div>
        </section>
    );
}
