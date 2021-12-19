import { BaseSyntheticEvent } from "react";
import { CodeBlock } from "../codeBlocks/CodeBlock";

type BlockProps = {
  block: CodeBlock;
};

const Block = ({ block }: BlockProps): JSX.Element => {
  const handleDragStart = (e: any) => {
    e.target.style.opacity = "0.4";

    e.dataTransfer.setData("blockType", block.getType());
  };

  const handleDragEnd = (e: BaseSyntheticEvent) => {
    e.target.style.opacity = "1";
  };

  return (
    <div
      draggable
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      className="draggable_card"
    >
      {block.getType()}
    </div>
  );
};

export default Block;
