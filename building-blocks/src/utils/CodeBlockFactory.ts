import { CodeBlock } from "../codeBlocks/CodeBlock";
import { MoveBlock } from "../codeBlocks/MoveBlock";
import { RepeatNTimesBlock } from "../codeBlocks/RepeateBlock";
import { TurnBlock } from "../codeBlocks/TurnBlock";
import { BlockType } from "../Types";

export const buildCodeBlock = (blockType: BlockType): CodeBlock => {
  switch (blockType) {
    case "Move": {
      return new MoveBlock();
    }
    case "Repeat": {
      return new RepeatNTimesBlock();
    }
    case "Turn": {
      return new TurnBlock();
    }
  }
};
