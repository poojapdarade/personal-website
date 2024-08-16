import React from "react";
import { motion } from "framer-motion";

export function Tile({
  value,
  index,
  handleTileClick,
  tileCount,
  gridSize,
  selectedImage,
  tileSize,
}) {
  const tileIndex = value - 1;
  const originalRow = Math.floor(tileIndex / gridSize);
  const originalColumn = tileIndex % gridSize;

  const currentRow = Math.floor(index / gridSize);
  const currentColumn = index % gridSize;

  return (
    <motion.div
      style={{
        opacity: value === tileCount ? 0 : 1,
        position: "absolute",
        backgroundImage: `url(/sliding-puzzle-images/${selectedImage})`,
        backgroundSize: `${tileSize * gridSize}px ${tileSize * gridSize}px`,
        backgroundPosition: `-${originalColumn * tileSize}px -${
          originalRow * tileSize
        }px`,
        width: tileSize,
        height: tileSize,
      }}
      v
      animate={{
        top: currentRow * tileSize,
        left: currentColumn * tileSize,
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="tile"
      onClick={() => handleTileClick(index)}
    />
  );
}
