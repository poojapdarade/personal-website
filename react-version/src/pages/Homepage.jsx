import { PageLayout } from "../components/PageLayout";
import "./Homepage.css";

export function Homepage() {
  return (
    <PageLayout>
      <IntroSection />
    </PageLayout>
  );
}

function IntroSection() {
  return (
    <div className="intro-layout">
      <div className="description">
        <h2 className="name">Pooja Darade</h2>
        <p>Junior Web Developer</p>
        <p>
          I'm a passionate junior web developer with a foundation in HTML, CSS,
          JavaScript and react.
        </p>
        <img src="public/avatar.jpeg" />
        <div className="intro-buttons">
          <a href="/articles" className="view-work">
            View Work
          </a>
          <a href="/contact" className="contact">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
