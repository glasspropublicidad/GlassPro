export function Intro() {
    return (
        <section className="relative w-full overflow-hidden bg-white px-6 py-24">
            {/* Subtle brand radial decoration */}
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#0255D1]/[0.04] blur-3xl"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#373435]">
                    Expertos en Cristal Templado
                </h2>
                {/* Decorative accent line */}
                <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#0255D1] to-[#1C75BC]"></div>
                <p className="text-lg md:text-xl text-[#373435]/70 leading-relaxed max-w-3xl mx-auto">
                    En GlassPro, transformamos tus ideas en realidades tangibles y seguras. Con una visión orientada a la excelencia y maquinaria de última generación, ofrecemos soluciones en cristal templado que cumplen con los más altos estándares internacionales, ideal para proyectos corporativos y residenciales.
                </p>
            </div>
        </section>
    );
}
