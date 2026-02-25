import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("quienes-somos", "routes/quienes-somos.tsx"),
    route("servicios", "routes/servicios.tsx"),
    route("servicios/cristal-templado-jumbo", "routes/servicios.cristal-templado-jumbo.tsx"),
    route("servicios/suministro-orientacion-prospeccion-maquila", "routes/servicios.suministro-orientacion-prospeccion-maquila.tsx"),
    route("servicios/venta-herrajes", "routes/servicios.venta-herrajes.tsx"),
    route("portafolio", "routes/portafolio.tsx"),
    route("portafolio/:slug", "routes/portafolio.$slug.tsx"),
    route("blog", "routes/blog.tsx"),
    route("blog/:slug", "routes/blog.$slug.tsx"),
    route("contacto", "routes/contacto.tsx"),
    route("aviso-de-privacidad", "routes/aviso-de-privacidad.tsx"),
    route("terminos-y-condiciones", "routes/terminos-y-condiciones.tsx"),
    route("*", "routes/$.tsx"),
] satisfies RouteConfig;
