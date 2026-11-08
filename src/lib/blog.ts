import { API_BASE } from "./api";

export interface BlogPostSummary {
  id: string;
  slug: string;
  title: string;
  brief: string;
  publishedAt: string;
  readTimeInMinutes: number;
  coverImage?: { url: string } | null;
  tags?: { name: string; slug: string }[];
}

export interface BlogPost extends BlogPostSummary {
  content: { html: string };
  seo?: { title?: string | null; description?: string | null } | null;
}

export interface BlogPage {
  posts: BlogPostSummary[];
  hasNextPage: boolean;
  endCursor: string | null;
}

const API = `${API_BASE}/api/blog`;

async function get<T>(params: Record<string, string>): Promise<T> {
  const qs = new URLSearchParams(params).toString();
  const res = await fetch(`${API}${qs ? `?${qs}` : ""}`);
  if (res.status === 404) throw new Error("NOT_FOUND");
  if (!res.ok) throw new Error("Could not load posts right now");
  return res.json();
}

export const fetchPosts = (after?: string | null) => get<BlogPage>(after ? { after } : {});
export const fetchPost = (slug: string) => get<BlogPost>({ slug });

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });

/** Hashnode's RSS ships video embeds as plain links; turn YouTube/Vimeo ones into players. */
export function embedVideos(html: string): string {
  return html.replace(
    /<p>\s*<a[^>]*class="embed-card"[^>]*href="([^"]+)"[^>]*>[\s\S]*?<\/a>\s*<\/p>/g,
    (match, rawHref: string) => {
      const href = rawHref.replace(/&amp;/g, "&");
      let src = "";
      try {
        const u = new URL(href);
        const host = u.hostname.replace(/^www\./, "");
        if (host === "youtube.com" && u.searchParams.get("v")) {
          src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(u.searchParams.get("v")!)}`;
        } else if (host === "youtu.be") {
          src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(u.pathname.slice(1))}`;
        } else if (host === "vimeo.com" && /^\/\d+/.test(u.pathname)) {
          src = `https://player.vimeo.com/video/${u.pathname.split("/")[1]}`;
        }
      } catch {
        return match;
      }
      return src
        ? `<div class="aspect-video"><iframe src="${src}" class="w-full h-full rounded-xl" title="Embedded video" allowfullscreen loading="lazy"></iframe></div>`
        : match;
    }
  );
}
