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
              <a href="/articles/learning-git">Learning Git</a>
            </li>
            <li>
              <a href="/articles/learning-html">Learning HTML</a>
            </li>
            <li>
              <a href="/articles/learning-css">Learning CSS</a>
            </li>
            <li>
              <a href="/articles/java-script">Learning JavaScript</a>
            </li>
            <li>
              <a href="/articles/coding-puzzles/index">Coding Puzzles</a>
            </li>
          </ul>
        </nav>
      </div>
    </PageLayout>
  );
}
