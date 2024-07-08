import { useEffect, useState } from "react";
import { PageLayout } from "../../components/PageLayout";
import { Board } from "./Board";
import "./board.css";

export function SlidingPuzzlesPage() {
  const [imgUrl, setImgUrl] = useState(
    "https://personal-website-beta-eight-43.vercel.app/avatar.jpeg"
  );

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("img")) {
      setImgUrl(urlParams.get("img"));
    }
  }, []);

  return (
    <PageLayout title="Sliding Puzzle Box in React">
      <div className="puzzle-container">
        <Board imgUrl={imgUrl} />
      </div>
    </PageLayout>
  );
}
