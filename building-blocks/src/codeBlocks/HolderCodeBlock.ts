import { BlockType } from "../Types";
import { CodeBlock } from "./CodeBlock";

export interface HolderCodeBlock extends CodeBlock {
  storedBlocks: CodeBlock[];
  addBlock: (blockType: BlockType) => void;
  getInnerBlocks: () => CodeBlock[];
}
