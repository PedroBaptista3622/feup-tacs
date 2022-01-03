import GameWindow from "./components/GameWindow";
import { Game } from "./Game";
import BlocksComponent from "./components/BlocksComponent";
import PlaygroundComponent from "./components/PlaygroundComponent";
import CodeComponent from "./components/CodeComponent";

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/index.css";
import "./styles/sections.css";
import "./styles/blocks.css";
import "./styles/buttons.css";

import { CodeBlock } from "./codeBlocks/CodeBlock";
import { MoveBlock } from "./codeBlocks/MoveBlock";
import { TurnBlock } from "./codeBlocks/TurnBlock";
import { ButtonSection } from "./components/ButtonSection";
import { Component } from "react";
import { GameState, Player, Position } from "./Types";
import { RepeatNTimesBlock } from "./codeBlocks/RepeateBlock";

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

  isCodeReady = (): boolean => {
    const codeBlockState = this.state.codeBlocks;
    return codeBlockState.every((block) => block.isComplete());
  };

  testCodeBlocks = () => {
    const newCodeBlocksState: CodeBlock[] = [];

    newCodeBlocksState.push(new MoveBlock());
    newCodeBlocksState.push(new MoveBlock());
    newCodeBlocksState.push(new MoveBlock());
    newCodeBlocksState.push(new TurnBlock());
    newCodeBlocksState.push(new MoveBlock());
    newCodeBlocksState.push(new MoveBlock());
    newCodeBlocksState.push(new MoveBlock());

    const repBlock = new RepeatNTimesBlock();
    repBlock.buildAddBlock("Move");
    newCodeBlocksState.push(repBlock);

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

  appendCodeBlock = (block: CodeBlock) => {
    const currentBlocks: CodeBlock[] = this.state.codeBlocks;
    currentBlocks.push(block);
    this.setState({ codeBlocks: currentBlocks });
  };

  componentDidMount() {
    this.testCodeBlocks();

    this.interval = setInterval(
      () =>
        this.setState({
          playerState: this.g.getPlayer(),
        }),
      1000 / 30
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
        <PlaygroundComponent
          appendCodeBlock={this.appendCodeBlock}
          codeBlocks={this.state.codeBlocks}
        />
        <CodeComponent codeBlocks={this.state.codeBlocks} />
        <ButtonSection onReset={this.reset} onRun={this.generateAndRunCode} isCodeReady={this.isCodeReady()} />
      </div>
    );
  }
}
