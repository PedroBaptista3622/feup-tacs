import { Stage, Layer } from "react-konva";
import { Component } from "react";

import { GameBackground } from "./GameBackground";
import { GameWall } from "./GameWall";

class GameWindow extends Component {
  makeWallComponents = (gameState, tileSize) => {
    const rectangleList = [];

    for (let i = 0; i < gameState.length; i++) {
      for (let j = 0; j < gameState[i].length; j++) {
        if (gameState[i][j] === "w") {
          rectangleList.push(
            <GameWall tileSize={tileSize} x={j * tileSize} y={i * tileSize} />
          );
        }
      }
    }

    return rectangleList;
  };

  render() {
    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer

    const windowSize = 400;
    const tileSize = windowSize / this.props.gameState.state.length;

    return (
      <Stage listening={false} width={windowSize} height={windowSize}>
        <Layer>
          <GameBackground
            color="green"
            width={windowSize}
            height={windowSize}
          />
          {this.makeWallComponents(this.props.gameState.state, tileSize)}
        </Layer>
      </Stage>
    );
  }
}

export default GameWindow;
