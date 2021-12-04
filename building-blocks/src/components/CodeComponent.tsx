import "../styles/code.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CodeComponent(): JSX.Element {
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
