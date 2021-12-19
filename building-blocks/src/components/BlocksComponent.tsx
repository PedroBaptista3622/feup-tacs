import { CodeBlock } from "../codeBlocks/CodeBlock";
import { MoveBlock } from "../codeBlocks/MoveBlock";
import { RepeatNTimesBlock } from "../codeBlocks/RepeateBlock";
import { TurnBlock } from "../codeBlocks/TurnBlock";
import Block from "./Block";

import "../styles/blocks.css";

const BlocksComponent = () => {
  const availableBlocks: CodeBlock[] = [
    new MoveBlock(),
    new TurnBlock(),
    new RepeatNTimesBlock(),
  ];

  const blockList: JSX.Element[] = [];

  availableBlocks.forEach((element) => {
    blockList.push(<Block block={element} />);
  });

  return (
    <div className="Blocks">
      <div className="blockHeader">Blocks</div>
      <div className="blockBody">{blockList}</div>
    </div>
  );
};

export default BlocksComponent;
