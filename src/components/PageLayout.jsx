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
        <p>copyright &copy; 2024-{new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
