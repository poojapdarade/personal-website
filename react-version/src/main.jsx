import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage.jsx";
import { Articles } from "./pages/Articles.jsx";
import { Contact } from "./pages/Contact.jsx";
import { LearningCss } from "./pages/Learning-css.jsx";
import { LearningHtml } from "./pages/LearningHTML.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles/learning-css" element={<LearningCss />} />
        <Route path="/articles/learning-html" element={<LearningHtml />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
