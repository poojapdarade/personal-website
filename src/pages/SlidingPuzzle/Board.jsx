import { useState } from "react";
import { Tile } from "./Tile";
import { canSwap, shuffle, isSolved, swap } from "./Helpers";
import "./board.css";

export function Board({ imgUrl }) {
  const [gridSize, setGridSize] = useState(5);
  const tileCount = gridSize * gridSize;

  const [tiles, setTiles] = useState(
    Array(tileCount)
      .fill(null)
      .map((value, index) => index + 1)
  );
  const [isStarted, setIsStarted] = useState(false);

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles);
    setTiles(shuffledTiles);
  };

  const swapTiles = (tileIndex) => {
    const tilesCanSwap = canSwap(tiles, tileIndex, gridSize, tileCount);

    console.log("index", tileIndex);
    console.log("canSwap", tilesCanSwap);

    if (!tilesCanSwap) return;

    const swappedTiles = swap(tiles, tileIndex, tileCount);
    setTiles(swappedTiles);
  };

  const handleTileClick = (index) => {
    swapTiles(index);
  };

  const handleShuffleCLick = () => {
    shuffleTiles();
  };

  const handleStartClick = () => {
    shuffleTiles();
    setIsStarted(true);
  };

  function updateTiles(gridSize) {
    const tileCount = gridSize * gridSize;

    const newTiles = Array(tileCount)
      .fill(null)
      .map((value, index) => index + 1);

    setTiles(newTiles);
  }

  function changeGridSize(newGridSize) {
    if (newGridSize < 3 || newGridSize > 7) return;

    setGridSize(newGridSize);
    updateTiles(newGridSize);
  }

  const hasWon = isSolved(tiles);

  return (
    <>
      <button
        onClick={() => changeGridSize(gridSize + 1)}
        disabled={gridSize === 7}
      >
        +
      </button>
      <button
        onClick={() => changeGridSize(gridSize - 1)}
        disabled={gridSize === 3}
      >
        -
      </button>
      <p>
        The grid size is: {gridSize} x {gridSize}
      </p>
      <div
        className="board"
        style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}
      >
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            value={tile}
            index={index}
            handleTileClick={handleTileClick}
            tileCount={tileCount}
          />
        ))}
      </div>

      {hasWon && isStarted && <div>Puzzle Solved</div>}
      {!isStarted ? (
        <button onClick={() => handleStartClick()}>Start Game</button>
      ) : (
        <button onClick={() => handleShuffleCLick()}>Restart Game</button>
      )}
    </>
  );
}
