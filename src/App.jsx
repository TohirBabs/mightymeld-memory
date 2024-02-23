import { useState } from "react";
import { StartScreen } from "./StartScreen";
import { PlayScreen } from "./PlayScreen";
import { WinScreen } from "./WinScreen";

function App() {
  const [gameState, setGameState] = useState("start");

  switch (gameState) {
    case "start":
      return <StartScreen start={() => setGameState("play")} />;
    case "play":
      return <PlayScreen end={() => setGameState("start")} start={() => setGameState("play")}/>;

    default:
      throw new Error("Invalid game state " + gameState);
  }
}

export default App;
