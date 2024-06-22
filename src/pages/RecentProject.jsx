import { Game } from "../components/icons/Game";
import { Website } from "../components/icons/Website";
import "./Recent-projects.css";

const recentProjects = [
  {
    title: "My Website",
    icon: <Website />,
    description: "My Introduction project number 1",
  },
  {
    title: "Monty Hall Problem",
    icon: <Game />,
    description: "Project Number 2",
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
        <h2 className="project-title">My Projects</h2>
        <div className="projects">
          {recentProjects.map(function (recentProject) {
            return (
              <div className="projectsCard">
                <div>
                  {recentProject.icon}
                  <p>{recentProject.title}</p>
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
