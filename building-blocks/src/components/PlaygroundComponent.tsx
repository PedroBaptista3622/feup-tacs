import { ReactNode } from "react";
import "../styles/playground.css";

const PlaygroundComponent = () : ReactNode => {
  return (
    <div className="Playground">
      <div className="playgroundHeader">Playground</div>
      <div className="playgroundBody"></div>
    </div>
  );
};

export default PlaygroundComponent;
