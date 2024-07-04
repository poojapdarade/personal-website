import { PageLayout } from "../../components/PageLayout";
import "./CodingChallenges.css";

export function CodingPuzzle() {
  return (
    <PageLayout title="Coding Challenges">
      <div className="coding-challenges">
        <ul>
          <li>
            <a href="/articles/coding-puzzles/jewels-and-stones">
              Jewels And Stones
            </a>
          </li>
          <li>
            <a href="/articles/coding-puzzles/minimum-number-game">
              Minimum Number Game
            </a>
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}
