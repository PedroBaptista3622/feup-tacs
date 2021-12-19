import { BlockType } from "../Types";

export interface CodeBlock {
  getDisplayInfo: () => string;
  getType: () => BlockType;
  generateCode: () => string;
  isComplete: () => boolean;
  canStoreOtherBlocks: () => boolean;
}
