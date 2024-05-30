import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <aside className="sidebar">
        <nav>
          <div>
            <a href="./index.html">Home</a>
          </div>
          <div>
            <a href="./articles/">Articles</a>
          </div>
          <div>
            <a href="./contact.html">Contact</a>
          </div>
        </nav>
      </aside>
      <div className="introduction">
        <h2>Hello, I am Pooja, I am learning web development</h2>
        <a href="contact.html">Contact Me</a>
      </div>
    </>
  );
}

export default App;
