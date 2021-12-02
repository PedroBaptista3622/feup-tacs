import { Image } from "react-konva";
import useImage from "use-image";

import backgroundImage from "../assets/map/GameBackground.png";

interface GameBackgroundProps {
  width: number;
  height: number;
}

export const GameBackground = ({ width, height }: GameBackgroundProps) : JSX.Element => {
  const [image] = useImage(backgroundImage);
  return <Image x={0} y={0} width={width} height={height} image={image} />;
};
