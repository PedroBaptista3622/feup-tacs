import { lang } from "./CodeParser";
import { CodeBlock } from "../codeBlocks/CodeBlock";


export const optimizeCodeBlocks = (codeBlocks: CodeBlock[]): CodeBlock[] => {
    const codeOptimized: CodeBlock[] = [];
    let j = 0;
    for (let i = 0; i < codeBlocks.length; i++) {
        if(i + 1 < codeBlocks.length) {
            if(codeBlocks[i].generateCode() === codeBlocks[i + 1].generateCode()) {
                j++;
            }
            else if (j === 0) {
                codeOptimized.push(codeBlocks[i]);
            }
            else {
                const code: string = `for (let i = 0; i < ${j + 1}; i++) { ${codeBlocks[i].generateCode()} }`
                const forBlock: CodeBlock = lang.statement.tryParse(code);
                codeOptimized.push(forBlock);
                i = i + j;
                j = 0;
            }
        }
        else {
            if(j === 0) {
                codeOptimized.push(codeBlocks[i]);
            }
            else {
                const code: string = `for (let i = 0; i < ${j + 1}; i++) { ${codeBlocks[i].generateCode()} }`
                const forBlock: CodeBlock = lang.statement.tryParse(code);
                codeOptimized.push(forBlock);
                i = i + j;
            }
        }
    }
    return codeOptimized;
}
