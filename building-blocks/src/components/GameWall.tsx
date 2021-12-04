import { ReactNode } from "react";
import { Rect } from "react-konva";

interface GameWallProps {
  x: number;
  y: number;
  tileSize: number;
}

const GameWall = ({ x, y, tileSize }: GameWallProps): ReactNode => {
  return (
    <Rect
      x={x}
      y={y}
      width={tileSize}
      height={tileSize}
      fill={"red"}
      shadowBlur={1}
    />
  );
};

export default GameWall;
