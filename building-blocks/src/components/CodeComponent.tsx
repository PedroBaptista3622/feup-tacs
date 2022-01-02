import CodeBlock from "./CodeBlock";
import { CodeBlock as CodeBlockInterface } from "../codeBlocks/CodeBlock";

interface CodeComponentProps {
  codeBlocks: CodeBlockInterface[];
}

const buildCodeBlockComponents = (
  codeBlocks: CodeBlockInterface[]
): JSX.Element[] => {
  const componentList: JSX.Element[] = [];

  codeBlocks.forEach((codeBlock) => {
    componentList.push(<CodeBlock block={codeBlock} />);
  });

  return componentList;
};

function CodeComponent({ codeBlocks }: CodeComponentProps): JSX.Element {
  return (
    <div className="Code-Generated">
      <div className="sectionHeader">Code</div>
      <div className="sectionBody">{buildCodeBlockComponents(codeBlocks)}</div>
    </div>
  );
}

export default CodeComponent;
