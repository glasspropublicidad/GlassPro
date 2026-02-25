export function Testimonials() {
    return (
        <section className="w-full py-20 px-6 relative text-center overflow-hidden bg-white">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#1C75BC]/8 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#0255D1]/15 p-12 shadow-[0_4px_40px_rgba(2,85,209,0.09)] relative z-10">
                <p className="text-2xl md:text-4xl font-light italic mb-8 text-[#373435]">
                    "GLASSPRO ha sido más que un proveedor, un socio estratégico fundamental para el éxito y la seguridad de nuestros desarrollos inmobiliarios más ambiciosos."
                </p>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#0255D1] text-white mb-4 flex items-center justify-center font-bold text-xl">
                        M
                    </div>
                    <h4 className="text-lg font-bold text-[#373435]">Constructora Magna</h4>
                    <span className="text-[#373435]/50 text-sm uppercase tracking-wide">Dirección General</span>
                </div>
            </div>
        </section>
    );
}
