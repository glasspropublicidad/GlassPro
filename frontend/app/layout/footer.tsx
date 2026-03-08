import { Link } from "react-router";

const QUICK_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Quienes Somos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

const SERVICE_LINKS = [
  { href: "/servicios", label: "Venta de Vidrio y Cristal" },
  { href: "/servicios", label: "Vidrio Templado" },
  { href: "/servicios", label: "Maquila de Vidrio" },
];

const LEGAL_LINKS = [
  { href: "/aviso-de-privacidad", label: "Aviso de Privacidad" },
  { href: "/terminos-y-condiciones", label: "Terminos y Condiciones" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full overflow-hidden border-t border-[#0255D1]/15 bg-gradient-to-br from-[#0C4C78] via-[#0E568A] to-[#0255D1] text-white">
      <div className="relative">
        <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#7ab6ff]/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="lg:pr-6">
            <Link to="/" className="inline-flex items-center">
              <img
                src="/logos/glasspro_logo.svg"
                alt="GlassPro"
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
              Innovation Glass Solutions | Visionary Glass Solutions.
              Fabricacion y servicio especializado para proyectos residenciales y comerciales.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
              Quick Links
            </h3>
            <nav className="mt-4 flex flex-col gap-3 text-sm text-white/80">
              {QUICK_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  to={href}
                  className="w-fit transition-colors hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
              Servicios
            </h3>
            <nav className="mt-4 flex flex-col gap-3 text-sm text-white/80">
              {SERVICE_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  to={href}
                  className="w-fit transition-colors hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
              Legal
            </h3>
            <nav className="mt-4 flex flex-col gap-3 text-sm text-white/80">
              {LEGAL_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  to={href}
                  className="w-fit transition-colors hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <Link
              to="/contacto"
              className="mt-6 inline-flex rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#0C4C78]"
            >
              Solicitar Cotizacion
            </Link>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-white/70 md:flex-row md:items-center md:justify-between">
            <p>GlassPro (c) {year}. Todos los derechos reservados.</p>
            <p>Diseno y fabricacion de soluciones en vidrio.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

