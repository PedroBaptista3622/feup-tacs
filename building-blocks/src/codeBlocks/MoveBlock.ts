import { BlockType } from "../Types";
import { CodeBlock } from "./CodeBlock";

export class MoveBlock implements CodeBlock {
  generateCode = () => "this.g.movePlayer();";

  getDisplayInfo = (): string => "Move Player";

  getType = (): BlockType => "Move";

  isComplete = () => true;

  canStoreOtherBlocks = () => false;

  generateArguments = () => [];
}
