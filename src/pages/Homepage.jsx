import { PageLayout } from "../components/PageLayout";
import "./Homepage.css";
import Sparkles from "react-sparkle";
import { Code, Heading1, Atom, GitMerge, Box } from "lucide-react";
import { GitHub } from "../components/icons/GitHub";
import { LinkedIn } from "../components/icons/LinkedIn";
import { FutureSkills } from "./FutureSkills";
import { RecentProjects } from "./RecentProject";
import { MontyHallProblem } from "./MontyHallProblem";

export function Homepage() {
  return (
    <PageLayout>
      <IntroSection />
      <SkillSection />
      <FutureSkills />
      <RecentProjects />
    </PageLayout>
  );
}

function JobTitle() {
  return (
    <div style={{ position: "relative", width: "fit-content" }}>
      <p>Software Engineer</p>
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
          As a software engineer with a strong foundation in HTML, CSS,
          JavaScript, and React, complemented by a background in computer
          engineering and business management, I am driven to craft engaging and
          user-friendly web applications. I am dedicated to continuous learning
          and improvement in modern web technologies, ensuring that each project
          I undertake pushes the boundaries of innovation and functionality.
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
            As a software engineer with a strong foundation in HTML, CSS,
            JavaScript, and React, complemented by a background in computer
            engineering and business management, I am driven to craft engaging
            and user-friendly web applications. I am dedicated to continuous
            learning and improvement in modern web technologies, ensuring that
            each project I undertake pushes the boundaries of innovation and
            functionality.
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
      "With a strong knowledge of HTML, I create robust and accessible web structures that form the foundation for dynamic and user-friendly websites. My expertise ensures that every element is meticulously crafted to enhance both functionality and user experience.",
  },
  {
    title: "CSS",
    icon: <Box size={50} />,
    description:
      "Skilled in CSS, I design visually appealing and responsive web interfaces that adapt seamlessly across devices. My proficiency in modern CSS techniques allows me to transform web designs into stunning and interactive user experiences.",
  },
  {
    title: "JavaScript",
    icon: <Code size={50} />,
    description:
      "Competent in JavaScript, I bring web applications to life with interactive and dynamic functionalities. My understanding of JavaScript enables me to build seamless, responsive, and engaging user experiences, pushing the boundaries of web development.",
  },
  {
    title: "React",
    icon: <Atom size={50} />,
    description:
      "Knowledgeable in React, I develop high-performance, scalable, and maintainable front-end applications. Leveraging React's component-based architecture, I create sophisticated user interfaces that deliver a seamless and intuitive user experience.",
  },
  {
    title: "Git",
    icon: <GitMerge size={50} />,
    description:
      "Experienced with Git, I efficiently manage code versioning, ensuring seamless collaboration and integration across development teams. My proficiency with Git workflows and best practices allows for smooth project progression and robust codebase maintenance.",
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
              <div className="card" key={skill.title}>
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
