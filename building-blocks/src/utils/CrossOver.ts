import { CodeBlock } from "../codeBlocks/CodeBlock"
import { RepeatNTimesBlock } from "../codeBlocks/RepeateBlock"
import { TurnBlock } from "../codeBlocks/TurnBlock"
import { MoveBlock } from "../codeBlocks/MoveBlock"
import { Game } from "../Game"

const transformCodeBlocks = (codeBlocks: CodeBlock[]): String[] => {
    const newBlocks: String[] = []

    codeBlocks.forEach((block) => {
        if (block instanceof RepeatNTimesBlock) {
            const numInter = block.numIter
            if (numInter !== undefined)
                for (let i = 0; i < numInter; i++) {
                    (transformCodeBlocks(block.getInnerBlocks())).forEach((b) => { newBlocks.push(b) })
                }

        } else if (block instanceof TurnBlock) {
            block.rotateTo === 'left' ? newBlocks.push('L') : newBlocks.push('R')
        } else if (block instanceof MoveBlock) {
            newBlocks.push('M')
        }
    })

    return newBlocks
}

const BlocksMutationFunction = (blocks: String[]): String[] => {

    const newBlocks: String[] = blocks
    const r = Math.random()

    if (r < 0.3) {
        //remove
        newBlocks.splice(Math.floor(Math.random() * newBlocks.length), 1);
    } else if (r < 0.6) {
        //substitute
        newBlocks.splice(Math.floor(Math.random() * newBlocks.length), 1, getRandomBlock());
    } else
        //add new
        newBlocks.push(getRandomBlock())

    return newBlocks
}

const getRandomBlock = (): String => {

    const r = Math.random()
    if (r < 0.3) {
        return "M"
    } else if (r < 0.6) {
        return "L"
    } else return "R"

}


const CrossOverFunction = (blocksA: String[], blocksB: String[]): String[] => {
    let crossover: String[] = []

    //para cada caracter da solução final if (random > 0.5) a[pos] : b[pos]
    //if (random > 0.9) a[pos] : b[pos]
    let main: String[]
    let temp: String[]
    let r = Math.random()
    if (r > 0.5) {
        main = blocksA
        temp = blocksB
    }
    else {
        main = blocksB
        temp = blocksA
    }

    r = Math.random()
    let index = 0
    main.forEach(block => {
        if (r > 0.9) {
            crossover.push(block)
        }
        else {
            index = crossover.indexOf(block)
            index >= temp.length ? crossover.push(block) : crossover.push(temp[index])
        }
    });

    return crossover


}

const reachesGoal = (path: String[]): boolean => {
    const g = new Game()
    return g.runSimpleGame(path)
}

const FitnessFunction = (path: String[]): number => {

    // to determine the fitness number.  Higher is better, lower is worse.
    if (!reachesGoal(path)) { return 0 }

    return 1 / path.length;
}

export const CrossOver = (codeblocks: CodeBlock[]): void => {

    const god = transformCodeBlocks(codeblocks)

    const config = {
        mutationFunction: BlocksMutationFunction,
        crossoverFunction: CrossOverFunction,
        fitnessFunction: FitnessFunction,
        //doesABeatBFunction: yourCompetitionFunction, //To add diversity use the doesABeatBFunction function instead of the fitnessFunction and only allow A to beat B if A is more fit than B and B is close enough.
        population: [god],
        populationSize: 500 	// defaults to 100
    }

    const GeneticAlgorithmConstructor = require('geneticalgorithm')
    const geneticalgorithm = GeneticAlgorithmConstructor(config)

    const best = geneticalgorithm.evolve().best();
    console.log(best)
}