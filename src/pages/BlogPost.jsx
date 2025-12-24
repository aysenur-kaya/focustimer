import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import { useLanguage } from "../context/LanguageContext";
import "../components/blog/blog.css";

export default function BlogPost() {
  const { slug } = useParams();
  const { language } = useLanguage();

  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="blog-not-found">
        {language === "tr"
          ? "Yazı bulunamadı."
          : "Article not found."}
      </div>
    );
  }

  return (
    <article className="blog-post">
      <header className="blog-post-header">
        <h1>{post.title[language]}</h1>

        <div className="blog-post-meta">
          <span>{post.readTime}</span>
          <span>{post.category}</span>
          <span>{post.date}</span>
        </div>
      </header>

      <section
        className="blog-post-content"
        dangerouslySetInnerHTML={{
          __html: post.content[language],
        }}
      />
    </article>
  );
}
