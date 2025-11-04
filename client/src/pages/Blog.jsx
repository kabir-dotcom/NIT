import { useEffect, useState } from 'react';
import { fetchBlogPosts } from '../services/api';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const results = await fetchBlogPosts();
        setPosts(results);
      } catch (err) {
        setError('Unable to reach the content service. Displaying highlights instead.');
        setPosts([
          {
            id: 1,
            title: 'Detox without Backlash',
            excerpt: 'Gentle binders, lymph movement, and mitochondrial support keep your body on board.',
          },
          {
            id: 2,
            title: 'Rebuilding Immune Tolerance',
            excerpt: 'Stacked micro-dose antigen therapy gradually teaches your immune system to stand down.',
          },
          {
            id: 3,
            title: 'Sleep as Therapy',
            excerpt: 'Deep sleep is when immune recalibration occurs—here is how we protect it.',
          },
        ]);
        console.warn(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-slate-900">Blog & Research</h1>
        <p className="mt-4 text-sm text-slate-600">
          Stay current on detox strategies, immune modulation, and resilience coaching with insights from our clinical
          team and partner researchers.
        </p>
        {loading ? (
          <p className="mt-10 text-sm text-slate-500">Loading articles...</p>
        ) : (
          <>
            {error && <p className="mt-8 rounded-lg bg-amber-50 p-4 text-sm text-amber-700">{error}</p>}
            <ul className="mt-10 space-y-6">
              {posts.map(post => (
                <li key={post.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-slate-900">{post.title}</h2>
                  <p className="mt-3 text-sm text-slate-600">{post.excerpt}</p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-primary-500">Read more</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default Blog;
