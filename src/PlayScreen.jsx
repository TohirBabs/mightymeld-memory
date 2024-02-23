import { useState } from "react";
import confetti from "canvas-confetti";
import * as icons from "react-icons/gi";
import { Tile } from "./Tile";
import CountdownTimer from "./CountdownTimer";

export const possibleTileEmojis = [
  "🐼",
  "💀",
  "👺",
  "👽",
  "👻",
  "🤖",
  "🎃",
  "🤡",
  "🥶",
];

export function PlayScreen({ end, start }) {
  const [tiles, setTiles] = useState(null); 
   const [playState, setPlayState] = useState("playing");
  const [tryCount, setTryCount] = useState(0);
  const Tiles =[]

  var duration = 2 * 1000;
var animationEnd = Date.now() + duration;
var skew = 1;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function frame() {
  var timeLeft = animationEnd - Date.now();
  var ticks = Math.max(200, 500 * (timeLeft / duration));
  skew = Math.max(0.8, skew - 0.001);

  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      // since particles fall down, skew start toward the top
      y: (Math.random() * skew) - 0.2
    },
    colors: ['#ffffff'],
    shapes: ['circle'],
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4)
  });

  if (timeLeft > 0) {
    requestAnimationFrame(frame);
  }
}

  if (playState === "win") {
    frame()
  
  }



  const getTiles = (tileCount) => {
    // Throw error if count is not even.
    if (tileCount % 2 !== 0) {
      throw new Error("The number of tiles must be even.");
    }

    // Use the existing list if it exists.
    if (tiles) return tiles;

    const pairCount = tileCount / 2;

    // Take only the items we need from the list of possibilities.
    const usedTileContents = possibleTileEmojis.slice(0, pairCount);

    // Double the array and shuffle it.
    const shuffledContents = usedTileContents
      .concat(usedTileContents)
      .sort(() => Math.random() - 0.5)
      .map((content) => ({ content, state: "start" }));

    setTiles(shuffledContents);
    return shuffledContents;
  };

  const flip = (i) => {
    // Is the tile already flipped? We don’t allow flipping it back.
    if (tiles[i].state === "flipped") return;

    // How many tiles are currently flipped?
    const flippedTiles = tiles.filter((tile) => tile.state === "flipped");
    const flippedCount = flippedTiles.length;

    // Don't allow more than 2 tiles to be flipped at once.
    if (flippedCount === 2) return;

    // On the second flip, check if the tiles match.
    if (flippedCount === 1) {
      setTryCount((c) => c + 1);

      const alreadyFlippedTile = flippedTiles[0];
      const justFlippedTile = tiles[i];

      let newState = "start";

      if (alreadyFlippedTile.content === justFlippedTile.content) {
        confetti({
          ticks: 100,
        });
        newState = "matched";
      }
      // After a delay, either flip the tiles back or mark them as matched.
      setTimeout(() => {
        setTiles((prevTiles) => {
          const newTiles = prevTiles.map((tile) => ({
            ...tile,
            state: tile.state === "flipped" ? newState : tile.state,
          }));

          // If all tiles are matched, the game is over.
          if (newTiles.every((tile) => tile.state === "matched")) {
            setTimeout(setPlayState("win"), 0);
          }
          return newTiles;
        });
      }, 1000);
    }

    setTiles((prevTiles) => {
      return prevTiles.map((tile, index) => ({
        ...tile,
        state: i === index ? "flipped" : tile.state,
      }));
    });
  };

  
console.log(playState);
  return (   
    <>
      <div className="w-screen h-screen flex items-center justify-between flex-col gap-8 font-mono bg-black">
        <div className="flex justify-between w-full p-3 ">
          <img src="logo1.svg" className="h-10"></img>
          {playState === "playing" ?
                    <CountdownTimer lose={setPlayState}/>: 
                    <p className="md:text-4xl text-2xl text-white">
          
          00:00.
          <span className="text-base md:text-lg">00</span>
        </p>
                  }
        </div>

        <div className="pt-[10vh] md:pt-0 flex flex-col gap-6">
          <div className="flex flex-col gap-2 text-white">
            <p className="capitalize text-right  text-white text-2xl">
              tries{" "}
              <span className="h-[60px] w-[60px] text-3xl font-bold flex flex-col items-center justify-center text rounded-md text-black bg-white">{tryCount}</span>
            </p>
          </div>
          {playState === "win" ? <div className="bg-pink-400 rounded-3xl flex flex-col justify-between p-6 h-[340px] w-[340px] md:h-[412px] md:w-[412px]">
            <p className="md:text-5xl text-3xl leading-tight">🔥  <br/> wow! you breezed throgh that</p>
            <button
          onClick={()=> {setTiles(null); setPlayState("playing"); setTryCount(0)}}
          className="bg-white rounded-xl w-full text-lg md:text-xl text-black p-3"
        >
          Play Again
        </button>
           </div>:
                     playState === "lose"?
           <div className="bg-pink-400 rounded-3xl flex flex-col justify-between p-6 h-[340px] w-[340px] md:h-[412px] md:w-[412px]">
            <p className="md:text-5xl text-3xl leading-tight">🤏 <br/> ohh! you were soo close</p>
            <button
                      onClick={()=> {setTiles(null); setPlayState("playing"); setTryCount(0)}}

          className="bg-white rounded-xl w-full text-lg md:text-xl text-black p-3"
        >
          Play Again
        </button>
           </div>:
            <div className="grid grid-cols-4 grid-rows-4 gap-1">
            {getTiles(16).map((tile, i) => (
              <Tile key={i} flip={() => flip(i)} {...tile} />
            ))}
          </div>}
        </div>
        <div className="flex w-full text-white justify-center p-4">
          <div />
          <p>
            developed by{" "}
            <a href="https://tohir-babs.vercel.app/" className="underline">
              panda🐼
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
