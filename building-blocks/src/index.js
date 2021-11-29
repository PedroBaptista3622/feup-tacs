import React, { Component } from "react";
import { render } from "react-dom";
import GameWindow from "./components/GameWindow";
import BlocksComponent from "./components/BlocksComponent";
import CodeComponent from "./components/CodeComponent";
import PlaygroundComponent from "./components/PlaygroundComponent"
import { Game } from "./Game";
import "./styles/index.css"
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <div>
          <Container fluid>
            <Row>
              <Col>
                <div>
                  <GameWindow gameState={this.g.getGame()} />
                  <BlocksComponent />
                </div>
              </Col>
              <Col>
                <PlaygroundComponent></PlaygroundComponent>
              </Col>
              <Col  >
                <CodeComponent></CodeComponent>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    )

  };
}

render(<App />, document.getElementById("root"));
