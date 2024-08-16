import React from "react";
import { motion } from "framer-motion";

export function Tile({
  value,
  index,
  handleTileClick,
  tileCount,
  row,
  column,
}) {
  return (
    <motion.div
      style={{
        opacity: value === tileCount ? 0 : 1,
        position: "absolute",
      }}
      animate={{
        top: row * 96,
        left: column * 96,
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="tile"
      onClick={() => handleTileClick(index)}
    >
      {value}
    </motion.div>
  );
}
