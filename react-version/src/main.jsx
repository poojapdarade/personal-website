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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles/learning-css" element={<LearningCss />} />
        <Route path="/articles/learning-html" element={<LearningHtml />} />
        <Route
          path="/articles/learning-javaScript"
          element={<LearningJavaScript />}
        />
        <Route path="/articles/learning-git" element={<LearningGit />} />
        <Route path="/articles/coding-puzzles" element={<CodingPuzzle />} />
        <Route
          path="/articles/coding-puzzles/jewels-and-stones"
          element={<JewelsAndStones />}
        />
        <Route path="*" element={<PageLayout title="404 - Page Not Found" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
