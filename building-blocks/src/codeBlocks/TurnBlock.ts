import { BlockType, RotateTo } from "../Types";
import { Argument, ClosedArgument } from "./Argument";
import { CodeBlock } from "./CodeBlock";

export class TurnBlock implements CodeBlock {
  rotateTo: RotateTo | undefined;

  constructor(rotateTo?: RotateTo | undefined) {
    this.rotateTo = rotateTo;
  }

  generateCode = () => {
    if (this.rotateTo === "left") {
      return "this.g.turnPlayerLeft();";
    } else if (this.rotateTo === "right") {
      return "this.g.turnPlayerRight();";
    } else {
      return "console.log('Error')";
    }
  };

  getDisplayCode = () => this.generateCode();

  getDisplayInfo = (): string => `Turn ${this.rotateTo}`;

  getType = (): BlockType => "Turn";

  isComplete = () => this.rotateTo !== undefined;

  canStoreOtherBlocks = () => false;

  setRotateTo = (newValue: RotateTo): void => {
    this.rotateTo = newValue;
  };

  generateArguments = (): Argument[] => {
    let requiredArguments: Argument[] = [];

    let rotateToArg = new ClosedArgument(
      "Direction",
      "string",
      this.setRotateTo,
      ["left", "right"]
    );
    requiredArguments.push(rotateToArg);

    return requiredArguments;
  };
}
