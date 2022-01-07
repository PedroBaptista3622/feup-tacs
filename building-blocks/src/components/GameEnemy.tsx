import { Image } from "react-konva";
import useImage from "use-image";

import { FacingDirection, Enemy } from "../Types";

import enemy_front from "../assets/enemy/enemy_front.png";
import enemy_back from "../assets/enemy/enemy_back.png";
import enemy_right from "../assets/enemy/enemy_right.png";
import enemy_left from "../assets/enemy/enemy_left.png";

interface GameCharacterProps {
    enemy: Enemy;
    tileSize: number;
}

const getPSPath = (facing: FacingDirection): string => {
    switch (facing) {
      case "north": {
        return enemy_back;
      }
      case "west": {
        return enemy_left;
      }
      case "east": {
        return enemy_right;
      }
      default: {
        return enemy_front;
      }
    }
  };

  export const GameCharacter = ({
    enemy,
    tileSize,
  }: GameCharacterProps) : JSX.Element => {
    const [image] = useImage(getPSPath(enemy.facing));
    return (
      <Image
        x={enemy.position.x * tileSize}
        y={enemy.position.y * tileSize}
        width={tileSize}
        height={tileSize}
        image={image}
      />
    );
  };
