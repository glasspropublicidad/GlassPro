import { Button } from "~/ui/button";

export function ContactCTA() {
  return (
    <section className="w-full py-20 px-6 relative overflow-hidden bg-white">
      {/* Blue radial decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#0255D1]/10 blur-3xl"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10 text-center rounded-3xl bg-gradient-to-br from-[#0255D1] to-[#0C4C78] text-white p-16 shadow-[0_16px_64px_rgba(2,85,209,0.30)]">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">¿Listo para innovar?</h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Trae tu proyecto a GlassPro y experimenta el nivel de servicio y calidad que nos caracteriza como líderes en vidrio templado.
        </p>
        <Button href="/contacto" variant="light" className="text-lg shadow-xl">
          Contáctanos Ahora
        </Button>
      </div>
    </section>
  );
}
