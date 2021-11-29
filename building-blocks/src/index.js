import React, { Component } from "react";
import { render } from "react-dom";
import GameWindow from "./components/GameWindow";
import BlocksComponent from "./components/BlocksComponent";
import CodeComponent from "./components/CodeComponent";
import PlaygroundComponent from "./components/PlaygroundComponent";
import { Game } from "./Game";
import { Container, Row, Col } from "react-bootstrap";

import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();

    this.g = new Game();
  }

  runGeneratedCode = (code) => {
    eval(code);
  };

  render = () => {
    // this.runGeneratedCode('console.log(this.g.getGame())');
    return (
      <>
        <body>
          <Container fluid>
            <Row>
              <Col className="block-col area">
                <GameWindow gameState={this.g.getGame()} />
                <BlocksComponent />
              </Col>
              <Col className="area">
                <PlaygroundComponent/>
              </Col>
              <Col className="area">
                <CodeComponent />
              </Col>
            </Row>
          </Container>
        </body>
      </>
    );
  };
}

render(<App />, document.getElementById("root"));
