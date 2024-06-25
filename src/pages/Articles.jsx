import { PageLayout } from "../components/PageLayout";
import "./Articles.css";

export function Articles() {
  return (
    <PageLayout title="Articles">
      <div>
        <nav className="article-menu">
          <p>
            <a href="/articles/learning-git">Learning Git</a>
          </p>
          <p>
            <a href="/articles/learning-html">Learning HTML</a>
          </p>
          <p>
            <a href="/articles/learning-css">Learning CSS</a>
          </p>
          <p>
            <a href="/articles/learning-javaScript">Learning JavaScript</a>
          </p>
          <p>
            <a href="/articles/coding-puzzles">Coding Puzzles</a>
          </p>
          <p>
            <a href="/articles/Learnings-in-future">Future learnings</a>
          </p>
        </nav>
      </div>
    </PageLayout>
  );
}
