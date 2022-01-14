import GameWindow from "./components/GameWindow";
import { Game } from "./Game";
import BlocksComponent from "./components/BlocksComponent";
import PlaygroundComponent from "./components/PlaygroundComponent";
import CodeComponent from "./components/CodeComponent";
import { CrossOver } from "./utils/CrossOver";
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
import { GameState, Player, Enemy, Position } from "./Types";
import { RepeatNTimesBlock } from "./codeBlocks/RepeateBlock";
import { WaitBlock } from "./codeBlocks/WaitBlock";

interface AppProps {}
interface AppState {
  gameState: GameState;
  playerState: Player;
  enemyState: Enemy;
  objetiveState: Position;
  codeBlocks: CodeBlock[];
  isCodeRunning: boolean;
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
      enemyState: this.g.getEnemy(),
      objetiveState: this.g.getObjectivePos(),
      codeBlocks: [],
      isCodeRunning: false,
    };
  }

  sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  setCodeBlocksState = (newState: CodeBlock[]) => {
    this.setState({ codeBlocks: newState });
  };

  isCodeReady = (): boolean => {
    const codeBlockState = this.state.codeBlocks;
    return (
      codeBlockState.length > 0 &&
      codeBlockState.every((block) => block.isComplete())
    );
  };

  isGameOver = (): boolean =>
    this.state.playerState.position.x === this.state.objetiveState.x &&
    this.state.playerState.position.y === this.state.objetiveState.y;

  testCodeBlocks = () => {
    const newCodeBlocksState: CodeBlock[] = [];

    let repBlock = new RepeatNTimesBlock();
    repBlock.setNumIter(3);
    repBlock.buildAddBlock("Move");
    newCodeBlocksState.push(repBlock);

    let c = new TurnBlock();
    c.setRotateTo("right");
    newCodeBlocksState.push(c);

    repBlock = new RepeatNTimesBlock();
    repBlock.setNumIter(2);
    repBlock.buildAddBlock("Move");
    newCodeBlocksState.push(repBlock);

    c = new TurnBlock();
    c.setRotateTo("left");
    newCodeBlocksState.push(c);

    repBlock = new RepeatNTimesBlock();
    repBlock.setNumIter(5);
    repBlock.buildAddBlock("Move");
    newCodeBlocksState.push(repBlock);

    c = new TurnBlock();
    c.setRotateTo("right");
    newCodeBlocksState.push(c);

    let w = new WaitBlock();
    newCodeBlocksState.push(w);
    newCodeBlocksState.push(w);
    newCodeBlocksState.push(w);
    newCodeBlocksState.push(w);

    repBlock = new RepeatNTimesBlock();
    repBlock.setNumIter(2);
    repBlock.buildAddBlock("Move");
    newCodeBlocksState.push(repBlock);

    c = new TurnBlock();
    c.setRotateTo("right");
    newCodeBlocksState.push(c);

    repBlock = new RepeatNTimesBlock();
    repBlock.setNumIter(3);
    repBlock.buildAddBlock("Move");
    newCodeBlocksState.push(repBlock);

    c = new TurnBlock();
    c.setRotateTo("left");
    newCodeBlocksState.push(c);

    repBlock = new RepeatNTimesBlock();
    repBlock.setNumIter(1);
    repBlock.buildAddBlock("Move");
    newCodeBlocksState.push(repBlock);

    c = new TurnBlock();
    c.setRotateTo("left");
    newCodeBlocksState.push(c);

    repBlock = new RepeatNTimesBlock();
    repBlock.setNumIter(1);
    repBlock.buildAddBlock("Move");
    newCodeBlocksState.push(repBlock);

    c = new TurnBlock();
    c.setRotateTo("right");
    newCodeBlocksState.push(c);

    repBlock = new RepeatNTimesBlock();
    repBlock.setNumIter(3);
    repBlock.buildAddBlock("Move");
    newCodeBlocksState.push(repBlock);

    c = new TurnBlock();
    c.setRotateTo("right");
    newCodeBlocksState.push(c);

    repBlock = new RepeatNTimesBlock();
    repBlock.setNumIter(6);
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

  generateAndRunCode = async () => {
    this.setState({ isCodeRunning: true });

    const code: string[] = [];

    for (let i = 0; i < this.state.codeBlocks.length; i++) {
      code.push(this.state.codeBlocks[i].generateCode());
      code.push("this.g.moveEnemy();");
      code.push("await this.sleep(1000);");
    }

    // Builds the async function prototype where the code will be executed
    const AsyncFunction = Object.getPrototypeOf(
      async function () {}
    ).constructor;

    // Instantiates the function, whith the code on its body and sets this inside function
    const actualFunction = new AsyncFunction(code.join(" ")).bind({
      g: this.g,
      sleep: this.sleep,
    });

    actualFunction();

    this.setState({ isCodeRunning: false });
  };

  calcOptimization = (): void => {
    const optimized: CodeBlock[] = CrossOver(this.state.codeBlocks);
    this.setState({
      gameState: this.g.getState(),
      playerState: this.g.getPlayer(),
      enemyState: this.g.getEnemy(),
      objetiveState: this.g.getObjectivePos(),
      codeBlocks: optimized,
      isCodeRunning: false,
    });
  };

  resetState = () => {
    this.setState({
      gameState: this.g.getState(),
      playerState: this.g.getPlayer(),
      enemyState: this.g.getEnemy(),
      objetiveState: this.g.getObjectivePos(),
      codeBlocks: [],
      isCodeRunning: false,
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
            enemy: this.state.enemyState,
            objectivePos: this.state.objetiveState,
          }}
        />
        <BlocksComponent />
        <PlaygroundComponent
          appendCodeBlock={this.appendCodeBlock}
          codeBlocks={this.state.codeBlocks}
        />
        <CodeComponent codeBlocks={this.state.codeBlocks} />
        {!this.state.isCodeRunning ? (
          <ButtonSection
            onReset={this.reset}
            onRun={this.generateAndRunCode}
            isCodeReady={this.isCodeReady()}
            onOptimize={this.calcOptimization}
            isGameOver={this.isGameOver()}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}
