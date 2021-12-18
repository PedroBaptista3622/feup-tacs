import { CodeBlock } from "./CodeBlock";

export class RepeatNTimesBlock implements CodeBlock {
  generateCode = () => {
    return "console.log('WIP');";
  };

  getDisplayInfo = (): string => {
    return "Repeate WIP";
  };
}
