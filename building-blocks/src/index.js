import React, { Component } from "react";
import { render } from "react-dom";
import GameWindow from "./components/GameWindow";

class App extends Component {
  render() {
    return <GameWindow />;
  }
}

render(<App />, document.getElementById("root"));
