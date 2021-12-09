import { RotateTo } from "../Types";
import { CodeBlock } from "./CodeBlock";

export class TurnBlock implements CodeBlock {
  rotateTo: RotateTo;

  constructor(direction: RotateTo) {
    this.rotateTo = direction;
  }

  generateCode = () => {
    const code: string =
      this.rotateTo === "left" ? "g.turnPlayerLeft();" : "g.turnPlayerRight();";

    return code;
  };
}
