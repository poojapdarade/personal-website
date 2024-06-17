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
      <div className="description-mobile">
        <h2 className="name">Pooja Darade</h2>
        <p>Junior Web Developer</p>
        <p>
          I'm a passionate junior web developer with a foundation in HTML, CSS,
          JavaScript, and React. With a background in computer engineering and
          business management, I&apos;m eager to apply my skills to build
          engaging, user-friendly web applications and continuously improve my
          expertise in modern web technologies.
        </p>
        <img src="/avatar.jpeg" className="avatar" />
        <div className="intro-buttons">
          <a href="/articles" className="view-work">
            View Work
          </a>
          <a href="/contact" className="contact">
            Contact Me
          </a>
        </div>
      </div>

      <div className="description-desktop">
        <div className="description-desktop-text">
          <h2 className="name">Pooja Darade</h2>
          <p>Junior Web Developer</p>
          <p>
            I'm a passionate junior web developer with a foundation in HTML,
            CSS, JavaScript, and React. With a background in computer
            engineering and business management, I&apos;m eager to apply my
            skills to build engaging, user-friendly web applications and
            continuously improve my expertise in modern web technologies.
          </p>
          <div className="intro-buttons">
            <a href="/articles" className="view-work">
              View Work
            </a>
            <a href="/contact" className="contact">
              Contact Me
            </a>
          </div>
        </div>
        <img src="/avatar.jpeg" className="avatar" />
      </div>
    </div>
  );
}
