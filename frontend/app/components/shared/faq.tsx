import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type FAQItem = {
    q: string;
    a: string;
};

interface FAQProps {
    title?: string;
    subtitle?: string;
    items: FAQItem[];
    className?: string;
}

export function FAQ({
    title = "Preguntas Frecuentes",
    subtitle = "Resolvemos tus inquietudes para iniciar con total claridad.",
    items,
    className = "w-full py-32 px-6 relative z-10"
}: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className={className}>
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-[#1a1f24] mb-4">{title}</h2>
                    {subtitle && <p className="text-xl text-[#373435]/60">{subtitle}</p>}
                </div>
                <div className="space-y-4">
                    {items.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <motion.div
                                key={i}
                                initial={false}
                                className={`rounded-3xl border transition-colors duration-300 px-8 py-6 cursor-pointer ${isOpen ? 'bg-white border-[#0255D1]/30 shadow-[0_10px_40px_rgba(2,85,209,0.06)]' : 'bg-transparent border-transparent hover:bg-white/50'}`}
                                onClick={() => setOpenIndex(isOpen ? null : i)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className={`text-xl font-bold transition-colors ${isOpen ? 'text-[#0255D1]' : 'text-[#1a1f24]'}`}>{faq.q}</h3>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                        className={`w-8 h-8 rounded-full flex shrink-0 items-center justify-center border ml-4 transition-colors ${isOpen ? 'bg-[#0255D1] text-white border-[#0255D1]' : 'bg-transparent text-[#1a1f24] border-gray-200'}`}
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </motion.div>
                                </div>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial="collapsed"
                                            animate="open"
                                            exit="collapsed"
                                            variants={{
                                                open: { opacity: 1, height: "auto", marginTop: "1rem" },
                                                collapsed: { opacity: 0, height: 0, marginTop: "0rem" }
                                            }}
                                            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-[#373435]/70 leading-relaxed text-lg pr-12">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
