import React, { useState } from "react";
import { PageLayout } from "../../components/PageLayout";
export function MinimumNumberGame() {
  const [playArray, setPlayArray] = useState([]);
  const [gameArray, setGameArray] = useState([]);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  function reset() {
    setPlayArray([]);
    setGameArray([]);
  }

  function addNumbers() {
    const newPlayArray = [...playArray];
    newPlayArray.push(number1);
    newPlayArray.push(number2);
    setPlayArray(newPlayArray);
  }

  function playTheGame() {
    const newGameArray = [...playArray];
    const ascendingArray = newGameArray.toSorted((a, b) => a - b);
    const output = [];
    for (let i = 0; i < ascendingArray.length; i += 2) {
      const alice = ascendingArray[i];
      const bob = ascendingArray[i + 1];
      output.push(bob);
      output.push(alice);
    }

    setGameArray(output);
  }

  return (
    <PageLayout title={"Minimum Number Game"}>
      <div className="coding-challenges">
        <p>Add Numbers</p>

        <input
          type="number"
          value={number1}
          onChange={(event) => setNumber1(Number(event.target.value))}
        />
        <input
          type="number"
          value={number2}
          onChange={(event) => setNumber2(Number(event.target.value))}
        />
        <button onClick={addNumbers}>Add Numbers</button>
        <p>Numbers in the array are : {playArray}</p>

        <button onClick={playTheGame}>Play</button>
        <p>The output array is: {gameArray}</p>
        <button onClick={reset}>Reset</button>
      </div>
    </PageLayout>
  );
}
