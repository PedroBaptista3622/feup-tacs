import { Stage, Layer } from "react-konva";
import { FullGameState } from "../Types";

import { GameBackground } from "./GameBackground";
import { GameCharacter } from "./GameCharacter";
import { GameEnemy } from "./GameEnemy";
import { GameObjective } from "./GameObjective";

interface GameWindowProps {
  gameState: FullGameState;
}

const GameWindow = ({ gameState }: GameWindowProps): JSX.Element => {
  const windowSize: number = 400;
  const tileSize: number = windowSize / gameState.state.length;
  const { player, enemy, objectivePos } = gameState;

  return (
    <Stage
      listening={false}
      width={windowSize}
      height={windowSize}
      className="Game"
    >
      <Layer>
        <GameBackground width={windowSize} height={windowSize} />
        <GameCharacter player={player} tileSize={tileSize} />
        <GameEnemy enemy={enemy} tileSize={tileSize} />
        <GameObjective objectivePos={objectivePos} tileSize={tileSize} />
      </Layer>
    </Stage>
  );
};

export default GameWindow;
