import { Fragment } from "react";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "GlassPro nos ayudó a ejecutar un proyecto de cristal templado jumbo con precisión total. La calidad del acabado elevó por completo el resultado arquitectónico.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Andrea Mendoza",
    role: "Arquitecto",
  },
  {
    text: "Desde la cotización hasta la instalación, el proceso fue claro y rápido. El equipo técnico resolvió cada detalle en obra sin retrasos.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Fernando López",
    role: "Contratista general",
  },
  {
    text: "Su asesoría fue constante durante todo el proyecto. Nos guiaron en especificaciones, herrajes y seguridad para lograr un resultado impecable.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Patricia Ruiz",
    role: "Diseñadora de interiores",
  },
  {
    text: "La integración de cancelería y cristal quedó perfecta. GlassPro cumplió tiempos y entregó una instalación limpia, sólida y elegante.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Carlos Vega",
    role: "Director de proyecto",
  },
  {
    text: "Trabajar con GlassPro mejoró nuestra eficiencia en obra. Su logística y tiempos de entrega nos permitieron cerrar el proyecto antes de lo previsto.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Elena Morales",
    role: "Jefa de obra",
  },
  {
    text: "Superaron nuestras expectativas en calidad y atención. Cada pieza llegó con medidas exactas y una terminación premium.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Laura Sánchez",
    role: "Especialista en fachadas",
  },
  {
    text: "Nuestros clientes quedaron encantados con el resultado final. El cristal templado aportó amplitud, luz y una estética moderna al espacio.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Miguel Torres",
    role: "Desarrollador inmobiliario",
  },
  {
    text: "Entendieron exactamente lo que necesitábamos para un proyecto residencial de alto nivel. Su propuesta técnica fue precisa y funcional.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Ana Gutiérrez",
    role: "Superintendente de obra",
  },
  {
    text: "Con GlassPro logramos un acabado profesional en fachada e interiores. La combinación de diseño, seguridad y durabilidad fue excelente.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Roberto Díaz",
    role: "Ingeniero estructural",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

function TestimonialsColumn(props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="m-0 flex list-none flex-col gap-6 bg-transparent p-0 pb-6"
      >
        {new Array(2).fill(0).map((_, index) => (
          <Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <motion.li
                key={`${index}-${i}`}
                aria-hidden={index === 1 ? "true" : "false"}
                tabIndex={index === 1 ? -1 : 0}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  boxShadow:
                    "0 25px 50px -12px rgba(12, 76, 120, 0.12), 0 10px 10px -5px rgba(12, 76, 120, 0.04), 0 0 0 1px rgba(2, 85, 209, 0.08)",
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                whileFocus={{
                  scale: 1.03,
                  y: -8,
                  boxShadow:
                    "0 25px 50px -12px rgba(12, 76, 120, 0.12), 0 10px 10px -5px rgba(12, 76, 120, 0.04), 0 0 0 1px rgba(2, 85, 209, 0.08)",
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                className="group w-full max-w-xs cursor-default select-none rounded-3xl border border-[#0255D1]/10 bg-white p-10 shadow-[0_8px_30px_rgba(12,76,120,0.07)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0255D1]/20"
              >
                <blockquote className="m-0 p-0">
                  <p className="m-0 leading-relaxed text-[#373435]/75">{text}</p>
                  <footer className="mt-6 flex items-center gap-3">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={`Avatar de ${name}`}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-[#0255D1]/10 transition-all duration-300 ease-in-out group-hover:ring-[#0255D1]/30"
                    />
                    <div className="flex flex-col">
                      <cite className="not-italic leading-5 tracking-tight text-[#373435]">
                        {name}
                      </cite>
                      <span className="mt-0.5 text-sm leading-5 tracking-tight text-[#373435]/55">
                        {role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
            ))}
          </Fragment>
        ))}
      </motion.ul>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden bg-white py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 },
        }}
        className="container mx-auto z-10 px-4"
      >
        <div className="mx-auto mb-16 flex max-w-[540px] flex-col items-center justify-center">
          <div className="flex justify-center">
            <div className="rounded-full border border-[#0255D1]/15 bg-[#0255D1]/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#0255D1] shadow-sm">
              Testimonios
            </div>
          </div>

          <h2
            id="testimonials-heading"
            className="mt-6 text-center text-4xl font-black tracking-[-0.04em] text-[#373435] md:text-5xl leading-[1.1]"
          >
            Lo que nuestros{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0255D1] to-[#47b6ff]">
              clientes dicen
            </span>
          </h2>
          <p className="mt-5 max-w-sm text-center text-lg leading-relaxed text-[#373435]/55 font-medium">
            Profesionales de la construcción y el diseño confían en nuestra
            calidad, precisión y acompañamiento.
          </p>
        </div>

        <div
          className="mt-10 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
          role="region"
          aria-label="Testimonios en desplazamiento"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </motion.div>
    </section>
  );
}
