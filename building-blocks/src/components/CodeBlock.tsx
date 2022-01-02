import { CodeBlock as CodeBlockInterface } from "../codeBlocks/CodeBlock";

type CodeBlockProps = {
  block: CodeBlockInterface;
};

const CodeBlock = ({ block }: CodeBlockProps): JSX.Element => {
  return <div className="codeSection">{block.generateCode()}</div>;
};

export default CodeBlock;
