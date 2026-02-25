import { Button } from "~/ui/button";

export function PortfolioPreview() {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#373435]">Proyectos Destacados</h2>
            <p className="text-xl text-[#373435]/60">Casos de éxito que demuestran nuestra capacidad.</p>
          </div>
          <a href="/portafolio" className="hidden md:block text-[#0255D1] font-medium hover:text-[#0C4C78] transition-colors">Ver Todo →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group cursor-pointer rounded-3xl overflow-hidden border border-[#0255D1]/10 hover:border-[#0255D1]/30 relative h-80 bg-gradient-to-br from-[#0255D1]/8 to-[#0C4C78]/12 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1C75BC]/20 to-[#0C4C78]/30 group-hover:opacity-80 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-[#1C75BC] text-sm font-bold mb-2 uppercase tracking-wide">Corporativo</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#a8d4ff] transition-colors">Proyecto {i}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Button href="/portafolio" variant="outline" size="md" className="inline-flex">
            Ver Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
