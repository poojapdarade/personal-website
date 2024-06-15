import { PageLayout } from "../../components/PageLayout";
import { useState } from "react";

export function MinimumNumberGame() {
  const playArray = [];

  function updateCurrentNumberDisplay() {
    const displayNumbers = currentNumbers;
    displayNumbers.textContent = playArray;
  }

  function updateOutputDisplay(gameArray) {
    const output = [];
    output.textContent = gameArray;
  }

  function handleAddNumbers() {
    const firstNumber = number1;
    const secondNumber = number2;
    const firstNumberValue = Number(firstNumber.value);
    const secondNumberValue = Number(secondNumber.value);
    playArray.push(firstNumberValue);
    playArray.push(secondNumberValue);

    updateCurrentNumberDisplay();
  }

  function minimumNumberGame() {
    const gameArray = [];
    const ascendingArray = playArray.toSorted((a, b) => a - b);

    for (let i = 0; i < ascendingArray.length; i += 2) {
      const alice = ascendingArray[i];
      const bob = ascendingArray[i + 1];
      gameArray.push(bob);
      gameArray.push(alice);
    }
    updateOutputDisplay(gameArray);
  }

  return (
    <PageLayout title:Minimum Number Game>
      <p>Add two numbers</p>
      <input type="number" id="number1" />
      <input type="number" id="number2" />
      <button type="button" id="addNumbers" onClick={handleAddNumbers}>
        Add Numbers
      </button>
      <p>
        Current Numbers: <span id="currentNumbers"></span>
      </p>
      <button type="button" id="playButton" onClick={minimumNumberGame}>
        Play
      </button>
      <p>
        Output : <span id="output"></span>
      </p>
      <button
        type="button"
        id="reset"
        onClick={() => {
          while (playArray.length) {
            playArray.pop();
          }
          updateCurrentNumberDisplay();
          updateOutputDisplay();
        }}
      >
        Reset
      </button>
    </PageLayout>
  );
}
