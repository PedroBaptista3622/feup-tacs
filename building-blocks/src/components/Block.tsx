import React from "react";
import { CodeBlock } from "../codeBlocks/CodeBlock";

type BlockProps = {
  block: CodeBlock;
};

const Block = ({ block }: BlockProps): JSX.Element => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    target.style.opacity = "0.4";

    e.dataTransfer.setData("blockType", block.getType());
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    target.style.opacity = "1";
  };

  return (
    <div
      draggable
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      className="draggable blocks_card"
    >
      {block.getType()}
    </div>
  );
};

export default Block;
