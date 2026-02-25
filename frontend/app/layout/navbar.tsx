import React, { useEffect, useRef, useState, useId } from 'react';
import { Link } from 'react-router';
// ---------------------------------------------------------------------------
// GlassSurface — colorless liquid-glass effect (displacement-map approach)
// ---------------------------------------------------------------------------

interface GlassSurfaceProps {
    children?: React.ReactNode;
    borderRadius?: number;
    borderWidth?: number;
    brightness?: number;
    opacity?: number;
    blur?: number;
    displace?: number;
    backgroundOpacity?: number;
    saturation?: number;
    distortionScale?: number;
    redOffset?: number;
    greenOffset?: number;
    blueOffset?: number;
    xChannel?: 'R' | 'G' | 'B';
    yChannel?: 'R' | 'G' | 'B';
    mixBlendMode?: string;
    className?: string;
    style?: React.CSSProperties;
}



const GlassSurface: React.FC<GlassSurfaceProps> = ({
    children,
    borderRadius = 24,
    borderWidth = 0.07,
    brightness = 55,
    opacity = 0.92,
    blur = 10,
    displace = 1,
    backgroundOpacity = 0,
    saturation = 1,
    distortionScale = -180,
    redOffset = 0,
    greenOffset = 10,
    blueOffset = 20,
    xChannel = 'R',
    yChannel = 'G',
    mixBlendMode = 'difference',
    className = '',
    style = {},
}) => {
    const uid = useId().replace(/:/g, '-');
    const filterId = `gf-${uid}`;
    const redGradId = `rg-${uid}`;
    const blueGradId = `bg-${uid}`;

    const [svgSupported, setSvgSupported] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const feImageRef = useRef<SVGFEImageElement>(null);
    const redRef = useRef<SVGFEDisplacementMapElement>(null);
    const greenRef = useRef<SVGFEDisplacementMapElement>(null);
    const blueRef = useRef<SVGFEDisplacementMapElement>(null);
    const gaussianRef = useRef<SVGFEGaussianBlurElement>(null);



    const buildMap = () => {
        const rect = containerRef.current?.getBoundingClientRect();
        const w = rect?.width || 800;
        const h = rect?.height || 60;
        const edge = Math.min(w, h) * (borderWidth * 0.5);

        const svg = `
      <svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${w}" height="${h}" fill="black"/>
        <rect x="0" y="0" width="${w}" height="${h}" rx="${borderRadius}" fill="url(#${redGradId})"/>
        <rect x="0" y="0" width="${w}" height="${h}" rx="${borderRadius}" fill="url(#${blueGradId})" style="mix-blend-mode:${mixBlendMode}"/>
        <rect x="${edge}" y="${edge}" width="${w - edge * 2}" height="${h - edge * 2}" rx="${borderRadius}"
              fill="hsl(0 0% ${brightness}% / ${opacity})" style="filter:blur(${blur}px)"/>
      </svg>`;

        return `data:image/svg+xml,${encodeURIComponent(svg)}`;
    };

    const applyMap = () => {
        feImageRef.current?.setAttribute('href', buildMap());
        for (const { ref, offset } of [
            { ref: redRef, offset: redOffset },
            { ref: greenRef, offset: greenOffset },
            { ref: blueRef, offset: blueOffset },
        ]) {
            if (ref.current) {
                ref.current.setAttribute('scale', (distortionScale + offset).toString());
                ref.current.setAttribute('xChannelSelector', xChannel);
                ref.current.setAttribute('yChannelSelector', yChannel);
            }
        }
        gaussianRef.current?.setAttribute('stdDeviation', displace.toString());
    };

    // Detect support once
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
        const isFirefox = /Firefox/.test(navigator.userAgent);
        if (!isSafari && !isFirefox) {
            const div = document.createElement('div');
            div.style.backdropFilter = `url(#${filterId})`;
            setSvgSupported(div.style.backdropFilter !== '');
        }
    }, [filterId]);

    // Re-apply whenever props change
    useEffect(() => { applyMap(); }, [
        borderRadius, borderWidth, brightness, opacity, blur, displace,
        distortionScale, redOffset, greenOffset, blueOffset, xChannel, yChannel, mixBlendMode,
    ]);

    // Re-apply on resize
    useEffect(() => {
        if (!containerRef.current) return;
        const ro = new ResizeObserver(() => setTimeout(applyMap, 0));
        ro.observe(containerRef.current);
        return () => ro.disconnect();
    }, []);

    const supportsBackdrop = typeof window !== 'undefined' && CSS.supports('backdrop-filter', 'blur(10px)');

    const containerStyle = (): React.CSSProperties => {
        const base: React.CSSProperties = {
            ...style,
            borderRadius: `${borderRadius}px`,
        };

        if (svgSupported) {
            return {
                ...base,
                background: `hsl(0 0% 100% / ${backgroundOpacity})`,
                backdropFilter: `url(#${filterId}) saturate(${saturation})`,
                boxShadow: `0 0 2px 1px rgba(0,0,0,0.10) inset, 0 0 10px 4px rgba(0,0,0,0.05) inset,
             0 4px 16px rgba(17,17,26,0.08), 0 8px 32px rgba(17,17,26,0.06)`,
            };
        }

        // Fallback: simple frosted glass
        if (supportsBackdrop) {
            return {
                ...base,
                background: 'rgba(255,255,255,0.25)',
                backdropFilter: 'blur(12px) saturate(1.8)',
                WebkitBackdropFilter: 'blur(12px) saturate(1.8)',
                border: '1px solid rgba(255,255,255,0.25)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), 0 4px 24px rgba(17,17,26,0.08)',
            };
        }

        return {
            ...base,
            background: 'rgba(255,255,255,0.4)',
            border: '1px solid rgba(255,255,255,0.2)',
        };
    };

    return (
        <div
            ref={containerRef}
            className={`relative flex items-center justify-center overflow-hidden transition-opacity duration-[260ms] ease-out ${className}`}
            style={containerStyle()}
        >
            {/* Hidden SVG filter */}
            <svg
                className="w-full h-full pointer-events-none absolute inset-0 opacity-0 -z-10"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id={filterId} colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
                        <feImage ref={feImageRef} x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" />

                        <feDisplacementMap ref={redRef} in="SourceGraphic" in2="map" result="dispRed" />
                        <feColorMatrix in="dispRed" type="matrix"
                            values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="red" />

                        <feDisplacementMap ref={greenRef} in="SourceGraphic" in2="map" result="dispGreen" />
                        <feColorMatrix in="dispGreen" type="matrix"
                            values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="green" />

                        <feDisplacementMap ref={blueRef} in="SourceGraphic" in2="map" result="dispBlue" />
                        <feColorMatrix in="dispBlue" type="matrix"
                            values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="blue" />

                        <feBlend in="red" in2="green" mode="screen" result="rg" />
                        <feBlend in="rg" in2="blue" mode="screen" result="output" />
                        <feGaussianBlur ref={gaussianRef} in="output" stdDeviation="0.7" />
                    </filter>
                </defs>
            </svg>

            {/* Content slot */}
            <div className="w-full h-full rounded-[inherit] relative z-10">
                {children}
            </div>
        </div>
    );
};

// ---------------------------------------------------------------------------
// Navbar
// ---------------------------------------------------------------------------

const NAV_LINKS = [
    { href: '/', label: 'Inicio' },
    { href: '/quienes-somos', label: 'Quiénes Somos' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/portafolio', label: 'Portafolio' },
    { href: '/contacto', label: 'Contacto' },
];

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const mobileMenuId = useId();

    useEffect(() => {
        if (!mobileOpen) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setMobileOpen(false);
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [mobileOpen]);

    return (
        <>
            <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
                {/* ─── Main bar ─── */}
                <GlassSurface
                    borderRadius={mobileOpen ? 24 : 210}
                    borderWidth={0.01}
                    brightness={95}
                    opacity={0.82}
                    blur={14}
                    distortionScale={-80}
                    redOffset={0}
                    greenOffset={0}
                    blueOffset={0}
                    backgroundOpacity={0.6}
                    saturation={1.2}
                    mixBlendMode="normal"
                    className="w-full transition-[border-radius] duration-300"
                    style={{
                        boxShadow: '0 4px 24px rgba(2,85,209,0.10), 0 1px 0 rgba(2,85,209,0.12) inset',
                        border: '1px solid rgba(2,85,209,0.13)',
                    }}
                >
                    <div className="w-full px-6 md:px-8 flex items-center">
                        {/* Logo */}
                        <Link to="/" className="flex items-center shrink-0">
                            <img src="/logos/glasspro_logo.svg" alt="GlassPro" className="h-20 md:h-24 w-auto drop-shadow-sm" />
                        </Link>

                        {/* Desktop nav */}
                        <nav className="hidden md:flex ml-auto gap-6 font-semibold text-[#373435]">
                            {NAV_LINKS.map(({ href, label }) => (
                                <Link key={href} to={href} className="hover:text-[#0255D1] transition-colors">
                                    {label}
                                </Link>
                            ))}
                        </nav>

                        {/* Hamburger (mobile only) */}
                        <button
                            type="button"
                            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
                            aria-expanded={mobileOpen}
                            aria-controls={mobileMenuId}
                            aria-haspopup="dialog"
                            onClick={() => setMobileOpen(o => !o)}
                            className="md:hidden ml-auto flex flex-col justify-center items-center w-10 h-10 gap-[5px] shrink-0 rounded-xl transition-colors hover:bg-blue-50/60"
                        >
                            <span
                                className="block w-6 h-[2px] bg-[#373435] rounded-full origin-center transition-all duration-300"
                                style={mobileOpen ? { transform: 'translateY(7px) rotate(45deg)' } : {}}
                            />
                            <span
                                className="block w-6 h-[2px] bg-[#373435] rounded-full transition-all duration-300"
                                style={mobileOpen ? { opacity: 0, transform: 'scaleX(0)' } : {}}
                            />
                            <span
                                className="block w-6 h-[2px] bg-[#373435] rounded-full origin-center transition-all duration-300"
                                style={mobileOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}}
                            />
                        </button>
                    </div>
                </GlassSurface>
            </header>

            {/* Mobile sidebar */}
            <div
                aria-hidden={!mobileOpen}
                className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <aside
                    id={mobileMenuId}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menú de navegación"
                    className={`absolute inset-0 h-dvh w-full overflow-y-auto bg-gradient-to-br from-white/95 via-[#edf4ff]/95 to-[#dbeafe]/95 backdrop-blur-2xl transition-transform duration-300 ease-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#3b82f6]/25 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[#2563eb]/20 blur-3xl" />
                    <div className="flex min-h-dvh w-full flex-col p-6">
                        <div className="flex items-center justify-between">
                            <img src="/logos/glasspro_logo.svg" alt="GlassPro" className="h-16 w-auto" />
                            <button
                                type="button"
                                aria-label="Cerrar menú"
                                onClick={() => setMobileOpen(false)}
                                className="w-10 h-10 rounded-xl text-[#373435] hover:bg-blue-50/70 transition-colors"
                            >
                                ✕
                            </button>
                        </div>

                        <nav className="mt-8 flex flex-col gap-2 font-semibold text-[#373435]">
                            {NAV_LINKS.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    to={href}
                                    onClick={() => setMobileOpen(false)}
                                    className="py-4 px-4 rounded-xl hover:bg-blue-50/70 hover:text-[#0255D1] transition-colors"
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </aside>
            </div>
        </>
    );
}


