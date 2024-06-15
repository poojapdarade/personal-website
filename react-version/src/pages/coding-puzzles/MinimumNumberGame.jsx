import { PageLayout } from "../../components/PageLayout";
import { useState } from "react";

export function MinimumNumberGame() {
  const [displayOutput, setDisplayOutput] = useState(null);
  const playArray = [];

  function handleAddNumbers() {
    const firstNumber = number1;
    const secondNumber = number2;
    const firstNumberValue = Number(firstNumber.value);
    const secondNumberValue = Number(secondNumber.value);
    playArray.push(firstNumberValue);
    playArray.push(secondNumberValue);
    setDisplayOutput(playArray);
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
    displayOutput(gameArray);
  }

  return (
    <PageLayout title:Minimum Number Game>
      <p>Add two numbers</p>
      <input type="number" id="number1" />
      <input type="number" id="number2" />
      <button type="button" onClick={handleAddNumbers}>
        Add Numbers
      </button>
      <p>
        Current Numbers: <span onClick={setDisplayOutput}></span>
      </p>
      <button type="button" onClick={minimumNumberGame}>
        Play
      </button>
      <p>
        Output : <span onClick={setDisplayOutput}></span>
      </p>
      <button
        type="button"
        onClick={() => {
          while (playArray.length) {
            playArray.pop();
          }
          displayOutput();
          setDisplayOutput();
        }}
      >
        Reset
      </button>
    </PageLayout>
  );
}
