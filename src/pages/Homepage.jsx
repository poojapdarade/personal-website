import { PageLayout } from "../components/PageLayout";
import "./Homepage.css";
import Sparkles from "react-sparkle";
import { Code, Heading1, Atom, GitMerge, Box } from "lucide-react";
import { GitHub } from "../components/icons/GitHub";
import { LinkedIn } from "../components/icons/LinkedIn";

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
        <h1 className="name">Pooja Darade</h1>
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
        <div className="social-net-pages">
          <a href="https://linkedin.com/in/pooja-darade-658008119">
            <LinkedIn />
          </a>
          <a href="https://github.com/poojapdarade">
            <GitHub />
          </a>
        </div>
      </div>

      <div className="description-desktop">
        <div className="description-desktop-text">
          <h1 className="name">Pooja Darade</h1>
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
          <div className="social-net-pages">
            <a href="https://linkedin.com/in/pooja-darade-658008119">
              <LinkedIn />
            </a>
            <a href="https://github.com/poojapdarade">
              <GitHub />
            </a>
          </div>
        </div>
        <img src="/avatar.jpeg" className="avatar" />
      </div>
    </div>
  );
}

const skills = [
  {
    title: "HTML",
    icon: <Heading1 size={50} />,
    description:
      "HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
  },
  {
    title: "CSS",
    icon: <Box size={50} />,
    description:
      "Skilled in writing clean, responsive, and maintainable CSS, including the use of preprocessors like Sass and Tailwind CSS.",
  },
  {
    title: "JavaScript",
    icon: <Code size={50} />,
    description:
      "Proficient in modern JavaScript, including ES6+ features and popular frameworks like React and Node.js.",
  },
  {
    title: "React",
    icon: <Atom size={50} />,
    description:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js",
  },
  {
    title: "Git",
    icon: <GitMerge size={50} />,
    description:
      "Proficient in using Git for version control, including branching, merging, and collaborating on projects.",
  },
];

function SkillSection() {
  return (
    <div
      style={{
        backgroundColor: "#e5e7eb",
        marginLeft: "-18px",
        marginRight: "-18px",
        paddingLeft: "18px",
        paddingRight: "18px",
      }}
    >
      <div
        className="width-container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "20px 0px",
        }}
      >
        <h2 className="skills-title">Skills</h2>
        <div className="skills">
          {skills.map(function (skill) {
            return (
              <div className="card">
                <div>
                  {skill.icon}
                  <p>{skill.title}</p>
                </div>
                <p>{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
