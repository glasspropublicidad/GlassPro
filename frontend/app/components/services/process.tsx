// app/components/home/Process.tsx
import React, { useEffect, useRef, useState } from "react";
import { Button } from "~/ui/button";

// ── Inline SVG icons ───────────────────────────────────────────
function CalculatorIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
            <rect width="16" height="20" x="4" y="2" rx="2" />
            <line x1="8" x2="16" y1="6" y2="6" />
            <line x1="16" x2="16" y1="14" y2="18" />
            <path d="M16 10h.01" />
            <path d="M12 10h.01" />
            <path d="M8 10h.01" />
            <path d="M12 14h.01" />
            <path d="M8 14h.01" />
            <path d="M12 18h.01" />
            <path d="M8 18h.01" />
        </svg>
    );
}

function RulerIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
            <path d="m14.5 12.5 2-2" />
            <path d="m11.5 9.5 2-2" />
            <path d="m8.5 6.5 2-2" />
            <path d="m17.5 15.5 2-2" />
        </svg>
    );
}

function FactoryIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
            <path d="M17 18h1" />
            <path d="M12 18h1" />
            <path d="M7 18h1" />
        </svg>
    );
}

function ToolIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M7 7h10v10" /><path d="M7 17 17 7" />
        </svg>
    );
}

// ── Entry type ─────────────────────────────────────────────────
type Entry = {
    icon: React.ComponentType<{ className?: string }>;
    step: string;
    title: string;
    subtitle: string;
    description: string;
    items: string[];
    button?: { href: string; text: string };
};

// ── GlassPro Process steps ──────────────────────────────────────
const ENTRIES: Entry[] = [
    {
        icon: CalculatorIcon,
        step: "01",
        title: "Cotización y Asesoría",
        subtitle: "Evaluamos tu proyecto a detalle",
        description:
            "Comenzamos conociendo las necesidades de tu obra. Nuestro equipo te asesora sobre los tipos de cristal, grosores y herrajes más adecuados para garantizar seguridad y estética.",
        items: [
            "Análisis de requerimientos técnicos y arquitectónicos",
            "Recomendación de espesores y tipos de cristal templado",
            "Selección de herrajes según diseño y funcionalidad",
            "Presupuesto detallado y transparente"
        ],
        button: { href: "/contacto", text: "Solicitar cotización" },
    },
    {
        icon: RulerIcon,
        step: "02",
        title: "Medición y Diseño",
        subtitle: "Precisión milimétrica en obra",
        description:
            "Nuestros especialistas visitan la obra para tomar medidas exactas y verificar plomos y niveles. Aseguramos que el diseño se adapte perfectamente al espacio construido.",
        items: [
            "Levantamiento físico con equipos de precisión",
            "Verificación de condiciones de instalación",
            "Ajustes de diseño para tolerancias milimétricas",
            "Despiece y generación de planos para fabricación"
        ],
    },
    {
        icon: FactoryIcon,
        step: "03",
        title: "Fabricación",
        subtitle: "Procesamiento de cristal jumbo",
        description:
            "El cristal se corta, canta, perfora y templa en nuestra planta siguiendo rigurosos controles de calidad. Nuestro horno nos permite procesar hasta dimensiones jumbo.",
        items: [
            "Corte preciso y canteado pulido brillante",
            "Saques y perforaciones exactas para herrajes",
            "Proceso de templado bajo normativas de seguridad",
            "Control de calidad previo a la logística de entrega"
        ],
    },
    {
        icon: ToolIcon,
        step: "04",
        title: "Instalación y Entrega",
        subtitle: "Acabado limpio y profesional",
        description:
            "Realizamos el montaje con equipo especializado, herramientas adecuadas y personal altamente capacitado, asegurando una entrega en tiempo y con acabados impecables.",
        items: [
            "Logística segura para el transporte de módulos grandes",
            "Fijación sólida y calafateo profesional",
            "Ajuste fino de bisagras, cerraduras y accesorios",
            "Limpieza y revisión final junto al cliente"
        ],
        button: { href: "/portfolio", text: "Ver proyectos" },
    },
];

// ── Component ──────────────────────────────────────────────────
export default function Process() {
    const [activeIndex, setActiveIndex] = useState(0);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        let frame = 0;
        let last = -1;

        const tick = () => {
            frame = requestAnimationFrame(tick);
            const centerY = window.innerHeight / 3;
            let bestIdx = 0;
            let bestDist = Infinity;
            sentinelRefs.current.forEach((node, i) => {
                if (!node) return;
                const rect = node.getBoundingClientRect();
                const mid = rect.top + rect.height / 2;
                const dist = Math.abs(mid - centerY);
                if (dist < bestDist) { bestDist = dist; bestIdx = i; }
            });
            if (bestIdx !== last) { last = bestIdx; setActiveIndex(bestIdx); }
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <section id="process" className="relative py-24 px-6 bg-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-gradient-to-br from-[#47b6ff]/10 to-transparent rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-[#0255D1]/10 to-transparent rounded-full blur-[80px] pointer-events-none" />

            <div className="mx-auto max-w-5xl relative z-10">
                {/* Header */}
                <span className="inline-block py-1.5 px-4 rounded-full border border-[#0255D1]/15 bg-[#0255D1]/[0.06] text-xs font-semibold uppercase tracking-[0.16em] text-[#0255D1] mb-6 shadow-sm">
                    Nuestro Proceso
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-[#373435] mb-6 leading-[1.1] tracking-[-0.04em]">
                    Del plano a<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0255D1] to-[#47b6ff]">la realidad</span>
                </h2>
                <p className="text-[#373435]/70 text-lg md:text-xl max-w-2xl font-medium">
                    Una metodología clara y precisa para garantizar que cada cristal templado supere tus expectativas.
                </p>

                {/* Timeline entries */}
                <div className="mt-16 space-y-20 md:mt-24 md:space-y-28">
                    {ENTRIES.map((entry, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={index}
                                className="relative flex flex-col gap-6 md:flex-row md:gap-14"
                                ref={(el) => { itemRefs.current[index] = el; }}
                            >
                                {/* Invisible sentinel for proximity detection */}
                                <div
                                    ref={(el) => { sentinelRefs.current[index] = el; }}
                                    aria-hidden
                                    className="absolute -top-20 left-0 h-8 w-8 opacity-0 pointer-events-none"
                                />

                                {/* Sticky left meta column */}
                                <div className="top-24 flex h-min w-56 shrink-0 items-start gap-4 md:sticky">
                                    <div
                                        className="p-3 rounded-xl transition-all duration-500 flex-shrink-0"
                                        style={{
                                            background: isActive ? "rgba(2, 85, 209, 0.08)" : "rgba(55, 52, 53, 0.03)",
                                            border: isActive ? "1px solid rgba(2, 85, 209, 0.2)" : "1px solid rgba(55, 52, 53, 0.08)",
                                        }}
                                    >
                                        <span style={{ color: isActive ? "#0255D1" : "rgba(55, 52, 53, 0.3)", transition: "color 0.5s ease" }}>
                                            <entry.icon className="h-5 w-5" />
                                        </span>
                                    </div>
                                    <div className="pt-1">
                                        <span
                                            className="text-sm font-bold transition-colors duration-500 block tracking-tight"
                                            style={{ color: isActive ? "#0255D1" : "rgba(55, 52, 53, 0.4)" }}
                                        >
                                            {entry.title}
                                        </span>
                                        <span className="text-xs font-medium transition-colors duration-500 mt-1 block leading-tight" style={{ color: isActive ? "rgba(55, 52, 53, 0.6)" : "rgba(55, 52, 53, 0.25)" }}>{entry.subtitle}</span>
                                    </div>
                                </div>

                                {/* Content card */}
                                <article
                                    className="flex flex-col rounded-3xl p-6 md:p-8 flex-1 transition-all duration-500 ease-out"
                                    style={{
                                        background: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.4)",
                                        border: isActive ? "1px solid rgba(2, 85, 209, 0.15)" : "1px solid transparent",
                                        boxShadow: isActive ? "0 25px 50px -12px rgba(12, 76, 120, 0.1), 0 10px 15px -3px rgba(12, 76, 120, 0.05)" : "none",
                                        transform: isActive ? "scale(1)" : "scale(0.98)",
                                    }}
                                >
                                    {/* Step number badge */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <span
                                            className="font-black text-sm tracking-widest transition-colors duration-500"
                                            style={{ color: isActive ? "#0255D1" : "rgba(55, 52, 53, 0.2)" }}
                                        >
                                            PASO {entry.step}
                                        </span>
                                        <div
                                            className="h-[2px] rounded-full flex-1 transition-all duration-500"
                                            style={{ background: isActive ? "rgba(2, 85, 209, 0.15)" : "rgba(55, 52, 53, 0.06)" }}
                                        />
                                    </div>

                                    <h3
                                        className="text-xl md:text-2xl font-black leading-tight tracking-[-0.04em] transition-colors duration-500"
                                        style={{ color: isActive ? "#373435" : "rgba(55, 52, 53, 0.4)" }}
                                    >
                                        {entry.title}
                                    </h3>

                                    <p
                                        className="mt-3 text-base md:text-lg leading-relaxed font-medium transition-all duration-500"
                                        style={{
                                            color: "rgba(55, 52, 53, 0.65)",
                                            WebkitLineClamp: isActive ? "unset" : 2,
                                            display: "-webkit-box",
                                            WebkitBoxOrient: "vertical",
                                            overflow: isActive ? "visible" : "hidden",
                                        }}
                                    >
                                        {entry.description}
                                    </p>

                                    {/* Expandable items */}
                                    <div
                                        className="grid transition-all duration-500 ease-out"
                                        style={{
                                            gridTemplateRows: isActive ? "1fr" : "0fr",
                                            opacity: isActive ? 1 : 0,
                                        }}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="space-y-6 pt-6">
                                                <div
                                                    className="rounded-2xl p-5 md:p-6"
                                                    style={{
                                                        background: "rgba(2, 85, 209, 0.03)",
                                                        border: "1px solid rgba(2, 85, 209, 0.08)",
                                                    }}
                                                >
                                                    <ul className="space-y-3.5">
                                                        {entry.items.map((item, i) => (
                                                            <li key={i} className="flex items-start gap-3 text-[15px] font-medium text-[#373435]/75">
                                                                <div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0255D1]/60 flex-shrink-0 shadow-[0_0_8px_rgba(2,85,209,0.5)]" />
                                                                <span className="leading-relaxed">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {entry.button && (
                                                    <div className="flex justify-end pt-2">
                                                        <Button href={entry.button.href} variant="outline" size="md" className="group text-[#0255D1] border-[#0255D1]/30 hover:bg-[#0255D1]/5">
                                                            {entry.button.text}
                                                            <ArrowUpRightIcon className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                                        </Button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
