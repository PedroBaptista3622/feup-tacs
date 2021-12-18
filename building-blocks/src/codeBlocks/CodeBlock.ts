export interface CodeBlock {
  getDisplayInfo : () => string;
  generateCode: () => string;
}
