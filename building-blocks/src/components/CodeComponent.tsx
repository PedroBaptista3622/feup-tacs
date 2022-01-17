import CodeBlock from "./CodeBlock";
import { CodeBlock as CodeBlockInterface } from "../codeBlocks/CodeBlock";
import { optimizeCodeBlocks } from "../utils/CodeOptimizer";
import { transformCodeBlocks } from "../utils/CrossOver";

interface CodeComponentProps {
  codeBlocks: CodeBlockInterface[];
}

const buildCodeBlockComponents = (
  codeBlocks: CodeBlockInterface[]
): JSX.Element[] => {
  const componentList: JSX.Element[] = [];
  const optimizedCode: CodeBlockInterface[] = optimizeCodeBlocks(codeBlocks);
  optimizedCode.forEach((codeBlock) => {
    componentList.push(<CodeBlock block={codeBlock} />);
  });

  return componentList;
};

function CodeComponent({ codeBlocks }: CodeComponentProps): JSX.Element {
  return (
    <div className="Code-Generated">
      <div className="sectionHeader">
        Code
      </div>
      <div className="sectionBody" style={{ textAlign: "center" }}>
        Number of steps: {transformCodeBlocks(codeBlocks).length}
        {buildCodeBlockComponents(codeBlocks)}</div>
    </div>
  );
}

export default CodeComponent;
