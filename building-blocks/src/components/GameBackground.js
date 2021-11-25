import { Image } from "react-konva";
import useImage from "use-image";

import backgroundImage from "../assets/map/GameBackground.png";

export const GameBackground = (props) => {
  const [image] = useImage(backgroundImage);
  return (
    <Image
      x={0}
      y={0}
      width={props.width}
      height={props.height}
      image={image}
    />
  );
};
