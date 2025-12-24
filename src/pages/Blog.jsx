import { blogPosts } from "../data/blogPosts";
import { useLanguage } from "../context/LanguageContext";
import BlogList from "../components/blog/BlogList";
import "../components/blog/blog.css";

export default function Blog() {
  const { language } = useLanguage();

  return (
    <section className="blog-page">
      <header className="blog-header">
        <h1>
          {language === "tr"
            ? "Blog & Akademik Yazılar"
            : "Blog & Academic Articles"}
        </h1>

        <p>
          {language === "tr"
            ? "Odaklanma, zaman yönetimi ve verimli çalışma üzerine derinlemesine içerikler."
            : "In-depth articles on focus, time management, and productive work."}
        </p>
      </header>

      <BlogList posts={blogPosts} />
    </section>
  );
}
