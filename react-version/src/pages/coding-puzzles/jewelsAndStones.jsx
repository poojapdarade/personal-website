import { PageLayout } from "../../components/PageLayout";
import { useState } from "react";

export function JewelsAndStones() {
  const [jewels, setJewels] = useState([]);
  const [stones, setStones] = useState([]);
  const [jewelsFound, setJewelsFound] = useState(null);

  function calculateNumberOfJewels() {
    let numberOfJewels = 0;
    const jewelsToFind = new Set(jewels);
    for (const stone of stones) {
      if (jewelsToFind.has(stone)) {
        numberOfJewels++;
      }
    }
    setJewelsFound(numberOfJewels);
  }

  return (
    <PageLayout title={"Jewels and Stones"}>
      <p style={{ marginBottom: "2px" }}>Jewels</p>
      <input
        type="text"
        value={jewels.join("")}
        onChange={(event) => setJewels(event.target.value.split(""))}
      />

      <p style={{ marginBottom: "2px" }}>Stones</p>
      <input
        type="text"
        value={stones.join("")}
        onChange={(event) => setStones(event.target.value.split(""))}
      />

      <button
        style={{ display: "block", marginTop: "24px" }}
        onClick={calculateNumberOfJewels}
      >
        Calculate Number of Jewels
      </button>

      {jewelsFound !== null && (
        <p>
          for stones {stones.join("")} and jewels {jewels.join("")} we found{" "}
          {jewelsFound} jewels
        </p>
      )}
    </PageLayout>
  );
}

// function getJewels() {
//     return(
//     <input className="jewels" defaultValue={jewels}></input>

//         {jewels};
//     )}

//     function getStones() {
//         const stones = document.querySelector("#stones").value;
//         return stones;
//     }
//     function calculate() {
//         const jewels = getJewels();
//         const stones = getStones();
//         const numberOfJewels = jewelsAndStones(jewels, stones);

//         const paragraph = document.querySelector('#answer');
//         paragraph.textContent = `for stones (${stones}) and jewels (${jewels}) we found ${numberOfJewels} jewels`;
//     }

//     function jewelsAndStones(jewels, stones) {
//         let numberOfJewels = 0;

//         const jewelsToFind = new Set(jewels.split(''));
//         for (const stone of stones) {
//             if (jewelsToFind.has(stone)) {
//                 numberOfJewels++;
//             }
//         }
//         return numberOfJewels;
//     };

//     const calculateButton = document.querySelector("#calculate")
//     calculateButton.addEventListener("click", calculate)
