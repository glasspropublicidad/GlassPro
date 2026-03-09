import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const listContainerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease },
    },
};

const valuePoints = [
    "Personal altamente capacitado en cada etapa del proceso.",
    "El balance correcto entre calidad superior y precio competitivo.",
    "Certificaciones internacionales que respaldan nuestra durabilidad.",
    "Maquinaria moderna para acabados impecables en dimensiones jumbo.",
];

export function ValueProps() {
    return (
        <section className="w-full py-20 px-6 bg-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full bg-[#0255D1]/6 blur-3xl pointer-events-none"></div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
                <div className="md:w-1/2 space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease }}
                        className="text-3xl md:text-5xl font-bold text-balance text-[#373435]"
                    >
                        El balance perfecto entre calidad y precio
                    </motion.h2>
                    <motion.ul
                        variants={listContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {valuePoints.map((vp, i) => (
                            <motion.li key={i} variants={listItemVariants} className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-[#0255D1] text-white flex items-center justify-center flex-shrink-0 mt-1 text-sm font-bold">✓</div>
                                <p className="text-lg text-[#373435]/70">{vp}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease, delay: 0.15 }}
                    className="md:w-1/2 w-full h-96 rounded-3xl border border-[#0255D1]/15 p-4 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0255D1]/5 to-[#1C75BC]/10"
                >
                    <img src="/home-imgs/value-props.avif" alt="Value Props" className="w-full h-full object-cover rounded-xl" />
                </motion.div>
            </div>
        </section>
    );
}
