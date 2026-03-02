import { motion } from "framer-motion";

const caps = [
    "Medidas Jumbo",
    "Esmerilado de Alta Precisión",
    "Canteado Rectilíneo",
    "Perforaciones Exactas",
    "Certificación ISO Global",
    "Templado Estructural"
];

export function Capabilities() {
    return (
        <section className="w-full py-32 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 rounded-[2.5rem] bg-[#0C4C78] p-12 text-white flex flex-col justify-center relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-[#47b6ff]/30 blur-[80px] rounded-full pointer-events-none" />
                        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight relative z-10">
                            Capacidad<br />Técnica<br /><span className="text-[#8fd7ff]">Sin Límites</span>
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed relative z-10">
                            Nuestra maquila industrial cuenta con equipamiento de la más alta gama, preparado para procesar cristales en formatos imponentes y acabados verdaderamente impecables.
                        </p>
                    </motion.div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {caps.map((cap, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-[2rem] bg-[#FAFCFF] border border-[#0255D1]/10 flex items-center justify-between hover:bg-white hover:border-[#0255D1]/30 hover:shadow-xl transition-all duration-300"
                            >
                                <span className="text-xl font-bold text-[#1a1f24] group-hover:text-[#0255D1] transition-colors">{cap}</span>
                                <div className="w-10 h-10 rounded-full bg-[#0255D1]/10 flex items-center justify-center text-[#0255D1] group-hover:bg-[#0255D1] group-hover:text-white transition-all transform group-hover:rotate-45">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                    </svg>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
