import { Navigation } from "./Navigation";
import "./PageLayout.css";

export function PageLayout({ title, children }) {
  return (
    <div className="layout">
      <Navigation />
      <div>
        {title && <h1 className="title">{title}</h1>}
        {children}
      </div>
      <footer className="footer">
        <p>Pooja Darade</p>
        <p>Junior Software Engineer</p>
        <div className="footer-social-network-info">
          <a href="mailto:poojap.darade@gmail.com">poojapdarade.gmail.com</a>
          <a href="https://linkedin.com/in/pooja-darade-658008119">LinkedIn</a>
          <a href="https://github.com/poojapdarade">GitHub</a>
        </div>
        <p>
          copyright &copy; 2024-{new Date().getFullYear()}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
