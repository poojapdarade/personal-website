import { Navigation } from "../components/Navigation";
import { PageLayout } from "../components/PageLayout";
import "./Articles.css";

export function Articles() {
  return (
    <PageLayout title="Articles">
      <div>
        <nav className="article-menu">
          <ul>
            <li>
              <a href="/articles/learning-git.html">Learning Git</a>
            </li>
            <li>
              <a href="/articles/learning-html.html">Learning HTML</a>
            </li>
            <li>
              <a href="/articles/learning-css.html">Learning CSS</a>
            </li>
            <li>
              <a href="/articles/java-script.html">Learning JavaScript</a>
            </li>
            <li>
              <a href="/articles/coding-puzzles/index.html">Coding Puzzles</a>
            </li>
          </ul>
        </nav>
      </div>
    </PageLayout>
  );
}
