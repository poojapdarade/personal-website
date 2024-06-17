import { PageLayout } from "../components/PageLayout";
import "./Homepage.css";
import Sparkles from "react-sparkle";

export function Homepage() {
  return (
    <PageLayout>
      <IntroSection />
      <SkillSection />
    </PageLayout>
  );
}

function JobTitle() {
  return (
    <div style={{ position: "relative", width: "fit-content" }}>
      <p>Junior Web Developer</p>
      <Sparkles
        color={["#f472b6", "#831843"]}
        count={10}
        overflowPx={8}
        fadeOutSpeed={25}
        flickerSpeed="slowest"
      />
    </div>
  );
}

function IntroSection() {
  return (
    <div className="intro-layout width-container">
      <div className="description-mobile">
        <h2 className="name">Pooja Darade</h2>
        <JobTitle />
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
          <JobTitle />
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

function SkillSection() {
  return (
    <div
      style={{
        backgroundColor: "#d1d5db",
        marginLeft: "-18px",
        marginRight: "-18px",
      }}
    >
      <div className="width-container">
        <p>test</p>
      </div>
    </div>
  );
}
