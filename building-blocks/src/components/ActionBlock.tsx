import React from "react";
import { Argument, ClosedArgument, OpenArgument } from "../codeBlocks/Argument";
import { CodeBlock } from "../codeBlocks/CodeBlock";
import { HolderCodeBlock } from "../codeBlocks/HolderCodeBlock";
import { RepeatNTimesBlock } from "../codeBlocks/RepeateBlock";
import { BlockType } from "../Types";
import { buildCodeBlock } from "../utils/CodeBlockFactory";

type ActionBlockProps = {
  block: CodeBlock;
};

const ActionBlock = ({ block }: ActionBlockProps): JSX.Element => {
  const buildInnerBlocks = (block: HolderCodeBlock): JSX.Element[] => {
    const innerBlocks: JSX.Element[] = [];

    block.getInnerBlocks().forEach((val: CodeBlock) => {
      innerBlocks.push(
        <div className={getClassNames(val)}>{val.getType()}</div>
      );
    });

    return innerBlocks;
  };

  const handleDrop = (dragEvent: React.DragEvent) => {
    dragEvent.preventDefault();

    if (dragEvent !== null && dragEvent.dataTransfer !== null) {
      const blockTypeTransfered: string =
        dragEvent.dataTransfer.getData("blockType");
      const blockType: BlockType = blockTypeTransfered as BlockType;
      addBlock(blockType);
    }
  };

  const addBlock = (blockType: BlockType) => {
    const newBlock: CodeBlock = buildCodeBlock(blockType);

    // Always true
    if (block instanceof RepeatNTimesBlock) {
      block.addBlock(newBlock);
    }
  };

  const getClassNames = (block: CodeBlock): string => {
    const classNames: string[] = ["card"];

    if (!block.isComplete()) {
      classNames.push("invalid_block");
    }

    return classNames.join(" ");
  };

  const createArgumentInputs = (): JSX.Element[] => {
    const argumentElements: JSX.Element[] = [];
    const argumentList: Argument[] = block.generateArguments();

    argumentList.forEach((arg) => {
      if (arg instanceof OpenArgument) {
        if (arg.type === "number") {
          const numberInput: JSX.Element = (
            <input
              type="number"
              name={arg.displayName}
              min={arg.min !== undefined ? arg.min : 1}
              max={arg.max !== undefined ? arg.max : 20}
              onChange={(e: React.ChangeEvent) => {
                const target = e.target as HTMLInputElement;
                arg.setNewValue(target.value);
              }}
            ></input>
          );

          argumentElements.push(numberInput);
        }
      } else if (arg instanceof ClosedArgument) {
        const seletor: JSX.Element = (
          <select
            onChange={(e: React.ChangeEvent) => {
              const target = e.target as HTMLSelectElement;
              arg.setNewValue(target.value);
            }}
            name={arg.displayName}
          >
            <option hidden disabled selected>
              {" "}
              -- select an option --{" "}
            </option>
            {arg.possibleValues.map((val) => (
              <option value={val}>{val}</option>
            ))}
          </select>
        );

        argumentElements.push(seletor);
      }
    });

    return argumentElements;
  };

  return (
    <div onDrop={handleDrop} className={getClassNames(block)}>
      {block.getType()}
      {createArgumentInputs()}
      {block instanceof RepeatNTimesBlock ? buildInnerBlocks(block) : <></>}
    </div>
  );
};

export default ActionBlock;
