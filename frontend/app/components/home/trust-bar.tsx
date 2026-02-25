export function TrustBar() {
    const trustItems = [
      { label: "Años de experiencia", value: "+15" },
      { label: "Calidad Certificada", value: "ISO" },
      { label: "Acompañamiento", value: "100%" },
      { label: "Capacidad Máxima", value: "Jumbo" },
    ];
  
    return (
      <section className="w-full px-6 -mt-12 relative z-30">
        <div className="max-w-6xl mx-auto relative group">
          {/* Glow decorative background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
          
          {/* Main Glass Container */}
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.08)]">
            
            {/* Animated Light Reflection Sweep */}
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[2500ms] ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent" />
  
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200/80">
              {trustItems.map((item, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-center p-8 text-center transition-all duration-300 hover:bg-slate-50/50"
                >
                  <span className="text-4xl md:text-5xl font-extralight tracking-tighter text-slate-800 mb-1">
                    {item.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-600 font-semibold leading-tight">
                    {item.label}
                  </span>
                  
                  {/* Subtle bottom accent line for the active item */}
                  <div className="w-0 group-hover:w-8 h-[1px] bg-brand-primary mt-4 transition-all duration-700 opacity-0 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }