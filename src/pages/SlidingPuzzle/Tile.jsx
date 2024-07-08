import React from "react";
import { TILE_COUNT } from "./Constants";

export function Tile({ value, index, handleTileClick }) {
  return (
    <div
      style={{
        opacity: value === TILE_COUNT ? 0 : 1,
      }}
      className="tile"
      onClick={() => handleTileClick(index)}
    >
      {value}
    </div>
  );
}
