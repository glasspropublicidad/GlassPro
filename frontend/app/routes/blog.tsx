import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router";
import { getPosts, urlFor, type Post } from "~/lib/sanity";

export function meta() {
  return [
    { title: "Blog | GlassPro" },
    {
      name: "description",
      content:
        "Noticias, tips y proyectos del mundo del cristal templado — Blog GlassPro.",
    },
  ];
}

export async function loader() {
  const posts = await getPosts();
  return { posts };
}

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
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

function BlogCard({ post, index }: { post: Post; index: number }) {
  const isFeatured = index === 0;

  return (
    <motion.article
      variants={cardVariant}
      className={`group relative ${isFeatured ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      <Link
        to={`/blog/${post.slug.current}`}
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#0255D1]/8 bg-white shadow-sm transition-all duration-300 hover:border-[#0255D1]/20 hover:shadow-lg hover:shadow-[#0255D1]/5"
      >
        <div
          className={`relative w-full overflow-hidden ${isFeatured ? "aspect-[16/9]" : "aspect-[16/10]"}`}
        >
          {post.mainImage ? (
            <img
              src={urlFor(post.mainImage).width(800).height(500).url()}
              alt={post.mainImage.alt || post.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading={index < 3 ? "eager" : "lazy"}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#edf4ff] to-[#dbeafe]">
              <svg
                className="h-16 w-16 text-[#0255D1]/20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
          )}

          {post.category && (
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0255D1] backdrop-blur-sm">
              {CATEGORY_LABELS[post.category] || post.category}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3 flex items-center gap-3 text-xs text-[#373435]/50">
            {post.publishedAt && (
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            )}
            {post.author && (
              <>
                <span className="h-1 w-1 rounded-full bg-[#373435]/30" />
                <span>{post.author}</span>
              </>
            )}
          </div>

          <h3
            className={`font-bold leading-tight tracking-tight text-[#0C4C78] transition-colors group-hover:text-[#0255D1] ${isFeatured ? "text-2xl md:text-3xl" : "text-lg"}`}
          >
            {post.title}
          </h3>

          {post.excerpt && (
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#373435]/60">
              {post.excerpt}
            </p>
          )}

          <div className="mt-auto flex items-center gap-2 pt-5 text-sm font-bold text-[#0255D1] transition-all duration-300 group-hover:gap-3">
            Leer más
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-lg py-24 text-center"
    >
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#edf4ff]">
        <svg
          className="h-10 w-10 text-[#0255D1]/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-[#0C4C78]">Próximamente</h3>
      <p className="mt-2 text-[#373435]/50">
        Estamos preparando contenido increíble. ¡Vuelve pronto!
      </p>
    </motion.div>
  );
}

export default function Blog() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative flex min-h-[50vh] w-full items-end overflow-hidden bg-gradient-to-br from-[#0C4C78] via-[#0a3d66] to-[#082d4f] pt-32 pb-16 md:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-32 h-[60vh] w-[60vh] rounded-full bg-[#0255D1]/15 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-[40vh] w-[40vh] rounded-full bg-[#47b6ff]/10 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeUp}
              className="mb-4 inline-block rounded-full border border-[#47b6ff]/25 bg-[#47b6ff]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-[#47b6ff]"
            >
              Blog
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-black leading-[0.95] tracking-tighter text-white md:text-6xl lg:text-7xl"
            >
              Noticias &{" "}
              <span className="bg-gradient-to-r from-[#8fd7ff] via-[#47b6ff] to-[#0255D1] bg-clip-text text-transparent">
                Artículos
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-lg leading-relaxed text-white/60"
            >
              Todo sobre cristal templado: tendencias, proyectos destacados, tips
              técnicos y novedades de la industria.
            </motion.p>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Posts Grid */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          {posts.length === 0 ? (
            <EmptyState />
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {posts.map((post, i) => (
                <BlogCard key={post._id} post={post} index={i} />
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
