import { CodeBlock } from "./CodeBlock";

export class MoveBlock implements CodeBlock {
  generateCode = () => {
    return "g.movePlayer();";
  };
}
