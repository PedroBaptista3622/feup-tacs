import { CodeBlock } from "../codeBlocks/CodeBlock";

type ActionBlockProps = {
  block: CodeBlock;
};

const ActionBlock = ({ block }: ActionBlockProps): JSX.Element => {
  return <div className="draggable_card">{block.getDisplayInfo()}</div>;
};

export default ActionBlock;
