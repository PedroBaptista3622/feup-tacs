import { CodeBlock } from "../codeBlocks/CodeBlock";
import "../styles/playground.css";
import ActionBlock from "./ActionBlock";

interface PlaygroundProps {
  codeBlocks: CodeBlock[];
}

const PlaygroundComponent = ({ codeBlocks }: PlaygroundProps): JSX.Element => {

  let components : JSX.Element[] = [];

  codeBlocks.forEach((element) =>
    components.push(<ActionBlock block={element} />)
  );

  return (
    <div className="Playground">
      <div className="playgroundHeader">Playground</div>
      <div className="playgroundBody">{components}</div>
    </div>
  );
};

export default PlaygroundComponent;
