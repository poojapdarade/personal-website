import { Navigation } from "../components/Navigation";
import "./Homepage.css";

export function Homepage() {
  return (
    <>
      <Navigation />
      <div className="introduction">
        <h2>Hello, I am Pooja, I am learning web development</h2>
        <a href="contact.html">Contact Me</a>
      </div>
    </>
  );
}
