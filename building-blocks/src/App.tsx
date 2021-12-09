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
import { Component } from "react";
import { GameState, Player, Position } from "./Types";

interface AppProps {}
interface AppState {
  gameState: GameState;
  playerState: Player;
  objetiveState: Position;
  codeBlocks: CodeBlock[];
}

export class App extends Component<AppProps, AppState> {
  interval: any;
  g: Game;

  constructor(props: AppProps) {
    super(props);

    this.g = new Game();

    this.state = {
      gameState: this.g.getState(),
      playerState: this.g.getPlayer(),
      objetiveState: this.g.getObjectivePos(),
      codeBlocks: [],
    };
  }

  setCodeBlocksState = (newState: CodeBlock[]) => {
    this.setState({ codeBlocks: newState });
  };

  testCodeBlocks = () => {
    const newCodeBlocksState: CodeBlock[] = [];

    newCodeBlocksState.push(new MoveBlock());
    newCodeBlocksState.push(new MoveBlock());
    newCodeBlocksState.push(new MoveBlock());
    newCodeBlocksState.push(new TurnBlock("right"));
    newCodeBlocksState.push(new MoveBlock());
    newCodeBlocksState.push(new MoveBlock());
    newCodeBlocksState.push(new MoveBlock());

    this.setCodeBlocksState(newCodeBlocksState);
  };

  generateCodeFromBlocks = (): string[] => {
    const code: string[] = [];

    this.state.codeBlocks.forEach((block) => {
      code.push(block.generateCode());
    });

    return code;
  };

  generateAndRunCode = (): void => {
    const code = this.generateCodeFromBlocks().join("");
    console.log(code);
    eval(code);
  };

  resetState = () => {
    this.setState({
      gameState: this.g.getState(),
      playerState: this.g.getPlayer(),
      objetiveState: this.g.getObjectivePos(),
      codeBlocks: [],
    });
  };

  resetGame = () => {
    this.g = new Game();
  };

  reset = () => {
    this.resetGame();
    this.resetState();
  };

  componentDidMount() {
    this.testCodeBlocks();

    this.interval = setInterval(
      () =>
        this.setState({
          playerState: this.g.getPlayer(),
        }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="interface">
        <GameWindow
          gameState={{
            state: this.state.gameState,
            player: this.state.playerState,
            objectivePos: this.state.objetiveState,
          }}
        />
        <BlocksComponent />
        <PlaygroundComponent />
        <CodeComponent codeBlocks={this.state.codeBlocks} />
        <ButtonSection onReset={this.reset} onRun={this.generateAndRunCode} />
      </div>
    );
  }
}
