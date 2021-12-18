import { CodeBlock } from "../codeBlocks/CodeBlock";
import { MoveBlock } from "../codeBlocks/MoveBlock";
import { RepeatNTimesBlock } from "../codeBlocks/RepeateBlock";
import { TurnBlock } from "../codeBlocks/TurnBlock";
import "../styles/blocks.css";
import ActionBlock from "./ActionBlock";

const BlocksComponent = () => {
  const availableBlocks: CodeBlock[] = [
    new MoveBlock(),
    new TurnBlock("left"),
    new TurnBlock("right"),
    new RepeatNTimesBlock(),
  ];

  const blockList: JSX.Element[] = [];

  availableBlocks.forEach((element) => {
    blockList.push(<ActionBlock block={element} />);
  });

  return (
    <div className="Blocks">
      <div className="blockHeader">Blocks</div>
      <div className="blockBody">
        <div className="playgroundBody">{blockList}</div>
      </div>
    </div>
  );
};

export default BlocksComponent;
