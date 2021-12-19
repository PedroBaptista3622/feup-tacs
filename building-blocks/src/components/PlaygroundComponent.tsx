import { CodeBlock } from "../codeBlocks/CodeBlock";
import { MoveBlock } from "../codeBlocks/MoveBlock";
import { RepeatNTimesBlock } from "../codeBlocks/RepeateBlock";
import { TurnBlock } from "../codeBlocks/TurnBlock";
import "../styles/playground.css";
import { BlockType } from "../Types";
import ActionBlock from "./ActionBlock";

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

    let blockType: BlockType = e.dataTransfer.getData("blockType");
    console.log(blockType);
    addBlock(blockType);
  };

  const addBlock = (blockType: BlockType) => {
    switch (blockType) {
      case "Move": {
        appendCodeBlock(new MoveBlock());
        return;
      }
      case "Repeat": {
        appendCodeBlock(new RepeatNTimesBlock())
        return;
      }
      case "Turn": {
        appendCodeBlock(new TurnBlock())
        return;
      }
    }
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
