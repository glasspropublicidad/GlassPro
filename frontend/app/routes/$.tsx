import type { Route } from "./+types/$";
import { NotFound } from "~/components/not-found/not-found";
import { buildSeoMeta, OG_IMAGE_PATHS } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return buildSeoMeta({
    title: "404 - Página no encontrada",
    description: "La página solicitada no existe o fue movida.",
    path: "/404",
    image: OG_IMAGE_PATHS.default,
    noindex: true,
  });
}

export default function CatchAll() {
  return <NotFound />;
}
