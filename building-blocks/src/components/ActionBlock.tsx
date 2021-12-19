import { BaseSyntheticEvent } from "react";
import { CodeBlock } from "../codeBlocks/CodeBlock";
import { HolderCodeBlock } from "../codeBlocks/HolderCodeBlock";
import { RepeatNTimesBlock } from "../codeBlocks/RepeateBlock";

type ActionBlockProps = {
  block: CodeBlock;
};

const ActionBlock = ({ block }: ActionBlockProps): JSX.Element => {
  const handleDragStart = (e: any) => {
    e.target.style.opacity = "0.4";

    e.dataTransfer.setData("blockType", block.getType());
  };

  const handleDragEnd = (e: BaseSyntheticEvent) => {
    e.target.style.opacity = "1";
  };

  const buildInnerBlocks = (block: HolderCodeBlock) => {
    const innerBlocks: any[] = [];

    block.getInnerBlocks().forEach((val: CodeBlock) => {
      innerBlocks.push(<div className="card">{val.getType()}</div>);
    });

    return innerBlocks;
  };

  return block instanceof RepeatNTimesBlock ? (
    <div className="card">
      {block.getType()}
      {buildInnerBlocks(block)}
    </div>
  ) : (
    <div className="card">{block.getType()}</div>
  );
};

export default ActionBlock;
