export type FacingDirection = "north" | "west" | "east" | "south";

export type RotateTo = "right" | "left";

export type Position = {
  x: number;
  y: number;
};

export type Player = {
  facing: FacingDirection;
  position: Position;
};

export type Tile = "w" | "p";

type GameLine = [
  Tile,
  Tile,
  Tile,
  Tile,
  Tile,
  Tile,
  Tile,
  Tile,
  Tile,
  Tile,
  Tile
];

export type GameState = [
  GameLine,
  GameLine,
  GameLine,
  GameLine,
  GameLine,
  GameLine,
  GameLine,
  GameLine,
  GameLine,
  GameLine,
  GameLine
];

export type FullGameState = {
  state: GameState;
  player: Player;
  objectivePos: Position;
};

export type BlockType = "Move" | "Turn" | "Repeat" | "Wait";