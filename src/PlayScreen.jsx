import { useState } from "react";
import confetti from "canvas-confetti";
import * as icons from "react-icons/gi";
import { Tile } from "./Tile";

export const possibleTileContents = [
  icons.GiHearts,
  icons.GiWaterDrop,
  icons.GiDiceSixFacesFive,
  icons.GiUmbrella,
  icons.GiCube,
  icons.GiBeachBall,
  icons.GiDragonfly,
  icons.GiHummingbird,
  icons.GiFlowerEmblem,
  icons.GiOpenBook,
];

// function PlayScreenInit({ end }) {
//     const [tiles, setTiles] = useState(null);
//     const [tryCount, setTryCount] = useState(0);
  
//     const getTiles = (tileCount) => {
//       // Throw error if count is not even.
//       if (tileCount % 2 !== 0) {
//         throw new Error("The number of tiles must be even.");
//       }
  
//       // Use the existing list if it exists.
//       if (tiles) return tiles;
  
//       const pairCount = tileCount / 2;
  
//       // Take only the items we need from the list of possibilities.
//       const usedTileContents = possibleTileContents.slice(0, pairCount);
  
//       // Double the array and shuffle it.
//       const shuffledContents = usedTileContents
//         .concat(usedTileContents)
//         .sort(() => Math.random() - 0.5)
//         .map((content) => ({ content, state: "start" }));
  
//       setTiles(shuffledContents);
//       return shuffledContents;
//     };
  
//     const flip = (i) => {
//       // Is the tile already flipped? We don’t allow flipping it back.
//       if (tiles[i].state === "flipped") return;
  
//       // How many tiles are currently flipped?
//       const flippedTiles = tiles.filter((tile) => tile.state === "flipped");
//       const flippedCount = flippedTiles.length;
  
//       // Don't allow more than 2 tiles to be flipped at once.
//       if (flippedCount === 2) return;
  
//       // On the second flip, check if the tiles match.
//       if (flippedCount === 1) {
//         setTryCount((c) => c + 1);
  
//         const alreadyFlippedTile = flippedTiles[0];
//         const justFlippedTile = tiles[i];
  
//         let newState = "start";
  
//         if (alreadyFlippedTile.content === justFlippedTile.content) {
//           confetti({
//             ticks: 100,
//           });
//           newState = "matched";
//         }
  
//         // After a delay, either flip the tiles back or mark them as matched.
//         setTimeout(() => {
//           setTiles((prevTiles) => {
//             const newTiles = prevTiles.map((tile) => ({
//               ...tile,
//               state: tile.state === "flipped" ? newState : tile.state,
//             }));
  
//             // If all tiles are matched, the game is over.
//             if (newTiles.every((tile) => tile.state === "matched")) {
//               setTimeout(end, 0);
//             }
  
//             return newTiles;
//           });
//         }, 1000);
//       }
  
//       setTiles((prevTiles) => {
//         return prevTiles.map((tile, index) => ({
//           ...tile,
//           state: i === index ? "flipped" : tile.state,
//         }));
//       });
//     };
  
//     return (
//       <>
//         <div>
//           {getTiles(6).map((tile, i) => (
//             <Tile key={i} flip={() => flip(i)} {...tile} />
//           ))}
//         </div>
//         {tryCount}
//       </>
//     );
//   }
export function PlayScreen({ end }) {

    const [tiles, setTiles] = useState(null);
    const [tryCount, setTryCount] = useState(0);
  
    const getTiles = (tileCount) => {
      // Throw error if count is not even.
      if (tileCount % 2 !== 0) {
        throw new Error("The number of tiles must be even.");
      }
  
      // Use the existing list if it exists.
      if (tiles) return tiles;
  
      const pairCount = tileCount / 2;
  
      // Take only the items we need from the list of possibilities.
      const usedTileContents = possibleTileContents.slice(0, pairCount);
  
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
              setTimeout(end, 0);
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
  
    return (
        <div className="w-screen h-screen text-blue-700 font-mono flex justify-center items-center">
        <div className=" flex flex-col items-center justify-center gap-8  ">
           <p className="capitalize">tries <span className="rounded align-middle p-1  bg-blue-100 ml-2 px-3">{tryCount}</span></p>
        <div className="grid grid-cols-4 grid-rows-4 gap-4 bg-blue-100 rounded-xl p-4">
          {getTiles(16).map((tile, i) => (
            <Tile key={i} flip={() => flip(i)} {...tile} />
          ))}
        </div>
      </div></div>
    );
    
  }