import type { Route } from "./+types/$";
import { NotFound } from "~/components/not-found/not-found";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "404 - Página no encontrada | GlassPro" },
    ];
}

export default function CatchAll() {
    return <NotFound />;
}
