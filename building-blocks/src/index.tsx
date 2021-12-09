import * as ReactDOM from "react-dom";

import GameWindow from "./components/GameWindow";
import { Game } from "./Game";
import BlocksComponent from "./components/BlocksComponent";
import PlaygroundComponent from "./components/PlaygroundComponent";
import CodeComponent from "./components/CodeComponent";

import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CodeBlock } from "./codeBlocks/CodeBlock";
import { MoveBlock } from "./codeBlocks/MoveBlock";
import { TurnBlock } from "./codeBlocks/TurnBlock";
import ButtonSection from "./components/ButtonSection";

const App = (): JSX.Element => {
  const g: Game = new Game();

  const codeBlocks: CodeBlock[] = [];
  codeBlocks.push(new MoveBlock());
  codeBlocks.push(new MoveBlock());
  codeBlocks.push(new MoveBlock());
  codeBlocks.push(new TurnBlock("right"));
  codeBlocks.push(new MoveBlock());
  codeBlocks.push(new MoveBlock());
  codeBlocks.push(new MoveBlock());

  const generatedCode: string[] = [];

  const runGeneratedCode = (code: string): void => {
    console.log(code);
    eval(code);
  };

  return (
    <div className="interface">
      <GameWindow gameState={g.getGame()} />
      <BlocksComponent />
      <PlaygroundComponent />
      <CodeComponent codeBlocks={codeBlocks} generatedCode={generatedCode} />
      <ButtonSection
        game={g}
        generatedCode={generatedCode}
        onActivation={runGeneratedCode}
      />
    </div>
  );
};

ReactDOM.render(App(), document.getElementById("root"));
