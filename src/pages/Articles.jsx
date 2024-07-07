import { PageLayout } from "../components/PageLayout";
import "./Articles.css";

export function Articles() {
  return (
    <PageLayout title="Articles">
      <div>
        <nav className="article-menu">
          <p>
            <a href="/articles/learning-git">Understanding Git</a>
          </p>
          <p>
            <a href="/articles/learning-html">Gaining Competency in HTML</a>
          </p>
          <p>
            <a href="/articles/learning-css">Developing Skills in CSS</a>
          </p>
          <p>
            <a href="/articles/learning-javaScript">
              Building Proficiency in JavaScript
            </a>
          </p>
          <p>
            <a href="/articles/learning-react">Deepening Expertise in React</a>
          </p>
          <p>
            <a href="/articles/coding-puzzles">Coding Puzzles</a>
          </p>
        </nav>
      </div>
    </PageLayout>
  );
}
