import { ReactNode } from "react";
import { Image } from "react-konva";
import useImage from "use-image";
import { Position } from "../Types";

import objective1 from "../assets/objective/objective_1.png";
import objective2 from "../assets/objective/objective_2.png";
import objective3 from "../assets/objective/objective_3.png";
import objective4 from "../assets/objective/objective_4.png";

interface GameObjectiveProps {
  objectivePos: Position;
  tileSize: number;
}

const getRandomObjectiveSpritePath = (): string => {
  const objective_number = Math.floor(Math.random() * 4) + 1; // random numbers in [1, 4]
  switch (objective_number) {
    case 1: {
      return objective1;
    }
    case 2: {
      return objective2;
    }
    case 3: {
      return objective3;
    }
    default: {
      return objective4;
    }
  }
};

export const GameObjective = ({
  tileSize,
  objectivePos,
}: GameObjectiveProps): ReactNode => {
  const [image] = useImage(getRandomObjectiveSpritePath());
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
