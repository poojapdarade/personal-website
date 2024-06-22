import { Node } from "../components/icons/Node";
import { Tailwind } from "../components/icons/TailWind";
import { TypeScript } from "../components/icons/TypeScript";
import "./Learning-in-future.css";

const futureSkills = [
  {
    title: "TypeScript",
    icon: <TypeScript />,
    description: "Enhance my skills with the TypeScript programming language.",
  },
  {
    title: "Node.js",
    icon: <Node />,
    description:
      "Proficient in modern JavaScript, including ES6+ features and popular frameworks like React and Node.js.",
  },
  {
    title: "tailwind CSS",
    icon: <Tailwind />,
    description:
      "Leverage the power of Tailwind CSS for efficient and responsive styling.",
  },
];

export function FutureSkills() {
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
        <h2 className="learnings-title">Future Learning Goals</h2>
        <div className="learnings">
          {futureSkills.map(function (futureSkill) {
            return (
              <div className="learningCard">
                <div>
                  {futureSkill.icon}
                  <p>{futureSkill.title}</p>
                </div>
                <p>{futureSkill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
