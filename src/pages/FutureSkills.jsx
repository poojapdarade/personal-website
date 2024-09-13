import React from "react";
import { Node } from "../components/icons/Node";
import { Tailwind } from "../components/icons/TailWind";
import "./Learning-in-future.css";

const futureSkills = [
  {
    title: "Node.js",
    icon: <Node />,
    description:
      "Learn and be skilled in Node.js, I will use this skill develop high-performance server-side applications and RESTful APIs that are scalable and efficient. Utilizing Node.js's non-blocking I/O and event-driven architecture, I create robust backend solutions that seamlessly handle real-time data and heavy traffic.",
  },
  {
    title: "tailwind CSS",
    icon: <Tailwind />,
    description:
      "Be proficient in Tailwind CSS, I will use this skill to design highly customizable and responsive web interfaces with speed and precision. Utilizing Tailwind's utility-first approach, I create clean, maintainable, and scalable styles that enhance both development efficiency and user experience.",
  },
];

export function FutureSkills() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
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
              <div className="learningCard" key={futureSkill.title}>
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
