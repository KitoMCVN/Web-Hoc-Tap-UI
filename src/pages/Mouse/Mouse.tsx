import React, { useState, useEffect } from "react";

const Mouse: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [isGameRunning, setIsGameRunning] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [objects, setObjects] = useState<
    { id: number; x: number; y: number; visible: boolean }[]
  >([]);
  const [countdown, setCountdown] = useState<number>(3);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      startGame();
    }
  }, [countdown]);

  const startGame = () => {
    setIsGameRunning(true);
    setIsGameOver(false);
    setScore(0);
    setTimeLeft(30);
    generateObjects();
  };

  const endGame = () => {
    setIsGameRunning(false);
    setIsGameOver(true);
  };

  const generateObjects = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const shuffledObjects = [];
    const availablePositions = [];

    for (let i = 0; i < screenWidth * screenHeight; i++) {
      availablePositions.push(i);
    }

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * availablePositions.length);
      const positionIndex = availablePositions[randomIndex];
      const x = positionIndex % screenWidth;
      const y = Math.floor(positionIndex / screenWidth);
      shuffledObjects.push({
        id: i,
        x: x,
        y: y,
        visible: true,
      });
      availablePositions.splice(randomIndex, 1);
    }

    setObjects(shuffledObjects);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isGameRunning) {
      if (timeLeft > 0) {
        timer = setTimeout(() => {
          setTimeLeft((prevTime) => prevTime - 1);
          updateObjectVisibility();
        }, 1000);
      } else {
        endGame();
      }
    }

    return () => clearTimeout(timer);
  }, [isGameRunning, timeLeft]);

  const updateObjectVisibility = () => {
    const updatedObjects = objects.map((obj) => ({
      ...obj,
      visible: Math.random() > 0.5,
    }));
    setObjects(updatedObjects);
  };

  const handleClick = (objectId: number) => {
    if (isGameRunning) {
      setScore((prevScore) => prevScore + 1);
      const remainingObjects = objects.filter((obj) => obj.id !== objectId);
      setObjects(remainingObjects);
    }
  };

  return (
    <div
      className="size-full text-center overflow-hidden"
      style={{ height: `calc(100dvh - 100px)` }}
    >
      {isGameRunning ? (
        <>
          <div className="absolute top-[90px] right-0 text-right pr-10 text-slate-8 00">
            <p className="text-md">Score: {score}</p>
            <p className="text-md">Time Left: {timeLeft}</p>
          </div>
          <div className="size-full cursor-crosshair border border-slate-900/10 rounded-lg">
            {objects.map(
              (obj) =>
                obj.visible && (
                  <div
                    key={obj.id}
                    className="w-10 h-10 bg-red-500 relative rounded-full"
                    style={{
                      left: obj.x,
                      top: obj.y,
                      transition: "opacity 1s ease",
                    }}
                    onClick={() => handleClick(obj.id)}
                  >
                    <div className="animate-ping size-full rounded-full bg-red-500"></div>
                  </div>
                )
            )}
          </div>
        </>
      ) : isGameOver ? (
        <div className="size-full flex justify-center items-center">
          <div>
            <p className="text-5xl font-bold mb-3 text-slate-900 dark:text-slate-50">
              Game Over!
            </p>
            <p className="text-lg mb-4 dark:text-slate-300 text-slate-800">
              Điểm: {score}
            </p>
            <button
              className="bg-slate-900 hover:bg-slate-700 focus:outline-none text-slate-50 font-semibold h-10 px-6 rounded-lg w-full flex items-center justify-center dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
              onClick={startGame}
            >
              Chơi Lại
            </button>
          </div>
        </div>
      ) : (
        <div className="size-full flex justify-center items-center">
          <p className="text-5xl font-bold mb-4">Starting in {countdown}s...</p>
        </div>
      )}
    </div>
  );
};

export default Mouse;
