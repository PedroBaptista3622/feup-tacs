import { BlockType, RotateTo } from "../Types";
import { CodeBlock } from "./CodeBlock";

export class TurnBlock implements CodeBlock {
  rotateTo: RotateTo | undefined;

  constructor(direction?: RotateTo) {
    this.rotateTo = direction;
  }

  generateCode = () =>
    this.rotateTo === "left"
      ? "this.g.turnPlayerLeft();"
      : "this.g.turnPlayerRight();";

  getDisplayInfo = (): string => `Turn ${this.rotateTo}`;

  getType = (): BlockType => "Turn";

  isComplete = () => this.rotateTo !== undefined;
}
