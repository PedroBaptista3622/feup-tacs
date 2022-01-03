import { FullGameState, GameState, Player, Position } from "./Types";

export class Game {
  state: GameState;
  player: Player;
  objectivePos: Position;

  constructor() {
    this.state = [
      ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
      ["w", "p", "p", "p", "w", "p", "p", "p", "w", "p", "w"],
      ["w", "p", "w", "p", "w", "p", "p", "w", "w", "p", "w"],
      ["w", "p", "w", "p", "w", "p", "p", "p", "w", "p", "w"],
      ["w", "p", "p", "p", "p", "p", "p", "w", "w", "p", "w"],
      ["w", "p", "w", "p", "p", "p", "p", "p", "w", "p", "w"],
      ["w", "p", "w", "p", "w", "p", "p", "w", "w", "p", "w"],
      ["w", "p", "w", "p", "w", "p", "p", "p", "p", "p", "w"],
      ["w", "p", "w", "p", "w", "p", "p", "w", "w", "p", "w"],
      ["w", "p", "w", "p", "p", "p", "p", "p", "w", "p", "w"],
      ["w", "w", "w", "w", "w", "w", "w", "w", "w", "w", "w"],
    ];

    this.player = {
      facing: "south",
      position: { x: 1, y: 1 },
    };

    this.objectivePos = { x: 9, y: 1 };
  }

  // Getters
  getGame = (): FullGameState => {
    return {
      state: this.state,
      player: this.player,
      objectivePos: this.objectivePos,
    };
  };

  getState = (): GameState => this.state;

  getPlayer = (): Player => this.player;

  getObjectivePos = (): Position => this.objectivePos;

  // Utils
  isMoveValid = (nextPos: Position): boolean =>
    this.state[nextPos.y][nextPos.x] === "p";

  // Actual functionality
  movePlayer = (): void => {
    const currPos: Position = this.player.position;
    let targetPos: Position;

    switch (this.getPlayer().facing) {
      case "north": {
        targetPos = { x: currPos.x, y: currPos.y - 1 };
        break;
      }
      case "south": {
        targetPos = { x: currPos.x, y: currPos.y + 1 };
        break;
      }
      case "east": {
        targetPos = { x: currPos.x + 1, y: currPos.y };
        break;
      }
      case "west": {
        targetPos = { x: currPos.x - 1, y: currPos.y };
        break;
      }
      default: {
        return;
      }
    }

    if (this.isMoveValid(targetPos)) {
      this.player.position = targetPos;
    }
  };

  turnPlayerLeft = (): void => {
    switch (this.getPlayer().facing) {
      case "north": {
        this.player.facing = "east";
        break;
      }
      case "east": {
        this.player.facing = "south";
        break;
      }
      case "south": {
        this.player.facing = "west";
        break;
      }
      case "west": {
        this.player.facing = "north";
        break;
      }
      default: {
        return;
      }
    }
  };

  turnPlayerRight = (): void => {
    switch (this.getPlayer().facing) {
      case "north": {
        this.player.facing = "west";
        break;
      }
      case "west": {
        this.player.facing = "south";
        break;
      }
      case "south": {
        this.player.facing = "east";
        break;
      }
      case "east": {
        this.player.facing = "north";
        break;
      }
      default: {
        return;
      }
    }
  };

  stopPlayer = () : void => {
    console.log("I am waiting");
  };
}
