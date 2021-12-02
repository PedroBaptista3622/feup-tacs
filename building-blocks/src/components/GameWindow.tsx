import { ReactNode } from "react";
import { Stage, Layer } from "react-konva";
import { FullGameState } from "../Types";

import { GameBackground } from "./GameBackground";
import { GameCharacter } from "./GameCharacter";
import { GameObjective } from "./GameObjective";

interface GameWindowProps {
  gameState: FullGameState;
}

const GameWindow = ({ gameState }: GameWindowProps): ReactNode => {
  // Stage is a div container
  // Layer is actual canvas element (so you may have several canvases in the stage)
  // And then we have canvas shapes inside the Layer

  const windowSize = 400;
  const tileSize = windowSize / gameState.state.length;

  return (
    <Stage
      listening={false}
      width={windowSize}
      height={windowSize}
      className="Game"
    >
      <Layer>
        <GameBackground width={windowSize} height={windowSize} />
        <GameCharacter player={gameState.player} tileSize={tileSize} />
        <GameObjective
          objectivePos={gameState.objectivePos}
          tileSize={tileSize}
        />
      </Layer>
    </Stage>
  );
};

export default GameWindow;
