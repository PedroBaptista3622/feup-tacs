import { lang } from "./CodeParser";
import { CodeBlock } from "../codeBlocks/CodeBlock";

export const codeOptimized: CodeBlock[] = [];

export const optimizeCodeBlocks = (codeBlocks: CodeBlock[]): CodeBlock[] => {
    let j = 0;
    for (let i = 0; i < codeBlocks.length; i++) {
        if(i + 1 < codeBlocks.length) {
            console.log(codeBlocks[i].generateCode());
            console.log(codeBlocks[i+1].generateCode());
            if(codeBlocks[i].generateCode() === codeBlocks[i + 1].generateCode()) {
                j++;
                console.log("ENTROU 1");
            }
            else if (j === 0) {
                codeOptimized.push(codeBlocks[i]);
                console.log("ENTROU 2");
            }
            else {
                console.log("ENTROU 3");
                const code: string = `for (let i = 0; i < ${j + 1}; i++) { ${codeBlocks[i].generateCode()} }`
                const forBlock: CodeBlock = lang.statement.tryParse(code);
                console.log("AQUII");
                console.log(forBlock.generateCode());
                codeOptimized.push(forBlock);
                i = i + j;
            }
        }
        else {
            if(j === 0) {
                codeOptimized.push(codeBlocks[i]);
            }
            else {
                console.log("ENTROU 4");
                const code: string = `for (let i = 0; i < ${j + 1}; i++) { ${codeBlocks[i].generateCode()} }`
                const forBlock: CodeBlock = lang.statement.tryParse(code);
                console.log("AQUII");
                console.log(forBlock.generateCode());
                codeOptimized.push(forBlock);
                i = i + j;
            }
        }
    }
    return codeOptimized;
}
