import { Stage, Layer, Rect } from "react-konva";
import { Component } from "react";

import { GameBackground } from "./GameBackground";

class ColoredRect extends Component {
  state = {
    color: this.props.color,
  };

  // handleClick = () => {
  //   this.setState({
  //     color: Konva.Util.getRandomColor(),
  //   });
  // };

  render() {
    return (
      <Rect
        x={this.props.x}
        y={this.props.y}
        width={40}
        height={40}
        fill={this.state.color}
        shadowBlur={1}
      />
    );
  }
}

class GameWindow extends Component {
  getRectangles = () => {
    const rectangleList = [];

    for (let i = 0; i < this.props.gameState.length; i++) {
      for (let j = 0; j < this.props.gameState[i].length; j++) {
        this.props.gameState[i][j] === "x"
          ? rectangleList.push(
              <ColoredRect x={50 * i} y={50 * j} color="red" />
            )
          : rectangleList.push(
              <ColoredRect x={50 * i} y={50 * j} color="blue" />
            );
      }
    }

    return rectangleList;
  };

  render() {
    // Stage is a div container
    // Layer is actual canvas element (so you may have several canvases in the stage)
    // And then we have canvas shapes inside the Layer

    const width = 400;
    const height = 400;

    return (
      <Stage listening={false} width={width} height={height}>
        <Layer>
          <GameBackground color="green" width={width} height={height} />
          {this.getRectangles()}
        </Layer>
      </Stage>
    );
  }
}

export default GameWindow;
