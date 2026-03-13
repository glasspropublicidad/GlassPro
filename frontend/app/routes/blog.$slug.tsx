import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router";
import { PortableText } from "@portabletext/react";
import { getPost, urlFor, type Post } from "~/lib/sanity";
import type { Route } from "./+types/blog.$slug";
import { buildBlogPostingSchema, buildSeoMeta, OG_IMAGE_PATHS } from "~/lib/seo";

export function meta({ data }: Route.MetaArgs) {
  const post = data as Post | null;
  if (!post) {
    return buildSeoMeta({
      title: "Post no encontrado",
      description: "El articulo solicitado no esta disponible.",
      path: "/blog",
      noindex: true,
    });
  }

  const path = `/blog/${post.slug.current}`;
  const image = post.mainImage?.asset
    ? urlFor(post.mainImage).width(1200).height(630).fit("crop").url()
    : OG_IMAGE_PATHS.blog;

  return buildSeoMeta({
    title: `${post.title} | Blog`,
    description: post.excerpt || "Articulo del blog de GlassPro.",
    path,
    image,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.publishedAt,
    section: post.category,
    authors: post.author ? [post.author] : [],
    keywords: post.tags,
  });
}

export async function loader({ params }: Route.LoaderArgs) {
  const post = await getPost(params.slug!);
  if (!post) {
    throw new Response("Post no encontrado", { status: 404 });
  }
  return post;
}

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease } },
};

const CATEGORY_LABELS: Record<string, string> = {
  noticias: "Noticias",
  proyectos: "Proyectos",
  tips: "Tips",
  industria: "Industria",
};

function formatDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const portableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-10">
          <img
            src={urlFor(value).width(1200).url()}
            alt={value.alt || ""}
            className="w-full rounded-2xl"
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="mt-3 text-center text-sm text-[#373435]/50">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="mb-4 mt-12 text-2xl font-bold tracking-tight text-[#0C4C78] md:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="mb-3 mt-10 text-xl font-bold tracking-tight text-[#0C4C78] md:text-2xl">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="mb-3 mt-8 text-lg font-bold text-[#0C4C78]">{children}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="mb-5 text-base leading-[1.8] text-[#373435]/80 md:text-lg">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-8 rounded-r-xl border-l-4 border-[#0255D1] bg-[#edf4ff]/50 py-4 pl-6 pr-4 italic text-[#0C4C78]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mb-6 ml-5 list-disc space-y-2 text-[#373435]/80 marker:text-[#0255D1]">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mb-6 ml-5 list-decimal space-y-2 text-[#373435]/80 marker:text-[#0255D1]">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-[#0255D1] underline decoration-[#0255D1]/30 underline-offset-2 transition-colors hover:decoration-[#0255D1]"
      >
        {children}
      </a>
    ),
    strong: ({ children }: any) => (
      <strong className="font-bold text-[#373435]">{children}</strong>
    ),
  },
};

export default function BlogPost() {
  const post = useLoaderData<typeof loader>();
  const schema = buildBlogPostingSchema({
    title: post.title,
    description: post.excerpt || "Articulo del blog de GlassPro.",
    path: `/blog/${post.slug.current}`,
    image: post.mainImage?.asset
      ? urlFor(post.mainImage).width(1200).height(630).fit("crop").url()
      : OG_IMAGE_PATHS.blog,
    publishedTime: post.publishedAt,
    author: post.author,
  });

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative flex min-h-[60vh] w-full items-end overflow-hidden pb-16 pt-28 md:pb-20">
        {post.mainImage?.asset ? (
          <div className="absolute inset-0 -z-20">
            <img
              src={urlFor(post.mainImage).width(1600).height(900).url()}
              alt={post.mainImage.alt || post.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/70 to-[#0a1628]/30" />
          </div>
        ) : (
          <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#0C4C78] via-[#0a3d66] to-[#082d4f]" />
        )}

        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-32 h-[50vh] w-[50vh] rounded-full bg-[#0255D1]/10 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5"
          >
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <Link
                to="/blog"
                className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-bold text-white/80 backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Blog
              </Link>

              {post.category && (
                <span className="rounded-full border border-[#47b6ff]/25 bg-[#47b6ff]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#47b6ff]">
                  {CATEGORY_LABELS[post.category] || post.category}
                </span>
              )}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl font-black leading-[0.95] tracking-tighter text-white md:text-5xl lg:text-6xl"
            >
              {post.title}
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 text-sm text-white/50"
            >
              {post.publishedAt && (
                <time dateTime={post.publishedAt} className="flex items-center gap-1.5">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  {formatDate(post.publishedAt)}
                </time>
              )}
              {post.author && (
                <span className="flex items-center gap-1.5">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  {post.author}
                </span>
              )}
            </motion.div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      <section className="relative w-full bg-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {post.body && (
              <PortableText value={post.body} components={portableTextComponents} />
            )}
          </motion.article>

          {post.tags && post.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16 border-t border-[#0255D1]/10 pt-8"
            >
              <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#373435]/40">
                Etiquetas
              </h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#0255D1]/12 bg-[#edf4ff] px-3 py-1 text-xs font-medium text-[#0255D1]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex justify-center"
          >
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-[#0255D1]/15 bg-[#edf4ff]/60 px-6 py-3 text-sm font-bold text-[#0255D1] transition-all hover:bg-[#edf4ff] hover:shadow-md"
            >
              <svg
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Volver al Blog
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
