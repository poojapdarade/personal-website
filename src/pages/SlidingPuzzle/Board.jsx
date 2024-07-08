import { useState } from "react";
import { Tile } from "./Tile";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./Constants";
import { canSwap, shuffle, isSolved, swap } from "./Helpers";
import "./board.css";

export function Board({ imgUrl }) {
  const [tiles, setTiles] = useState(
    Array(TILE_COUNT)
      .fill(null)
      .map((value, index) => index + 1)
  );
  const [isStarted, setIsStarted] = useState(false);

  const shuffleTiles = () => {
    const shuffledTiles = shuffle(tiles);
    setTiles(shuffledTiles);
  };

  const swapTiles = (tileIndex) => {
    const tilesCanSwap = canSwap(tiles, tileIndex);

    console.log("index", tileIndex);
    console.log("canSwap", tilesCanSwap);

    if (!tilesCanSwap) return;

    const swappedTiles = swap(tiles, tileIndex);
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

  const hasWon = isSolved(tiles);

  return (
    <>
      <div className="board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            value={tile}
            index={index}
            handleTileClick={handleTileClick}
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
