import { CodeBlock } from "./CodeBlock";

export class MoveBlock implements CodeBlock {
  generateCode = () => {
    return "this.g.movePlayer();";
  };

  getDisplayInfo = (): string => {
    return "Move Player";
  };
}
