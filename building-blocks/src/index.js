import React, { Component } from "react";
import { render } from "react-dom";
import GameWindow from "./components/GameWindow";
import { Game } from "./Game";

class App extends Component {
  constructor() {
    super();

    this.g = new Game();
  }

  runGeneratedCode = (code) => {
    eval(code);
  };

  render = () => {
    this.runGeneratedCode('console.log(this.g.getGame())');
    return <GameWindow gameState={this.g.getGame()} />;
  };
}

render(<App />, document.getElementById("root"));
