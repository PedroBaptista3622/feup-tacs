import { CodeBlock } from "../codeBlocks/CodeBlock";
import { BlockType } from "../Types";
import { buildCodeBlock } from "../utils/CodeBlockFactory";
import ActionBlock from "./ActionBlock";

import "../styles/playground.css";

interface PlaygroundProps {
  codeBlocks: CodeBlock[];
  appendCodeBlock: (block: CodeBlock) => void;
}

const PlaygroundComponent = ({
  codeBlocks,
  appendCodeBlock,
}: PlaygroundProps): JSX.Element => {
  let components: JSX.Element[] = [];

  codeBlocks.forEach((element) =>
    components.push(<ActionBlock block={element} />)
  );

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: any) => {
    e.preventDefault();

    const blockType: BlockType = e.dataTransfer.getData("blockType");
    console.log(blockType);
    addBlock(blockType);
  };

  const addBlock = (blockType: BlockType) => {
    const block: CodeBlock = buildCodeBlock(blockType);
    appendCodeBlock(block);
  };

  return (
    <div className="Playground">
      <div className="playgroundHeader">Playground</div>
      <div
        className="playgroundBody"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {components}
      </div>
    </div>
  );
};

export default PlaygroundComponent;
