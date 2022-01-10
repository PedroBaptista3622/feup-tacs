import { BlockType } from "../Types";
import { CodeBlock } from "./CodeBlock";

export class WaitBlock implements CodeBlock {
  generateCode = () => "this.g.stopPlayer();";

  getDisplayInfo = (): string => "Wait";

  getType = (): BlockType => "Wait";

  isComplete = () => true;

  canStoreOtherBlocks = () => false;

  generateArguments = () => [];
}
