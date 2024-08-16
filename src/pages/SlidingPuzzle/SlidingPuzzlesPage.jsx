import { PageLayout } from "../../components/PageLayout";
import { Board } from "./Board";
import "./board.css";

export function SlidingPuzzlesPage() {
  return (
    <PageLayout title="Sliding Puzzle Box in React">
      <div className="puzzle-container">
        <Board />
      </div>
    </PageLayout>
  );
}
