import "../styles/code.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CodeBlock from "./CodeBlock";
import { CodeBlock as CodeBlockInterface } from "../codeBlocks/CodeBlock";

const codeExample = "void teste(int number) {return number;}";
const codeExample2 = "void teste2(int number) { return number; }";

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
      <div className="codeHeader">Code</div>
      <div className="codeBody">{buildCodeBlockComponents(codeBlocks)}</div>
    </div>
  );
}

export default CodeComponent;
