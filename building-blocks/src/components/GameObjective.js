import { Image } from "react-konva";
import useImage from "use-image";

import objective1 from "../assets/objective/objective_1.png";
import objective2 from "../assets/objective/objective_2.png";
import objective3 from "../assets/objective/objective_3.png";
import objective4 from "../assets/objective/objective_4.png";

const getRandomObjectiveSpritePath = () => {
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

export const GameObjective = (props) => {
  const [image] = useImage(getRandomObjectiveSpritePath());
  return (
    <Image
      x={props.objectivePos.x * props.tileSize}
      y={props.objectivePos.y * props.tileSize}
      width={props.tileSize}
      height={props.tileSize}
      image={image}
    />
  );
};
