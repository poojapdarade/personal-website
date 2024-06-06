import { PageLayout } from "../components/PageLayout";
import "./Homepage.css";

export function Homepage() {
  return (
    <PageLayout>
      <div className="introduction">
        <h2>Hello, I am Pooja, I am learning web development</h2>
        <a href="contact.html">Contact Me</a>
      </div>
    </PageLayout>
  );
}
