import dragula from "dragula";
import * as React from "react";
import "../styles/blocks.css";

class BlocksComponent extends React.Component {
  
  componentDidMount () {
    let left = document.getElementById('left');
    let right = document.getElementById('right');

    if(left != null && right != null)
      dragula([left, right]);
  }

  render() {
    return (
      <div className="Blocks">
        <div className="blockHeader">Blocks</div>
        <div className="blockBody"> blocos
            <div id="left" className="container">
              <Card> Card 3 </Card>
              <Card> Card 4 </Card>
            </div>
        </div>
      </div>
    );
  }
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

export default BlocksComponent;