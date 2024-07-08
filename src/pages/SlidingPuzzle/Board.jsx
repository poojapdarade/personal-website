import { useState } from "react";
import { Tile } from "./Tile";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./Constants";
import { canSwap, shuffle } from "./Helpers";
import "./board.css";

export function Board({ imgUrl }) {
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);
  const [isStarted, setIsStarted] = useState(false);
  console.log("is Started: ", isStarted);

  const shuffleTiles = () => {
    const shuffleTiles = shuffle(tiles);
    setTiles(shuffleTiles);
  };

  const swapTiles = (tileIndex) => {
    if (canSwap(tileIndex, tiles.length - 1)) {
      const swappedTiles = swapTiles(tiles, tileIndex, tiles.length - 1);
      setTiles(swappedTiles);
    }
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

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE, GRID_SIZE);
  const style = { width: pieceWidth, height: pieceHeight };
  const hasWon = isSolved(tiles);
  return (
    <>
      <ul style={style} className="board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
            handleTileClick={handleTileClick}
          />
        ))}
      </ul>

      {hasWon && isStarted && <div>Puzzle Solved</div>}
      {!isStarted ? (
        <button onClick={() => handleStartClick()}>Start Game</button>
      ) : (
        <button onClick={() => handleShuffleCLick()}>Restart Game</button>
      )}
    </>
  );
}
