import { BlockType } from "../Types";
import { CodeBlock } from "./CodeBlock";

export class RepeatNTimesBlock implements CodeBlock {
  generateCode = () => "console.log('WIP');";

  getDisplayInfo = (): string => "Repeate WIP";

  getType = (): BlockType => "Repeat";

  isComplete = () => true;
}
