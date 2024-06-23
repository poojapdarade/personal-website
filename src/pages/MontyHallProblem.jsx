import { PageLayout } from "../components/PageLayout";
import "./MontyHallProblem.css";
import React, { useState } from "react";

export function MontyHallProblem() {
  const winningDoor = Math.floor(Math.random() * 3);

  const [gameStage, setGameStage] = useState("start");
  const [decision, setDecision] = useState("yes");

  const [doors, setDoors] = useState([
    {
      isSelected: false,
      item: winningDoor === 0 ? "🚄" : "🐐",
      isRevealed: false,
    },
    {
      isSelected: false,
      item: winningDoor === 1 ? "🚄" : "🐐",
      isRevealed: false,
    },
    {
      isSelected: false,
      item: winningDoor === 2 ? "🚄" : "🐐",
      isRevealed: false,
    },
  ]);

  function handleClick(index) {
    const newDoors = [...doors];
    const clickedDoor = { ...doors[index], isSelected: true };

    let doorToReveal = -1;
    for (let i = 0; i < newDoors.length; i++) {
      if (i === index) continue;
      const currentDoor = newDoors[i];
      if (currentDoor.item === "🐐") {
        doorToReveal = i;
      }
    }
    const revealedDoor = { ...doors[doorToReveal], isRevealed: true };

    newDoors[index] = clickedDoor;
    newDoors[doorToReveal] = revealedDoor;

    setDoors(newDoors);
    setGameStage("revealed");
  }

  function stay() {
    const newDoors = doors.map((door) => {
      return {
        ...door,
        isRevealed: true,
      };
    });
    setDoors(newDoors);
    setGameStage("finished");
  }

  function newDecision() {
    const newDecision = doors.map((door) => {
      return {
        ...door,
        isRevealed: true,
      };
    });
    setDoors(newDecision);
    setDecision("no");
  }

  return (
    <PageLayout title="Monty Hall">
      <p>
        Behind two of the doors there is a goat and behind one is a Car. Please
        pick a door.
      </p>

      <div>
        {doors.map(function (door, index) {
          return (
            <button
              key={index}
              onClick={() => handleClick(index)}
              disabled={gameStage !== "start"}
            >
              {door.isRevealed ? door.item : `Door ${index + 1}`}
            </button>
          );
        })}
      </div>

      {gameStage === "revealed" && (
        <>
          <p>
            You have selected Door{" "}
            {doors.findIndex((door) => door.isSelected) + 1}, behind door{" "}
            {doors.findIndex((door) => door.isRevealed) + 1} is a goat. Would
            you like to change to door{" "}
            {doors.findIndex((door) => !door.isRevealed && !door.isSelected) +
              1}
            ?
          </p>

          <button>Yes</button>
          <button onClick={(stay, newDecision)}>No</button>
        </>
      )}

      {gameStage === "finished" ||
        (decision === "no" && <p>Thank you for playing</p>)}
    </PageLayout>
  );
}
