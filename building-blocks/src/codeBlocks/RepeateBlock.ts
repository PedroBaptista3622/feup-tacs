import { BlockType } from "../Types";
import { CodeBlock } from "./CodeBlock";
import { buildCodeBlock } from "../utils/CodeBlockFactory";
import { HolderCodeBlock } from "./HolderCodeBlock";

export class RepeatNTimesBlock implements HolderCodeBlock {
  storedBlocks: CodeBlock[] = [];

  generateCode = () => "console.log('WIP');";

  getDisplayInfo = (): string => "Repeate WIP";

  getType = (): BlockType => "Repeat";

  isComplete = () => true;

  canStoreOtherBlocks = () => true;

  addBlock = (blockType: BlockType) => {
    const block: CodeBlock = buildCodeBlock(blockType);
    this.storedBlocks.push(block);
  };

  getInnerBlocks = (): CodeBlock[] => this.storedBlocks;
}
