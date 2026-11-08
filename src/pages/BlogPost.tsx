import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import Seo from "../components/Seo";
import { BlogPost as Post, embedVideos, fetchPost, formatDate } from "../lib/blog";

export default function BlogPost() {
  const { slug = "" } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "missing" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    setPost(null);
    window.scrollTo(0, 0);
    fetchPost(slug)
      .then((p) => {
        if (!cancelled) {
          setPost(p);
          setStatus("ready");
        }
      })
      .catch((e) => {
        if (!cancelled) setStatus(e.message === "NOT_FOUND" ? "missing" : "error");
      });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  // Post HTML comes from a third party, so sanitize before injecting.
  const html = useMemo(
    () =>
      post
        ? DOMPurify.sanitize(embedVideos(post.content.html), {
            ADD_TAGS: ["iframe"],
            ADD_ATTR: ["allow", "allowfullscreen", "frameborder"],
          })
        : "",
    [post]
  );

  if (status === "loading") {
    return <p className="max-w-3xl mx-auto px-6 py-16 text-gray-400">Loading…</p>;
  }

  if (status !== "ready" || !post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Seo title="Article not found" description="This article could not be found." path={`/blog/${slug}`} />
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          {status === "missing" ? "Article not found" : "Couldn't load this article"}
        </h1>
        <Link to="/blog" className="text-teal-700 font-semibold">← Back to all articles</Link>
      </div>
    );
  }

  return (
    <article>
      <Seo
        title={post.seo?.title || post.title}
        description={post.seo?.description || post.brief}
        path={`/blog/${post.slug}`}
        image={post.coverImage?.url}
      />
      <header className="bg-gradient-to-br from-teal-50 to-white py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="text-sm text-teal-700 font-semibold">← All articles</Link>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-4 mb-3">{post.title}</h1>
          <p className="text-sm text-gray-500">
            {formatDate(post.publishedAt)} · {post.readTimeInMinutes} min read
          </p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {post.coverImage?.url && (
          <img src={post.coverImage.url} alt="" className="w-full rounded-2xl mb-10" />
        )}
        <div
          className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-teal-700 prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <p className="mt-12 text-xs text-gray-400 border-t pt-4">
          This article is for general education and is not a substitute for medical advice.
        </p>
      </div>
    </article>
  );
}
