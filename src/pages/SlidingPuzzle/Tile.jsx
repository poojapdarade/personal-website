import React from "react";

export function Tile({
  value,
  index,
  handleTileClick,
  tileCount,
  row,
  column,
}) {
  return (
    <div
      style={{
        opacity: value === tileCount ? 0 : 1,
        top: row * 96,
        left: column * 96,
        position: "absolute",
      }}
      className="tile"
      onClick={() => handleTileClick(index)}
    >
      {value}
    </div>
  );
}
