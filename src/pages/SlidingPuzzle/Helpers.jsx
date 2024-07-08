import { TILE_COUNT, GRID_SIZE } from "./Constants";

function isSolvable(puzzle) {
  const size = Math.sqrt(puzzle.length);
  let inversions = 0;
  let blankRowFromBottom = 0;

  for (let i = 0; i < puzzle.length; i++) {
    for (let j = i + 1; j < puzzle.length; j++) {
      if (puzzle[i] && puzzle[j] && puzzle[i] > puzzle[j]) {
        inversions++;
      }
    }
  }

  for (let i = 0; i < puzzle.length; i++) {
    if (puzzle[i] === 0) {
      blankRowFromBottom = Math.floor(i / size);
      break;
    }
  }
  blankRowFromBottom = size - blankRowFromBottom;

  if (size % 2 !== 0) {
    // If grid width is odd
    return inversions % 2 === 0;
  } else {
    // If grid width is even
    if (blankRowFromBottom % 2 === 0) {
      // Blank on even row from bottom
      return inversions % 2 !== 0;
    } else {
      // Blank on odd row from bottom
      return inversions % 2 === 0;
    }
  }
}

export function isSolved(tiles) {
  for (let i = 0; i < tiles.length; i++) {
    const tileValue = tiles[i] - 1;
    if (tileValue !== i) {
      return false;
    }
  }
  return true;
}

export function shuffle(tiles) {
  const shuffleTiles = [
    ...tiles
      .filter((t) => t !== tiles.length - 1)
      .sort(() => Math.random() - 0.5),
    tiles.length - 1,
  ];
  return isSolvable(shuffleTiles) && !isSolved(shuffleTiles)
    ? shuffleTiles
    : shuffle(shuffleTiles);
}

export function canSwap(tiles, tileIndex) {
  const neighborTiles = [
    tiles[tileIndex - GRID_SIZE],
    tiles[tileIndex - 1],
    tiles[tileIndex + 1],
    tiles[tileIndex + GRID_SIZE],
  ];

  const emptyNeighbor = neighborTiles.some((value) => value === TILE_COUNT);

  return emptyNeighbor;
}

export function swap(tiles, tileIndex) {
  const tilesResult = [...tiles];

  const indexOfEndTile = tilesResult.indexOf(TILE_COUNT);

  tilesResult[indexOfEndTile] = tilesResult[tileIndex];
  tilesResult[tileIndex] = TILE_COUNT;

  return tilesResult;
}
