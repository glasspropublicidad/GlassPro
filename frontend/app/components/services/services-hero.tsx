import { motion } from "framer-motion";
import { Button } from "~/ui/button";

export function ServicesHero() {
    return (
        <section className="relative w-full min-h-screen px-6 flex items-center justify-center overflow-hidden">
            {/* Full-bleed background image */}
            <div className="absolute inset-0 -z-20">
                <img
                    src="/services-imgs/services-hero.png"
                    alt="Cristal templado GlassPro"
                    className="h-full w-full object-cover object-center"
                />
            </div>

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0C4C78]/60 via-[#0C4C78]/40 to-white/10" />

            {/* Subtle grid pattern overlay */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 text-center max-w-4xl py-32"
            >
                <span className="inline-block py-1.5 px-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-xs font-semibold uppercase tracking-[0.16em] text-white mb-8 shadow-sm">
                    Soluciones Integrales en Vidrio
                </span>

                <h1 className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[0.95] mb-8 text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.3)]">
                    Servicios de{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8fd7ff] via-[#47b6ff] to-[#0255D1]">
                        Clase Premium
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
                    Cristal templado, herrajes y acompañamiento integral para proyectos
                    que exigen calidad certificada, precisión y un balance perfecto entre
                    rendimiento y valor.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                    <Button href="/contacto" variant="primary" size="lg">
                        Solicitar Cotización
                    </Button>
                    <Button href="#servicios" variant="glass" size="lg">
                        Explorar Servicios
                    </Button>
                </div>
            </motion.div>

            {/* Bottom fade to white */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white via-white/75 to-transparent z-10" />
        </section>
    );
}
