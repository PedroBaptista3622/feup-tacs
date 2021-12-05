import "../styles/code.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CodeBlock from "./CodeBlock";
import { CodeBlock as CodeBlockInterface } from "../codeBlocks/CodeBlock";

interface CodeComponentProps {
  codeBlocks: CodeBlockInterface[];
  generatedCode: string[];
}

const buildCodeBlockComponents = (
  codeBlocks: CodeBlockInterface[],
  generatedCode: string[]
): JSX.Element[] => {
  const componentList: JSX.Element[] = [];
  codeBlocks.forEach((codeBlock) => {
    componentList.push(<CodeBlock block={codeBlock} />);
    generatedCode.push(codeBlock.generateCode());
  });
  return componentList;
};

function CodeComponent({
  codeBlocks,
  generatedCode,
}: CodeComponentProps): JSX.Element {
  return (
    <div className="Code-Generated">
      <div className="codeHeader">Code</div>
      <div className="codeBody">
        {buildCodeBlockComponents(codeBlocks, generatedCode)}
      </div>
    </div>
  );
}

export default CodeComponent;
