import React from "react";
import "../styles/playground.css";

const PlaygroundComponent = () : JSX.Element => {
  return (
    <div className="Playground">
      <div className="playgroundHeader">Playground</div>
      <div className="playgroundBody">
        <div id="right" className="container">
          <Card> Card 5 </Card>
          <Card> Card 6 </Card>
        </div>
      </div>
    </div>
  );
};

class Card extends React.Component {
  constructor (props:any) {
    super(props);
  }

  render () {
    return (
      <div className="card">
        <div className="card-header">
          <h6>Example Card</h6>
        </div>
        <div className="card-body">
          <p>{this.props.children}</p>
        </div>
      </div>
    );
  }
}

export default PlaygroundComponent;
