import { PageLayout } from "../../components/PageLayout";
import { useState } from "react";

export function MinimumNumberGame() {
  return (
    <PageLayout title:Minimum Number Game>
      {/* <h1>Minimum Number Game </h1>
      <p>Add two numbers</p>
      <input type="number" id="number1" />
      <input type="number" id="number2" />
      <button type="button" id="addNumbers">
        Add Numbers
      </button>
      <p>
        Current Numbers: <span id="currentNumbers"></span>
      </p>
      <button type="button" id="playButton">
        Play
      </button>
      <p>
        Output : <span id="output"></span>
      </p>

      <button type="button" id="reset">
        Reset
      </button> */}

      {/* const playArray = [];

        const addNumbersButton = document.querySelector('#addNumbers');
        addNumbersButton.addEventListener('click', handleAddNumbers);

        const playButton = document.querySelector('#playButton');
        playButton.addEventListener('click', minimumNumberGame);

        const resetButton = document.querySelector("#reset")
        resetButton.addEventListener('click', () => {
            while (playArray.length) {
                playArray.pop()
            }

            updateCurrentNumberDisplay()
            updateOutputDisplay([])
        })



        function updateCurrentNumberDisplay() {
            const displayNumbers = document.querySelector('#currentNumbers');
            displayNumbers.textContent = playArray;
        }

        function updateOutputDisplay(gameArray) {
            const output = document.querySelector("#output");
            output.textContent = gameArray;
        }

        function handleAddNumbers() {
            const firstNumber = document.querySelector('#number1');
            const secondNumber = document.querySelector('#number2');
            const firstNumberValue = Number(firstNumber.value);
            const secondNumberValue = Number(secondNumber.value);
            playArray.push(firstNumberValue);
            playArray.push(secondNumberValue);

            updateCurrentNumberDisplay()
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
        } */}
    </PageLayout>
  );
}