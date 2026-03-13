const DEFAULT_SITE_URL = "https://glass-pro.mx";

export const OG_IMAGE_PATHS = {
  default: "/og/og-architecture.png",
  home: "/og/og-architecture.png",
  services: "/og/og-sliding-doors.png",
  about: "/og/og-office-interior.png",
  contact: "/og/og-glass-shower.png",
  blog: "/og/og-glass-balcony.png",
} as const;

const DEFAULT_OG_IMAGE_PATH = OG_IMAGE_PATHS.default;

export const SITE_NAME = "GlassPro";
export const SITE_LOCALE = "es_MX";

function trimTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

export function getSiteUrl() {
  const envSiteUrl = import.meta.env.VITE_SITE_URL?.trim();
  return trimTrailingSlash(envSiteUrl || DEFAULT_SITE_URL);
}

export function toAbsoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

type SeoType = "website" | "article";

type SeoMetaInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: SeoType;
  noindex?: boolean;
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  authors?: string[];
};

export function buildSeoMeta({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE_PATH,
  type = "website",
  noindex = false,
  keywords = [],
  publishedTime,
  modifiedTime,
  section,
  authors = [],
}: SeoMetaInput) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = toAbsoluteUrl(path);
  const imageUrl = toAbsoluteUrl(image);
  const imageType = imageUrl.endsWith(".png")
    ? "image/png"
    : imageUrl.endsWith(".jpg") || imageUrl.endsWith(".jpeg")
      ? "image/jpeg"
      : undefined;
  const robots = noindex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  return [
    { title: fullTitle },
    { name: "description", content: description },
    { name: "robots", content: robots },
    { name: "author", content: SITE_NAME },
    { name: "format-detection", content: "telephone=no" },
    ...(keywords.length > 0
      ? [{ name: "keywords", content: keywords.join(", ") }]
      : []),
    { tagName: "link", rel: "canonical", href: canonicalUrl },
    { property: "og:locale", content: SITE_LOCALE },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:type", content: type },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: canonicalUrl },
    { property: "og:image", content: imageUrl },
    { property: "og:image:secure_url", content: imageUrl },
    ...(imageType ? [{ property: "og:image:type", content: imageType }] : []),
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: `${SITE_NAME} - soluciones en vidrio` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:image:alt", content: `${SITE_NAME} - soluciones en vidrio` },
    ...(type === "article" && publishedTime
      ? [{ property: "article:published_time", content: publishedTime }]
      : []),
    ...(type === "article" && modifiedTime
      ? [{ property: "article:modified_time", content: modifiedTime }]
      : []),
    ...(type === "article" && section
      ? [{ property: "article:section", content: section }]
      : []),
    ...authors.map((author) => ({
      property: "article:author",
      content: author,
    })),
  ];
}

export function buildOrganizationSchema() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    name: SITE_NAME,
    url: siteUrl,
    logo: toAbsoluteUrl("/logos/glasspro_logo.svg"),
    image: toAbsoluteUrl(DEFAULT_OG_IMAGE_PATH),
    email: "contacto@glasspro.mx",
    telephone: "+52 477 629 4309",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Cipress 805 N, Col. El Duraznal",
      addressLocality: "Leon",
      addressRegion: "Guanajuato",
      postalCode: "37320",
      addressCountry: "MX",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    areaServed: "Mexico",
  };
}

export function buildWebsiteSchema() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: SITE_NAME,
    inLanguage: "es-MX",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
  };
}

export function buildBlogPostingSchema(input: {
  title: string;
  description: string;
  path: string;
  image?: string;
  publishedTime?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    mainEntityOfPage: toAbsoluteUrl(input.path),
    image: input.image ? [toAbsoluteUrl(input.image)] : undefined,
    datePublished: input.publishedTime,
    dateModified: input.publishedTime,
    author: input.author
      ? {
          "@type": "Person",
          name: input.author,
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: toAbsoluteUrl("/logos/glasspro_logo.svg"),
      },
    },
  };
}
