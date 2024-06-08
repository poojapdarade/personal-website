import "./Navigation.css";

export function Navigation() {
  return (
    <aside className="sidebar">
      <nav>
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href="./articles/">Articles</a>
        </div>
        <div>
          <a href="./Contact">Contact</a>
        </div>
      </nav>
    </aside>
  );
}
