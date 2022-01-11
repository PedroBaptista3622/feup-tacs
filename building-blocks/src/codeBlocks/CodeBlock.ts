import { BlockType } from "../Types";
import { Argument } from "./Argument";

export interface CodeBlock {
  getDisplayInfo: () => string;
  getType: () => BlockType;
  generateCode: () => string;
  getDisplayCode : () => string;
  isComplete: () => boolean;
  canStoreOtherBlocks: () => boolean;
  generateArguments: () => Argument[];
}
