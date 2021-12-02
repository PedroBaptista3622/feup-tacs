import "../styles/code.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ReactNode } from "react";

function CodeComponent(): ReactNode {
  return (
    <div className="Code-Generated">
      <div className="codeHeader">Code</div>
      <div className="codeBody">
        <textarea className="code"> </textarea>
      </div>
    </div>
  );
}

export default CodeComponent;
