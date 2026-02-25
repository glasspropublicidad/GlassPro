export function Story() {
    return (
        <section className="w-full py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#373435]">Nuestra Historia</h2>
                    <p className="text-lg text-[#373435]/60 mb-4 leading-relaxed">
                        GLASSPRO nace de la visión de transformar el mercado del cristal templado, y con el objetivo de convertirnos en un aliado estratégico para nuestros clientes, más que solo un proveedor.
                    </p>
                    <p className="text-lg text-[#373435]/60 leading-relaxed">
                        Apostamos por la tecnología de maquinaria moderna, pero nuestro verdadero diferenciador es el compromiso inquebrantable con la calidad y los tiempos de entrega, garantizando que cada proyecto sea un éxito rotundo.
                    </p>
                </div>
                <div className="md:w-1/2 w-full h-80 rounded-3xl border border-[#0255D1]/12 p-4 bg-gradient-to-br from-[#0255D1]/5 to-[#0C4C78]/10"></div>
            </div>
        </section>
    );
}
