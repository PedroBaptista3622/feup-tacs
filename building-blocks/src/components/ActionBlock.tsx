import React from "react";
import { CodeBlock } from "../codeBlocks/CodeBlock";
import { HolderCodeBlock } from "../codeBlocks/HolderCodeBlock";
import { RepeatNTimesBlock } from "../codeBlocks/RepeateBlock";
import { BlockType } from "../Types";
import { buildCodeBlock } from "../utils/CodeBlockFactory";

type ActionBlockProps = {
  block: CodeBlock;
};

const ActionBlock = ({ block }: ActionBlockProps): JSX.Element => {
  const buildInnerBlocks = (block: HolderCodeBlock) => {
    const innerBlocks: any[] = [];

    block.getInnerBlocks().forEach((val: CodeBlock) => {
      innerBlocks.push(<div className="card">{val.getType()}</div>);
    });

    return innerBlocks;
  };

  const handleDrop = (dragEvent: React.DragEvent) => {
    dragEvent.preventDefault();

    if (dragEvent !== null && dragEvent.dataTransfer !== null) {
      const blockTypeTransfered: string =
        dragEvent.dataTransfer.getData("blockType");
      const blockType: BlockType = blockTypeTransfered as BlockType;
      addBlock(blockType);
    }
  };

  const addBlock = (blockType: BlockType) => {
    const newBlock: CodeBlock = buildCodeBlock(blockType);
    
    // Always true
    if (block instanceof RepeatNTimesBlock) {
      block.addBlock(newBlock);
    }
  };

  return block instanceof RepeatNTimesBlock ? (
    <div onDrop={handleDrop} className="card">
      {block.getType()}
      {buildInnerBlocks(block)}
    </div>
  ) : (
    <div className="card">{block.getType()}</div>
  );
};

export default ActionBlock;
