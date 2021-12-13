import { Card } from "react-bootstrap";
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

export default PlaygroundComponent;
