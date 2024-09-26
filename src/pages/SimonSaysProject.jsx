import { useEffect, useState } from "react";
import "./simonSaysProject.css";
import { PageLayout } from "../components/PageLayout";

function randomColor() {
  const randomIndex = Math.floor(Math.random() * 4);
  const colors = ["red", "blue", "yellow", "green"];
  return colors[randomIndex];
}

const ANIMATION_LENGTH_MS = 1_000;

export function SimonSaysGame() {
  const [gameColors, setGameColors] = useState([]);
  const [animationColors, setAnimationColors] = useState([]);
  const [userColors, setUserColors] = useState([]);
  const [currentGameState, setCurrentGameState] = useState("not-started");
  const [animatedColor, setAnimatedColor] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (animationColors.length === 0) {
      setAnimatedColor("");
      return;
    }

    const copyAnimationColors = [...animationColors];
    const animationColor = copyAnimationColors.pop();

    setAnimatedColor(animationColor);

    setTimeout(() => {
      setAnimationColors(copyAnimationColors);
    }, ANIMATION_LENGTH_MS);
  }, [animationColors]);

  function startGame() {
    if (currentGameState !== "not-started") return;
    setCurrentGameState("playing");
    addGameColor();
  }

  function addGameColor() {
    const newColor = randomColor();
    const newGameColors = [...gameColors, newColor];
    const newGameColorsReversed = [...newGameColors].reverse();
    setGameColors(newGameColors);
    setAnimationColors(newGameColorsReversed);
  }

  function handleClick(color) {
    if (currentGameState !== "playing") {
      return;
    }
    if (animationColors.length !== 0) return;
    const currentIndex = userColors.length;
    const newUserColors = [...userColors, color];
    setUserColors(newUserColors);

    const expectedGameColor = gameColors[currentIndex];

    if (color !== expectedGameColor) {
      setIsGameOver(true);
      setCurrentGameState("game-over");
      setAnimatedColor("");
      setAnimationColors([]);
      return;
    }

    if (newUserColors.length === gameColors.length) {
      setUserColors([]);
      addGameColor();
    }
  }

  function resetGame() {
    setGameColors([]);
    setUserColors([]);
    setCurrentGameState("not-started");
    setIsGameOver(false);
  }

  return (
    <PageLayout>
      <div className="simon-says-layout">
        <div
          className="square-container"
          data-is-animating={
            animationColors.length > 0 && currentGameState !== "game-over"
          }
          data-is-playing={currentGameState === "playing"}
        >
          <div className="score">
            <p>{Math.max(gameColors.length - 1, 0)}</p>
          </div>
          <div
            className="quadrant red"
            data-is-color={animatedColor === "red"}
            onClick={() => handleClick("red")}
          />
          <div
            className="quadrant green"
            data-is-color={animatedColor === "green"}
            onClick={() => handleClick("green")}
          />
          <div
            className="quadrant blue"
            data-is-color={animatedColor === "blue"}
            onClick={() => handleClick("blue")}
          />
          <div
            className="quadrant yellow"
            data-is-color={animatedColor === "yellow"}
            onClick={() => handleClick("yellow")}
          />
        </div>

        <div className="controls">
          {currentGameState === "not-started" && (
            <button onClick={startGame}>Start Game</button>
          )}
          {currentGameState !== "not-started" && (
            <button onClick={resetGame}>Restart Game </button>
          )}
        </div>

        {isGameOver && (
          <div className="game-over-message">
            <h2>Game Over!</h2>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
