import { RotateTo } from "../Types";
import { CodeBlock } from "./CodeBlock";

export class TurnBlock implements CodeBlock {
  title: string = "Turn";
  rotateTo: RotateTo;

  constructor(direction: RotateTo) {
    this.rotateTo = direction;
  }

  generateCode = () => {
    const code: string =
      this.rotateTo === "left"
        ? "this.g.turnPlayerLeft();"
        : "this.g.turnPlayerRight();";

    return code;
  };

  getDisplayInfo = (): string => {
    return `Turn ${this.rotateTo}`;
  };
}
