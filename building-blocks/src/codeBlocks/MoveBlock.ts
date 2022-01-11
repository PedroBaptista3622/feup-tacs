import { BlockType } from "../Types";
import { CodeBlock } from "./CodeBlock";

export class MoveBlock implements CodeBlock {
  generateCode = () => "this.g.movePlayer();";

  getDisplayCode = () => this.generateCode();

  getDisplayInfo = (): string => "Move Player";

  getType = (): BlockType => "Move";

  isComplete = () => true;

  canStoreOtherBlocks = () => false;

  generateArguments = () => [];
}
