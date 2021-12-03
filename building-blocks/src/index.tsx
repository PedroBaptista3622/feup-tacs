import * as ReactDOM from "react-dom";

import GameWindow from "./components/GameWindow";
import { Game } from "./Game";
import BlocksComponent from "./components/BlocksComponent";
import PlaygroundComponent from "./components/PlaygroundComponent";
import CodeComponent from "./components/CodeComponent";
import RunButton from "./components/RunButton";

import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const runGeneratedCode = (code: string): void => {
  eval(code);
};

const App = (): JSX.Element => {
  const g: Game = new Game();

  return (
    <div className="interface">
      <GameWindow gameState={g.getGame()} />
      <BlocksComponent />
      <PlaygroundComponent />
      <CodeComponent />
      <RunButton />
    </div>
  );
};

ReactDOM.render(App(), document.getElementById("root"));