type argumentType = "number" | "string";

export interface Argument {
  type: argumentType;
  setNewValue: (newValue: any) => void;
}

export class OpenArgument implements Argument {
  type: argumentType;
  setNewValue: (newValue: any) => void;

  max: number = 9999;
  min: number = 1;

  constructor(
    type: argumentType,
    setter: (newValue: any) => void,
    max?: number,
    min?: number
  ) {
    this.type = type;
    this.setNewValue = setter;

    if (max !== undefined) {
      this.max = max;
    }

    if (min !== undefined) {
      this.min = min;
    }
  }
}

export class ClosedArgument implements Argument {
  type: argumentType;
  setNewValue: (newValue: any) => void;

  possibleValues: string[] | number[];

  constructor(
    type: argumentType,
    setter: (newValue: any) => void,
    possibleValues: string[] | number[]
  ) {
    this.type = type;
    this.setNewValue = setter;
    this.possibleValues = possibleValues;
  }
}
