import { PageLayout } from "../components/PageLayout";
import { CarIcon } from "../components/icons/Car";
import { GoatIcon } from "../components/icons/Goat";
import "./MontyHallProblem.css";
import React, { useState } from "react";

const mapItemNameToComponent = new Map([
  ["goat", <GoatIcon width={"100%"} height={"100%"} />],
  ["car", <CarIcon width={"100%"} height={"100%"} />],
]);

export function MontyHallProblem() {
  const winningDoor = Math.floor(Math.random() * 3);

  const [gameStage, setGameStage] = useState("start");
  const [simulationResults, setSimulationResults] = useState(undefined);

  for (let i = 0; i < 100; i++) {}

  const [doors, setDoors] = useState([
    {
      isSelected: false,
      item: winningDoor === 0 ? "car" : "goat",
      isRevealed: false,
    },
    {
      isSelected: false,
      item: winningDoor === 1 ? "car" : "goat",
      isRevealed: false,
    },
    {
      isSelected: false,
      item: winningDoor === 2 ? "car" : "goat",
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
      if (currentDoor.item === "goat") {
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
    setGameStage("finished");
  }

  const isWinner = doors.find((door) => door.isSelected && door.item === "car");

  function simulation() {
    let winCount = 0;
    let loseCount = 0;
    const SIMULATION_RUNS = 100;
    const SWITCH_AFTER_REVEAL = true;

    for (let i = 0; i < SIMULATION_RUNS; i++) {
      const doors = [
        { win: false, revealed: false, selected: false },
        { win: false, revealed: false, selected: false },
        { win: false, revealed: false, selected: false },
      ];
      const winningDoorIndex = Math.floor(Math.random() * 3);
      const winningDoor = doors[winningDoorIndex];
      winningDoor.win = true;

      const playersDoorIndex = Math.floor(Math.random() * 3);
      const playerDoor = doors[playersDoorIndex];
      playerDoor.selected = true;

      const indexes = [0, 1, 2].toSorted(() => Math.random() > 0.5);

      for (const index of indexes) {
        const door = doors[index];
        if (door.selected) continue;
        if (door.win) continue;
        door.revealed = true;
        break;
      }

      if (SWITCH_AFTER_REVEAL) {
        const indexToChangeTo = doors.findIndex(
          (door) => !door.selected && !door.revealed
        );
        doors[playersDoorIndex].selected = false;
        doors[indexToChangeTo].selected = true;
      }

      const selectedDoor = doors.find((door) => door.selected);
      const isWinner = selectedDoor.win;

      if (isWinner) {
        winCount++;
      } else {
        loseCount++;
      }
    }

    setSimulationResults({
      winCount,
      loseCount,
    });
  }

  return (
    <PageLayout title="Monty Hall">
      <div className="montyHallProblem">
        <p>
          Behind two of the doors there is a goat and behind one is a Car.
          Please pick a door.
        </p>

        <div className="doors">
          {doors.map(function (door, index) {
            return (
              <button
                className="door"
                key={index}
                onClick={() => handleClick(index)}
                disabled={gameStage !== "start"}
              >
                {door.isRevealed
                  ? mapItemNameToComponent.get(door.item)
                  : `Door ${index + 1}`}
              </button>
            );
          })}
        </div>

        {gameStage === "revealed" && (
          <div>
            <p>
              You have selected Door{" "}
              {doors.findIndex((door) => door.isSelected) + 1}, behind door{" "}
              {doors.findIndex((door) => door.isRevealed) + 1} is a goat. Would
              you like to change to door{" "}
              {doors.findIndex((door) => !door.isRevealed && !door.isSelected) +
                1}
              ?
            </p>
            <div className="choice">
              <button onClick={switchDoor}>Yes</button>
              <button onClick={keepDoor}>No</button>
            </div>
          </div>
        )}

        {gameStage === "finished" && (
          <div className="probabilityOfResult">
            {isWinner && (
              <p>"Congratulations on your win!!! Thank you for playing."</p>
            )}

            {!isWinner && (
              <p>
                "oh!!! Unfortunately, this time you didn't win. Thank you for
                playing!"
              </p>
            )}

            <p>
              In the Monty Hall Problem, the best strategy is to always switch
              doors after the host reveals one. This approach increases your
              chances of winning to 2/3.
            </p>
            <p>
              "If you're interested in seeing the simulation run 100 times, feel
              free to click the button below."
            </p>

            <button className="simulationButton" onClick={simulation}>
              Run a simulation
            </button>

            {simulationResults && (
              <p>
                You have a {simulationResults.winCount}% chance of winning and a{" "}
                {simulationResults.loseCount}% chance of losing.
              </p>
            )}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
