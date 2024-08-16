import { useState } from "react";
import { Tile } from "./Tile";
import { canSwap, shuffle, isSolved, swap } from "./Helpers";
import "./board.css";

export function Board() {
  const [gridSize, setGridSize] = useState(5);
  const [selectedImage, setSelectedImage] = useState("scenic-cove.webp");

  const tileCount = gridSize * gridSize;

  const [tiles, setTiles] = useState(
    Array(tileCount)
      .fill(null)
      .map((value, index) => index + 1)
  );
  const [isStarted, setIsStarted] = useState(false);

  function shuffleTiles() {
    const shuffledTiles = shuffle(tiles);
    setTiles(shuffledTiles);
  }

  function swapTiles(tileIndex) {
    const tilesCanSwap = canSwap(tiles, tileIndex, gridSize, tileCount);

    if (!tilesCanSwap) return;

    const swappedTiles = swap(tiles, tileIndex, tileCount);
    setTiles(swappedTiles);
  }

  function handleTileClick(index) {
    swapTiles(index);
  }

  function handleShuffleClick() {
    shuffleTiles();
    setIsStarted(false);
  }

  function handleStartClick() {
    shuffleTiles();
    setIsStarted(true);
  }

  function updateTiles(gridSize) {
    const tileCount = gridSize * gridSize;

    const newTiles = Array(tileCount)
      .fill(null)
      .map((value, index) => index + 1);

    setTiles(newTiles);
  }

  function changeGridSize(newGridSize) {
    if (isStarted) return;
    if (newGridSize < 3 || newGridSize > 7) return;

    setGridSize(newGridSize);
    updateTiles(newGridSize);
  }

  function updateSelectedImage(imageName) {
    setSelectedImage(imageName);
  }

  const hasWon = isSolved(tiles);

  return (
    <div className="container">
      <button
        onClick={() => changeGridSize(gridSize - 1)}
        disabled={gridSize === 3 || isStarted}
      >
        -
      </button>
      <button
        onClick={() => changeGridSize(gridSize + 1)}
        disabled={gridSize === 7 || isStarted}
      >
        +
      </button>
      <p>
        The grid size is: {gridSize} x {gridSize}
      </p>
      <div
        className="board"
        style={{
          width: `${96 * gridSize}px`,
          height: `${96 * gridSize}px`,
        }}
      >
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            value={tile}
            index={index}
            handleTileClick={handleTileClick}
            tileCount={tileCount}
            selectedImage={selectedImage}
            gridSize={gridSize}
          />
        ))}
      </div>

      {hasWon && isStarted && <div>Puzzle Solved</div>}
      {!isStarted ? (
        <button onClick={() => handleStartClick()}>Start Game</button>
      ) : (
        <button onClick={() => handleShuffleClick()}>Restart Game</button>
      )}

      <div>
        <label>Select Image: </label>
        <select
          value={selectedImage}
          onChange={(e) => updateSelectedImage(e.target.value)}
        >
          <option value="scenic-cove.webp">Beach</option>
          <option value="jungle.webp">Jungle</option>
          <option value="tiger.webp">Tiger</option>
          <option value="flower.webp">Flowers</option>
          <option value="mansion.webp">Mansion</option>
        </select>
      </div>
    </div>
  );
}
