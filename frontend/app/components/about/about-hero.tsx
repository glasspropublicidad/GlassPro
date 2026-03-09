import { motion } from "framer-motion";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease },
  },
};

export function AboutHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20 z-10">
      <motion.div
        className="absolute inset-0 -z-20"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease }}
      >
        <img
          src="/about-imgs/about-hero.avif"
          alt="Interior con cristal templado GlassPro"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/30 via-white/10 to-transparent" />

      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#8fd7ff]/30 to-[#0255D1]/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#0C4C78]/20 to-[#47b6ff]/10 blur-3xl pointer-events-none"
      />

      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 text-center max-w-5xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter text-[#FFFFFF] leading-[0.9]"
          >
            Redefiniendo el<br />
            <span className="bg-gradient-to-r from-[#0C4C78] via-[#0255D1] to-[#47b6ff] bg-clip-text text-transparent pb-2 lg:pb-4 inline-block">
              Cristal Templado
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-[#FFFFFF]/70 max-w-3xl mx-auto leading-relaxed"
          >
            Transformamos la industria gráfica y arquitectónica con innovación absoluta, visión a largo plazo y una maestría que se palpa en cada borde.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
