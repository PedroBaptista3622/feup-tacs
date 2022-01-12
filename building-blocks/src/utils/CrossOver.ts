import { CodeBlock } from "../codeBlocks/CodeBlock"
import { RepeatNTimesBlock } from "../codeBlocks/RepeateBlock"
import { TurnBlock } from "../codeBlocks/TurnBlock"
import { MoveBlock } from "../codeBlocks/MoveBlock"
import { Game } from "../Game"
import { WaitBlock } from "../codeBlocks/WaitBlock"

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
        } else if (block instanceof WaitBlock) {
            newBlocks.push('W')
        }
    })

    return newBlocks
}

const BlocksMutationFunction = (blocks: String[]): String[] => {
    console.log("mutation")

    const newBlocks: String[] = blocks
    const r = Math.random()

    if (r < 0.4) {
        newBlocks.splice(Math.floor(Math.random() * newBlocks.length), 1);
    } else if (r < 0.8) {
        newBlocks.splice(Math.floor(Math.random() * newBlocks.length), 1);
    } else newBlocks.splice(Math.floor(Math.random() * newBlocks.length), 1, getRandomBlock());

    return newBlocks
}

const getRandomBlock = (): String => {
    const r = Math.random()
    if (r < 0.25) {
        return "M"
    } else if (r < 0.5) {
        return "L"
    } else if (r < 0.75) {
        return "R"
    } else return "W"
}


const CrossOverFunction = (blocksA: String[], blocksB: String[]): String[] => {
    console.log("cross")
    let crossover: String[] = []

    let i = 0
    blocksA.forEach((block) => {
        const r = Math.random()
        if (r > 0.9) {
            crossover.push(block)
        } else {
            crossover.push(blocksB[i] !== undefined ? blocksB[i] : block)
        }
        i++
    })

    return crossover;
}

/*
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
    console.log(crossover)
 
    return crossover
}
*/
const reachesGoal = (path: String[]): boolean => {
    const g = new Game()
    return g.runSimpleGame(path)
}

const FitnessFunction = (path: String[]): number => {

    //let second: String[] = ['M', 'M', 'M', 'R', 'M', 'M', 'L', 'M', 'M', 'M', 'M', 'M', 'R', 'W', 'W', 'W', 'W', 'M', 'M', 'R', 'M', 'M', 'M', 'L', 'M', 'L', 'M', 'R', 'M', 'M', 'M', 'R', 'M', 'M', 'M', 'M', 'M', 'M']

    //console.log(path)
    if (!(path instanceof Array)) { path = [path] }
    // to determine the fitness number.  Higher is better, lower is worse.
    if (path === null || !reachesGoal(path)) { return 0 } else console.log("boa!")

    return 1 / path.length;
}

export const CrossOver = (codeblocks: CodeBlock[]): void => {

    const god = transformCodeBlocks(codeblocks)
    const i = god.length

    console.log(god)

    const config = {
        mutationFunction: BlocksMutationFunction,
        crossoverFunction: CrossOverFunction,
        fitnessFunction: FitnessFunction,
        //doesABeatBFunction: yourCompetitionFunction, //To add diversity use the doesABeatBFunction function instead of the fitnessFunction and only allow A to beat B if A is more fit than B and B is close enough.
        population: Array(100).fill(god),
        populationSize: 5000	// defaults to 100
    }

    const GeneticAlgorithmConstructor = require('geneticalgorithm')
    const geneticalgorithm = GeneticAlgorithmConstructor(config)

    const best: String[] = geneticalgorithm.evolve().best();
    console.log("old size " + i)
    console.log(god)
    console.log("best = " + best + ' Size ' + best.length)

    for (let i = 0; i < god.length; i++) {
        console.log(god[i] + "/" + best[i])
    }
}