import { useState } from "react";
import { StartScreen } from "./StartScreen";
import { PlayScreen } from "./PlayScreen";

function App() {
  const [gameState, setGameState] = useState("play");

  switch (gameState) {
    case "start":
      return <StartScreen start={() => setGameState("play")} />;
    case "play":
      return <PlayScreen end={() => setGameState("start")} />;
    default:
      throw new Error("Invalid game state " + gameState);
  }
}

export default App;
