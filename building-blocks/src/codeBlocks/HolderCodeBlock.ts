import { CodeBlock } from "./CodeBlock";

export interface HolderCodeBlock extends CodeBlock {
  storedBlocks: CodeBlock[];
  addBlock: (newBlock: CodeBlock) => void;
  getInnerBlocks: () => CodeBlock[];
  removeInnerBlock : (block : CodeBlock) => void;
}
