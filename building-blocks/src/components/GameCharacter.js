import { Image } from "react-konva";
import useImage from "use-image";

import player_front from "../assets/player/player_front.png";
import player_back from "../assets/player/player_back.png";
import player_right from "../assets/player/player_right.png";
import player_left from "../assets/player/player_left.png";

const getPSPath = (facing) => {
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

export const GameCharacter = (props) => {
  const [image] = useImage(getPSPath(props.player.facing));
  return (
    <Image
      x={props.player.position.x * props.tileSize}
      y={props.player.position.y * props.tileSize}
      width={props.tileSize}
      height={props.tileSize}
      image={image}
    />
  );
};
