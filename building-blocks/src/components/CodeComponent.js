import "../styles/code.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CodeComponent() {
  return (
    <div class="Code-Generated">
      <div class="codeHeader">Code</div>
      <div class="codeBody">
        <textarea class="code"> </textarea>
      </div>
    </div>
  );
}

export default CodeComponent;
