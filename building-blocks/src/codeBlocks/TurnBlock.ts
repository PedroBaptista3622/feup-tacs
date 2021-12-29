import { BlockType, RotateTo } from "../Types";
import { Argument, ClosedArgument } from "./Argument";
import { CodeBlock } from "./CodeBlock";

export class TurnBlock implements CodeBlock {
  rotateTo: RotateTo | undefined;

  generateCode = () =>
    this.rotateTo === "left"
      ? "this.g.turnPlayerLeft();"
      : "this.g.turnPlayerRight();";

  getDisplayInfo = (): string => `Turn ${this.rotateTo}`;

  getType = (): BlockType => "Turn";

  isComplete = () => this.rotateTo !== undefined;

  canStoreOtherBlocks = () => false;

  setRotateTo = (newValue: RotateTo): void => {};

  generateArguments = (): Argument[] => {
    let requiredArguments: Argument[] = [];

    let rotateToArg = new ClosedArgument("string", this.setRotateTo, ["left", "right"]);
    requiredArguments.push(rotateToArg);

    return requiredArguments;
  };
}
