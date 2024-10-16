import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage.jsx";
import { Articles } from "./pages/Articles.jsx";
import { Contact } from "./pages/Contact.jsx";
import { LearningCss } from "./pages/Learning-css.jsx";
import { LearningHtml } from "./pages/LearningHTML.jsx";
import { LearningJavaScript } from "./pages/Javascript.jsx";
import { LearningGit } from "./pages/LearningGit.jsx";
import { JewelsAndStones } from "./pages/coding-puzzles/JewelsAndStones.jsx";
import { CodingPuzzle } from "./pages/coding-puzzles/CodingPuzzles.jsx";
import { PageLayout } from "./components/PageLayout.jsx";
import { MinimumNumberGame } from "./pages/coding-puzzles/MinimumNumberGame.jsx";
import { MontyHallProblem } from "./pages/MontyHallProblem.jsx";
import { LearningReact } from "./pages/LearningReact.jsx";
import { SlidingPuzzlesPage } from "./pages/SlidingPuzzle/SlidingPuzzlesPage.jsx";
import { SimonSaysGame } from "./pages/SimonSaysProject.jsx";
import { LearningTypescript } from "./pages/LearningTypeScript.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles/learning-git" element={<LearningGit />} />
        <Route path="/articles/learning-html" element={<LearningHtml />} />
        <Route path="/articles/learning-css" element={<LearningCss />} />
        <Route
          path="/articles/learning-javaScript"
          element={<LearningJavaScript />}
        />
        <Route
          path="/articles/learning-typescript"
          element={<LearningTypescript />}
        />
        <Route path="/articles/learning-react" element={<LearningReact />} />
        <Route path="/articles/coding-puzzles" element={<CodingPuzzle />} />
        <Route
          path="/articles/coding-puzzles/jewels-and-stones"
          element={<JewelsAndStones />}
        />
        <Route
          path="/articles/coding-puzzles/minimum-number-game"
          element={<MinimumNumberGame />}
        />
        <Route path="/projects/monty-hall" element={<MontyHallProblem />} />
        <Route
          path="/projects/sliding-puzzle"
          element={<SlidingPuzzlesPage />}
        />
        <Route path="/projects/simon-says-game" element={<SimonSaysGame />} />
        <Route path="*" element={<PageLayout title="404 - Page Not Found" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
