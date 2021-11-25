const facingDirections = {
  NORTH: "north",
  SOUTH: "south",
  WEST: "west",
  EAST: "east",
};

export class Game {
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
      facing: facingDirections.SOUTH,
      position: { x: 1, y: 1 },
    };

    this.objectivePos = { x: 9, y: 1 };
  }

  // Getters
  getGame = () => {
    return {
      state: this.state,
      player: this.player,
      objectivePos: this.objectivePos,
    };
  };

  getState = () => this.state;

  getPlayer = () => this.player;

  getObjectivePos = () => this.objectivePos;

  // Utils
  isMoveValid = (nextPos) => this.state[nextPos.y][nextPos.x] === "p";

  // Actual functionality
  movePlayer = () => {
    const currPos = this.player.position;
    let targetPos = {};

    switch (this.state) {
      case facingDirections.NORTH: {
        targetPos = { x: currPos.x, y: currPos.y - 1 };
        break;
      }
      case facingDirections.SOUTH: {
        targetPos = { x: currPos.x, y: currPos.y + 1 };
        break;
      }
      case facingDirections.EAST: {
        targetPos = { x: currPos.x + 1, y: currPos.y };
        break;
      }
      case facingDirections.WEST: {
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

  turnPlayerRight = () => {
    switch (this.player.facing) {
      case facingDirections.NORTH: {
        this.player.facing = facingDirections.EAST;
        break;
      }
      case facingDirections.EAST: {
        this.player.facing = facingDirections.SOUTH;
        break;
      }
      case facingDirections.SOUTH: {
        this.player.facing = facingDirections.WEST;
        break;
      }
      case facingDirections.WEST: {
        this.player.facing = facingDirections.NORTH;
        break;
      }
      default: {
        return;
      }
    }
  };

  turnPlayerLeft = () => {
    switch (this.player.facing) {
      case facingDirections.NORTH: {
        this.player.facing = facingDirections.WEST;
        break;
      }
      case facingDirections.WEST: {
        this.player.facing = facingDirections.SOUTH;
        break;
      }
      case facingDirections.SOUTH: {
        this.player.facing = facingDirections.EAST;
        break;
      }
      case facingDirections.EAST: {
        this.player.facing = facingDirections.NORTH;
        break;
      }
      default: {
        return;
      }
    }
  };
}
