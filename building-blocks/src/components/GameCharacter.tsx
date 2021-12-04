import { Image } from "react-konva";
import useImage from "use-image";

import { FacingDirection, Player } from "../Types";

import player_front from "../assets/player/player_front.png";
import player_back from "../assets/player/player_back.png";
import player_right from "../assets/player/player_right.png";
import player_left from "../assets/player/player_left.png";

interface GameCharacterProps {
  player: Player;
  tileSize: number;
}

const getPSPath = (facing: FacingDirection): string => {
  switch (facing) {
    case "north": {
      return player_back;
    }
    case "west": {
      return player_left;
    }
    case "east": {
      return player_right;
    }
    default: {
      return player_front;
    }
  }
};

export const GameCharacter = ({
  player,
  tileSize,
}: GameCharacterProps) : JSX.Element => {
  const [image] = useImage(getPSPath(player.facing));
  return (
    <Image
      x={player.position.x * tileSize}
      y={player.position.y * tileSize}
      width={tileSize}
      height={tileSize}
      image={image}
    />
  );
};
