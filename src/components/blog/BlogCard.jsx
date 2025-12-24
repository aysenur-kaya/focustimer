import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { useState } from "react";

export default function BlogCard({ post }) {
  const { language } = useLanguage();
  const storageKey = `like-${post.slug}`;

  // ✅ İlk render'da localStorage'dan başlat
  const [likes, setLikes] = useState(() => {
    const stored = localStorage.getItem(storageKey);
    return stored ? Number(stored) : 0;
  });

  const [liked, setLiked] = useState(() => {
    return localStorage.getItem(`${storageKey}-liked`) === "true";
  });

  const [particles, setParticles] = useState([]);

  const handleLike = () => {
    if (liked) return;

    const newLikes = likes + 1;
    setLikes(newLikes);
    setLiked(true);

    localStorage.setItem(storageKey, newLikes);
    localStorage.setItem(`${storageKey}-liked`, "true");

    // ✨ particle efekt
    const newParticles = Array.from({ length: 6 }).map((_, i) => ({
      id: i + Math.random(),
      x: Math.random() * 40 - 20,
      y: Math.random() * 40 - 20,
    }));

    setParticles(newParticles);
    setTimeout(() => setParticles([]), 600);
  };

  return (
    <article className="blog-card">
      <h2>{post.title[language]}</h2>

      <p className="blog-description">
        {post.description[language]}
      </p>

      <div className="blog-meta">
        <span>{post.readTime}</span>
        <span>{post.category}</span>
      </div>

      <Link to={`/blog/${post.slug}`} className="blog-read-more">
        {language === "tr" ? "Devamını Oku" : "Read More"}
      </Link>


    <div className="blog-like-wrapper">
  <button
    className={`blog-like ${liked ? "liked" : ""}`}
    onClick={handleLike}
  >
    <span className="heart-icon">❤️</span>
    <span className="like-count">{likes}</span>

    {particles.map(p => (
      <span
        key={p.id}
        className="like-particle"
        style={{
          transform: `translate(${p.x}px, ${p.y}px)`
        }}
      >
        ✨
      </span>
    ))}
  </button>
</div>


    </article>
  );
}
