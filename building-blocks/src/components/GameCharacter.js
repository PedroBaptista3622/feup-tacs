// import { Component } from "react";
// import useImage from "use-image";

// export class GameCharacter extends Component {
//   loadImages = (facing) => {
//     switch (facing) {
//       case "north": {
//         const [image] = useImage("../../assets/player/player_back.png");
//         return <Image image={image} />;
//       }
//       case "west": {
//         const [image] = useImage("../../assets/player/player_left.png");
//         return <Image image={image} />;
//         break;
//       }
//       case "east": {
//         const [image] = useImage("../../assets/player/player_right.png");
//         return <Image image={image} />;
//         break;
//       }
//       default: {
//         const [image] = useImage("../../assets/player/player_front.png");
//         return <Image image={image} />;
//       }
//     }
//   };

//   render = () => {
//     this.loadImages(this.props.facing);
//   };
// }
