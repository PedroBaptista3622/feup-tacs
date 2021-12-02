import { ReactNode } from "react";
import "../styles/blocks.css";

const BlocksComponent = (): ReactNode => {
  return (
    <div className="Blocks">
      <div className="blockHeader">Blocks</div>
      <div className="blockBody"> blocos </div>
    </div>
  );
};

export default BlocksComponent;
