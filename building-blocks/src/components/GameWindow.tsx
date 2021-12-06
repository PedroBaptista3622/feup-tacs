import { Component } from "react";
import { Stage, Layer } from "react-konva";
import { FullGameState } from "../Types";

import { GameBackground } from "./GameBackground";
import { GameCharacter } from "./GameCharacter";
import { GameObjective } from "./GameObjective";

interface GameWindowProps {
  gameState: FullGameState;
}

class GameWindow extends Component<GameWindowProps, FullGameState> {
  // Stage is a div container
  // Layer is actual canvas element (so you may have several canvases in the stage)
  // And then we have canvas shapes inside the Layer

  windowSize = 400;

  state: FullGameState = this.props.gameState;

  tileSize = this.windowSize / this.state.state.length;

  interval: any;

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState(this.props.gameState),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Stage
        listening={false}
        width={this.windowSize}
        height={this.windowSize}
        className="Game"
      >
        <Layer>
          <GameBackground width={this.windowSize} height={this.windowSize} />
          <GameCharacter player={this.state.player} tileSize={this.tileSize} />
          <GameObjective
            objectivePos={this.state.objectivePos}
            tileSize={this.tileSize}
          />
        </Layer>
      </Stage>
    );
  }
}

export default GameWindow;
