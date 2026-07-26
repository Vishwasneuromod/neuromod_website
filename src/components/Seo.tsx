import { Helmet } from "react-helmet-async";

export const SITE_URL = "https://neuromod.in";
const SITE_NAME = "NEUROMOD — Dr. Vishwas H V";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  /** Only pass this when a page needs an OG/Twitter image other than the site default already set in public/index.html. */
  image?: string;
}

export default function Seo({ title, description, path, image }: SeoProps) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* og:type / og:site_name / og:image / twitter:card / twitter:image are page-independent
          and already set in public/index.html — only override image here if this page needs one. */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}
