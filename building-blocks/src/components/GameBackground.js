import { Rect } from "react-konva";
import { Component } from "react";

export class GameBackground extends Component {
  render = () => {
    return (
      <Rect
        x={0}
        y={0}
        width={this.props.width}
        height={this.props.height}
        fill={this.props.color}
      />
    );
  };
}
