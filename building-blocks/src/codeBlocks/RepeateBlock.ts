import { BlockType } from "../Types";
import { CodeBlock } from "./CodeBlock";
import { buildCodeBlock } from "../utils/CodeBlockFactory";
import { HolderCodeBlock } from "./HolderCodeBlock";
import { Argument, OpenArgument } from "./Argument";

export class RepeatNTimesBlock implements HolderCodeBlock {
  storedBlocks: CodeBlock[] = [];
  numIter: number | undefined = undefined;

  constructor(numIter?: number | undefined, storedBlock?: CodeBlock | undefined) {
    this.numIter = numIter;
    if(storedBlock !== undefined) {
      console.log("111");
      console.log(storedBlock.getDisplayCode());
      //const block: CodeBlock = lang.statement.tryParse(storedBlocks);
      this.storedBlocks.push(storedBlock);
    }
  }

  generateCode = () =>
    `for (let i = 0; i < ${
      this.numIter
    }; i++) { ${this.generateInnerBlocksCode()} }`;

  generateInnerBlocksCode = () => {
    let innerCodeStatements: string[] = [];

    this.storedBlocks.forEach((block) => {
      innerCodeStatements.push(block.generateCode());
      if (!(block instanceof RepeatNTimesBlock)) {
        innerCodeStatements.push("this.g.moveEnemy();");
        innerCodeStatements.push("await this.sleep(1000);");
      }
    });

    return innerCodeStatements.join(" ");
  };

  getDisplayCode = () =>
    `for (let i = 0; i < ${
      this.numIter
    }; i++) { ${this.generateInnerBlocksCodeDisplay()} }`;

  generateInnerBlocksCodeDisplay = () => {
    let innerCodeStatements: string[] = [];

    this.storedBlocks.forEach((block) => {
      innerCodeStatements.push(block.getDisplayCode());
    });

    return innerCodeStatements.join(" ");
  };

  getDisplayInfo = (): string => "Repeate";

  getType = (): BlockType => "Repeat";

  isComplete = (): boolean => {
    return (
      this.numIter !== undefined &&
      this.storedBlocks.every((block) => block.isComplete())
    );
  };

  canStoreOtherBlocks = () => true;

  addBlock = (newBlock: CodeBlock) => {
    this.storedBlocks.push(newBlock);
  };

  buildAddBlock = (blockType: BlockType) => {
    const block: CodeBlock = buildCodeBlock(blockType);
    this.addBlock(block);
  };

  getInnerBlocks = (): CodeBlock[] => this.storedBlocks;

  setNumIter = (newValue: number) => {
    this.numIter = newValue;
  };

  generateArguments = (): Argument[] => {
    let requiredArguments: Argument[] = [];

    let rotateToArg = new OpenArgument(
      "Number iterations",
      "number",
      this.setNumIter,
      20,
      1
    );
    requiredArguments.push(rotateToArg);

    return requiredArguments;
  };

  removeInnerBlock = (block: CodeBlock): void => {
    const index = this.storedBlocks.indexOf(block);
    if (index > -1) {
      this.storedBlocks.splice(index, 1);
    }
  };
}
