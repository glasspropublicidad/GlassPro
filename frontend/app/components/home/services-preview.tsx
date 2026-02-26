import { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { Button } from "~/ui/button";

const services = [
  {
    step: "01",
    title: "Cristal Templado Jumbo",
    desc: "Procesamos cristal en grandes dimensiones con precision milimetrica.",
    link: "/servicios/cristal-templado-jumbo",
    image: "/home-imgs/glass_premium_pic.avif",
  },
  {
    step: "02",
    title: "Orientacion y Maquila",
    desc: "Acompanamiento integral, desde la prospeccion hasta la entrega final del proyecto.",
    link: "/servicios/suministro-orientacion-prospeccion-maquila",
    image: "/home-imgs/glass_premium_pic.avif",
  },
  {
    step: "03",
    title: "Venta de Herrajes",
    desc: "Amplio catalogo de herrajes de alta calidad para mayoreo y menudeo.",
    link: "/servicios/venta-herrajes",
    image: "/home-imgs/glass_premium_pic.avif",
  },
];

function StepSlide({
  service,
  index,
  total,
  scrollYProgress,
}: {
  service: (typeof services)[number];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  // Calculate the animation phases
  // We have (total - 1) transitions to make
  const transitions = total - 1;
  
  // Entry phase (sliding in from bottom)
  // Only for cards > 0
  const enterStart = (index - 1) / transitions;
  const enterEnd = index / transitions;
  
  // Exit phase (being covered by next card)
  // Only for cards < total - 1
  const coverStart = index / transitions;
  const coverEnd = (index + 1) / transitions;

  // Y position
  const y = useTransform(
    scrollYProgress,
    index === 0 
      ? [0, 1] // First card stays at top
      : [enterStart, enterEnd], // Others slide in
    index === 0 
      ? ["0%", "0%"] 
      : ["100%", "0%"]
  );

  // Scale effect
  const scale = useTransform(
    scrollYProgress,
    // If it's the last card, it doesn't scale down.
    // Otherwise, it scales down as the next one comes in.
    index === total - 1 
      ? [0, 1] 
      : [coverStart, coverEnd],
    index === total - 1 
      ? [1, 1] 
      : [1, 0.95]
  );
  
  // Opacity - fade in slightly as it enters to avoid harsh lines?
  // Or just keep it 1. Let's keep it simple first.
  const opacity = useTransform(
    scrollYProgress,
    index === 0 ? [0, 0] : [enterStart, enterStart + 0.1], 
    index === 0 ? [1, 1] : [0, 1]
  );
  // Actually, for card 0 opacity is always 1.
  // For others, maybe just 1 is fine if they slide in.
  // Let's stick to opacity 1 for all, but maybe handle the very first frame.

  return (
    <motion.article
      style={{ 
        y, 
        scale, 
        zIndex: index,
        opacity: index === 0 ? 1 : useTransform(scrollYProgress, [enterStart, enterStart + 0.05], [0, 1])
      }}
      className="absolute inset-0 flex items-center bg-white/38 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2rem] border border-white/45 shadow-lg overflow-hidden"
    >
      <div className="flex h-full w-full flex-col md:flex-row">
        <div className="flex flex-1 flex-col justify-center px-6 py-8 md:p-10">
          <p className="text-4xl font-black leading-none tracking-[-0.04em] text-[#373435] md:text-7xl">{service.step}</p>
          <h3 className="mt-2 text-xl font-black leading-tight tracking-[-0.04em] text-[#373435] md:mt-4 md:text-4xl">{service.title}</h3>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-[#373435]/95 md:mt-5 md:text-2xl">{service.desc}</p>
          <Button
            href={service.link}
            variant="outline"
            size="md"
            className="mt-6 w-fit bg-white text-[#373435] hover:border-[#47b6ff]/50 hover:bg-white md:mt-10"
          >
            Ver detalles
            <span className="text-base">&rarr;</span>
          </Button>
        </div>
        <div className="relative hidden h-full w-1/3 md:block">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
        </div>
      </div>
    </motion.article>
  );
}

export function ServicesPreview() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={sectionRef} className="relative h-[320vh] w-full bg-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/home-imgs/services-preview.avif"
            alt="Fondo de vidrio"
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-white/30" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white via-white/50 to-transparent md:h-32" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white via-white/50 to-transparent md:h-56" />
        </div>

        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-4 py-8 md:px-6 md:py-14">
          <div className="mb-8 text-center md:mb-12">
            <h2 className="text-3xl font-black leading-[0.9] tracking-[-0.04em] text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.42)] md:text-5xl">
              Nuestros <span className="bg-gradient-to-r from-[#8fd7ff] via-[#47b6ff] to-[#0255D1] bg-clip-text text-transparent">Servicios</span>
            </h2>
          </div>
          
          <div className="relative w-full">
            <div className="relative min-h-[50vh] md:min-h-[60vh]">
              {services.map((service, index) => (
                <StepSlide
                  key={service.title}
                  service={service}
                  index={index}
                  total={services.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
