import { Image } from "react-konva";
import useImage from "use-image";
import { Position } from "../Types";

import objectiveSprite from "../assets/objective/objective.png";
interface GameObjectiveProps {
  objectivePos: Position;
  tileSize: number;
}

export const GameObjective = ({
  tileSize,
  objectivePos,
}: GameObjectiveProps): JSX.Element => {
  const [image] = useImage(objectiveSprite);

  return (
    <Image
      x={objectivePos.x * tileSize}
      y={objectivePos.y * tileSize}
      width={tileSize}
      height={tileSize}
      image={image}
    />
  );
};
