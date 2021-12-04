import "../styles/code.css";
import "bootstrap/dist/css/bootstrap.min.css";

const codeExample = "void teste(int number) {return number;}";
const codeExample2 = "void teste2(int number) { return number; }";

function CodeComponent(): JSX.Element {
  return (
    <div className="Code-Generated">
      <div className="codeHeader">Code</div>
      <div className="codeBody">
        <div className="codeSection">{codeExample}</div>
        <div className="codeSection">{codeExample2}</div>
      </div>
    </div>
  );
}

export default CodeComponent;
