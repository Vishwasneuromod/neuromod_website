import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { BlogPostSummary, fetchPosts, formatDate } from "../lib/blog";

export default function Blog() {
  const [posts, setPosts] = useState<BlogPostSummary[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async (after?: string | null) => {
    setLoading(true);
    setError("");
    try {
      const page = await fetchPosts(after);
      setPosts((prev) => (after ? [...prev, ...page.posts] : page.posts));
      setCursor(page.endCursor);
      setHasMore(page.hasNextPage);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div>
      <Seo
        title="Blog"
        description="Patient education articles on movement disorders, epilepsy, spasticity and chronic pain by Dr. Vishwas H V, neurosurgeon in Bengaluru."
        path="/blog"
      />
      <section className="bg-gradient-to-br from-teal-50 to-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-2">Blog</p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Articles &amp; Patient Education</h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            Plain-language writing on neurosurgery and neuromodulation.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {error && (
            <div role="alert" className="mb-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-gray-700">
              {error}{" "}
              <button onClick={() => load(cursor)} className="font-semibold text-teal-700 underline">
                Try again
              </button>
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <p className="text-gray-500">No articles published yet. Please check back soon.</p>
          )}

          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((p) => (
              <Link
                key={p.id}
                to={`/blog/${p.slug}`}
                className="group block rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {p.coverImage?.url && (
                  <img
                    src={p.coverImage.url}
                    alt=""
                    loading="lazy"
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <p className="text-xs text-gray-400 mb-2">
                    {formatDate(p.publishedAt)} · {p.readTimeInMinutes} min read
                  </p>
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-teal-700 mb-2">{p.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{p.brief}</p>
                </div>
              </Link>
            ))}
          </div>

          {loading && <p className="text-gray-400 mt-8">Loading…</p>}

          {hasMore && !loading && (
            <div className="mt-10 text-center">
              <button
                onClick={() => load(cursor)}
                className="border border-teal-600 text-teal-600 font-semibold px-7 py-3 rounded-full hover:bg-teal-50 transition-colors"
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
