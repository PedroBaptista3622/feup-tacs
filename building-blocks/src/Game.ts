import { FullGameState, GameState, Player, Enemy, Position } from "./Types";

export class Game {
  state: GameState;
  player: Player;
  enemy: Enemy;
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

    this.enemy = {
      facing: "south",
      position: { x: 5, y: 1 },
    }

    this.objectivePos = { x: 9, y: 1 };
  }

  // Getters
  getGame = (): FullGameState => {
    return {
      state: this.state,
      player: this.player,
      enemy: this.enemy,
      objectivePos: this.objectivePos,
    };
  };

  getState = (): GameState => this.state;

  getPlayer = (): Player => this.player;

  getEnemy = (): Enemy => this.enemy;

  getObjectivePos = (): Position => this.objectivePos;

  // Utils
  isMoveValid = (nextPos: Position): boolean =>
    this.state[nextPos.y][nextPos.x] === "p" && (nextPos.x !== this.enemy.position.x || nextPos.y !== this.enemy.position.y);

  isEnemyMoveValid = (nextPos: Position): boolean =>
    this.state[nextPos.y][nextPos.x] === "p" && (nextPos.x !== this.player.position.x || nextPos.y !== this.player.position.y);

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

  stopPlayer = (): void => {
    console.log("I am waiting");
  };

  runSimpleGame = (path: String[]): boolean => {

    path.forEach((block) => {
      if (block === 'M') {
        this.movePlayer()
      }
      if (block === 'L') {
        this.turnPlayerLeft()
      }
      if (block === 'R') {
        this.turnPlayerRight()
      }
    })

    return this.player.position.x === this.getObjectivePos().x && this.player.position.y === this.getObjectivePos().y

  }

  moveEnemy = (): void => {
    const currPos: Position = this.enemy.position;
    let targetPos: Position;

    switch (this.getEnemy().facing) {
      case "north": {
        targetPos = { x: currPos.x, y: currPos.y - 1 };
        if (this.state[targetPos.y][targetPos.x] === "w") {
          this.enemy.facing = "west";
        }
        break;
      }
      case "south": {
        targetPos = { x: currPos.x, y: currPos.y + 1 };
        if (this.state[targetPos.y][targetPos.x] === "w") {
          this.enemy.facing = "east";
        }
        break;
      }
      case "east": {
        targetPos = { x: currPos.x + 1, y: currPos.y };
        if (this.enemy.position.x === 5) {
          this.enemy.facing = "north";
        }
        break;
      }
      case "west": {
        targetPos = { x: currPos.x - 1, y: currPos.y };
        if (this.state[targetPos.y][targetPos.x] === "w") {
          this.enemy.facing = "south";
        }
        break;
      }
      default: {
        return;
      }
    }

    if (this.isEnemyMoveValid(targetPos)) {
      this.enemy.position = targetPos;
    }
  }
}
