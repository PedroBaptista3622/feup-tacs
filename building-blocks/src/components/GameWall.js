import { Component } from "react";
import { Rect } from "react-konva";

export class GameWall extends Component {
  render() {
    return (
      <Rect
        x={this.props.x}
        y={this.props.y}
        width={this.props.tileSize}
        height={this.props.tileSize}
        fill={"red"}
        shadowBlur={1}
      />
    );
  }
}
