import React from "react";

export function Tile({ value, index, handleTileClick, tileCount }) {
  return (
    <div
      style={{
        opacity: value === tileCount ? 0 : 1,
      }}
      className="tile"
      onClick={() => handleTileClick(index)}
    >
      {value}
    </div>
  );
}
