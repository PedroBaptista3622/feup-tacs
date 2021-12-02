export type FacingDirection = "north" | "west" | "east" | "south";

export type Position = {
  x: number;
  y: number;
};

export type Player = {
  facing: FacingDirection;
  position: Position;
};
