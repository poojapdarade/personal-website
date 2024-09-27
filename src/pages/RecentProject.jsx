import React from "react";
import { Game } from "../components/icons/Game";
import { Website } from "../components/icons/Website";
import "./Recent-projects.css";

const recentProjects = [
  {
    title: "My Website",
    icon: <Website />,
    description:
      "Welcome to my portfolio! I'm a dedicated software engineer specializing in HTML, CSS, JavaScript, and React. With a passion for creating sleek and responsive web applications, I combine these technologies to deliver intuitive user interfaces and seamless experiences. Explore my projects to see how I leverage these skills to innovate and elevate user interaction.",
    link: "",
  },
  {
    title: "Sliding Picture Puzzle",
    link: "/projects/sliding-puzzle",
    icon: <Game />,
    description:
      "Sliding Picture Puzzle Game is perfect for a quick brain exercise or a relaxing break. Test your skills, challenge yourself with different images, and have fun reassembling beautiful pictures!",
  },
  {
    title: "Monty Hall Problem",
    icon: <Game />,
    description:
      "I'm a software engineer specializing in HTML, CSS, JavaScript, and React. Through these skills, I've created a captivating project—like my Monty Hall simulation—that demonstrates my ability to innovate and solve complex problems. Take a look at my portfolio to explore how I leverage these technologies to build intuitive and engaging web applications.",
    link: "/projects/monty-hall",
  },

  {
    title: "Simon Says Game",
    icon: <Game />,
    description:
      "I built a Simon Says game using JavaScript, HTML and CSS. The game lets users follow a sequence of colors that gets harder as they play. It helped me improve my skills in JavaScript and handling user interactions.",
    link: "/projects/simon-says-game",
  },
];
export function RecentProjects() {
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
        <h2 className="project-title" id="my-projects">
          My Projects
        </h2>
        <div className="projects">
          {recentProjects.map(function (recentProject) {
            return (
              //<a href={recentProject.link} key={recentProject.title}>
              <div className="projectsCard" key={recentProject.title}>
                <div>
                  {recentProject.icon}
                  <p>
                    <a href={recentProject.link} key={recentProject.title}>
                      {recentProject.title}
                    </a>
                  </p>
                </div>
                <p>{recentProject.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
