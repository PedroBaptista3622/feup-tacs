import { CodeBlock } from "../codeBlocks/CodeBlock";
import { BlockType } from "../Types";
import { buildCodeBlock } from "../utils/CodeBlockFactory";
import ActionBlock from "./ActionBlock";

import React from "react";

interface PlaygroundProps {
  codeBlocks: CodeBlock[];
  appendCodeBlock: (block: CodeBlock) => void;
}

const PlaygroundComponent = ({
  codeBlocks,
  appendCodeBlock,
}: PlaygroundProps): JSX.Element => {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (dragEvent: React.DragEvent<HTMLDivElement>) => {
    dragEvent.preventDefault();
    const target: HTMLDivElement = dragEvent.target as HTMLDivElement;

    if (target.id === "playgroundBody") {
      const blockTypeTransfered: string =
        dragEvent.dataTransfer.getData("blockType");
      const blockType: BlockType = blockTypeTransfered as BlockType;
      addBlock(blockType);
    }
  };

  const addBlock = (blockType: BlockType) => {
    const block: CodeBlock = buildCodeBlock(blockType);
    appendCodeBlock(block);
  };

  const removeBlock = (block: CodeBlock): void => {
    const index = codeBlocks.indexOf(block);
    if (index > -1) {
      codeBlocks.splice(index, 1);
    }
  };

  let components: JSX.Element[] = [];

  codeBlocks.forEach((element) =>
    components.push(<ActionBlock block={element} removeBlock={removeBlock} />)
  );

  return (
    <div className="Playground">
      <div className="sectionHeader">Playground</div>
      <div
        id="playgroundBody"
        className="sectionBody"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {components}
      </div>
    </div>
  );
};

export default PlaygroundComponent;
