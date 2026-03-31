import "./Blog.css";

const posts = [
  {
    id: 1,
    date: "Mar 15, 2026",
    category: "Design",
    title: "The Art of Minimal UI: Less is Always More",
    excerpt:
      "Minimalism in interface design isn't about stripping things away — it's about keeping only what matters. Here's how to achieve that balance.",
    readTime: "5 min read",
  },
  {
    id: 2,
    date: "Feb 28, 2026",
    category: "Development",
    title: "Building Accessible React Components From Scratch",
    excerpt:
      "Accessibility is not a feature — it's a requirement. Let's walk through building truly accessible components that work for everyone.",
    readTime: "8 min read",
  },
  {
    id: 3,
    date: "Jan 10, 2026",
    category: "Career",
    title: "Lessons Learned After 8+ Years in the Industry",
    excerpt:
      "From freelancing to agency life, here are the most valuable lessons I've picked up along the way as a designer and developer.",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <section className="blog" id="blog">
      <p className="section-label">// blog</p>
      <h2 className="section-title">
        Latest <span>Articles</span>
      </h2>
      <div className="blog-grid">
        {posts.map((post) => (
          <article className="blog-card" key={post.id}>
            <div className="blog-card-meta">
              <span className="blog-category">{post.category}</span>
              <span className="blog-date">{post.date}</span>
            </div>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            <div className="blog-footer">
              <span className="blog-read-time">{post.readTime}</span>
              <a href="#blog" className="blog-read-more">
                Read more →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
