export function ServicesCta(props: any) {
  return (
    <section className="w-full py-16 px-6 relative z-10 bg-white">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-[#0255D1] to-[#0C4C78] text-white p-12 text-center shadow-[0_16px_64px_rgba(2,85,209,0.25)]">
        <h2 className="text-3xl font-bold mb-4">¿Te interesa este servicio?</h2>
        <p className="text-lg text-white/80 mb-8">Contáctanos para una cotización personalizada adaptada a tu proyecto.</p>
        <a href="/contacto" className="inline-block px-8 py-4 bg-white text-[#0255D1] hover:bg-white/90 rounded-full font-bold transition-all shadow-lg">
          Solicitar Cotización
        </a>
      </div>
    </section>
  );
}
