import { PageLayout } from "../components/PageLayout";
import "./MontyHallProblem.css";
import React, { useState } from "react";

export function MontyHallProblem() {
  const winningDoor = Math.floor(Math.random() * 3);

  const [gameStage, setGameStage] = useState("start");
  const [decision, setDecision] = useState(undefined);

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

  function keepDoor() {
    const newDoors = doors.map((door) => {
      return {
        ...door,
        isRevealed: true,
      };
    });
    setDoors(newDoors);
    setDecision("yes");
    setGameStage("finished");
  }

  function switchDoor() {
    const newDecision = doors.map((door) => {
      return {
        ...door,
      };
    });

    const indexOfOriginalDoorSelected = newDecision.findIndex(
      (door) => door.isSelected
    );
    const indexOfNewDoorSelected = newDecision.findIndex(
      (door) => !door.isSelected && !door.isRevealed
    );

    newDecision[indexOfOriginalDoorSelected].isSelected = false;
    newDecision[indexOfNewDoorSelected].isSelected = true;

    const allDoorsRevealed = newDecision.map((door) => {
      return {
        ...door,
        isRevealed: true,
      };
    });

    setDoors(allDoorsRevealed);
    setDecision("no");
    setGameStage("finished");
  }

  const isWinner =
    doors.find((door) => door.isSelected && door.item === "🚄") !== undefined;

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

          <button onClick={switchDoor}>Yes</button>
          <button onClick={keepDoor}>No</button>
        </>
      )}

      {gameStage === "finished" && isWinner && (
        <p>You Won. Thank you for playing</p>
      )}

      {gameStage === "finished" && !isWinner && (
        <p>You lost. Thank you for playing</p>
      )}
    </PageLayout>
  );
}
