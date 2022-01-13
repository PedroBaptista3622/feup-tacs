import * as P from "parsimmon"
import { MoveBlock } from "../codeBlocks/MoveBlock"
import { RepeatNTimesBlock } from "../codeBlocks/RepeateBlock"
import { TurnBlock } from "../codeBlocks/TurnBlock"
import { WaitBlock } from "../codeBlocks/WaitBlock"
import { RotateTo } from "../Types"

type Grammar = {
    statement: MoveBlock | TurnBlock | RepeatNTimesBlock | WaitBlock,
    moveExpr: MoveBlock,
    turnExpr: TurnBlock,
    turnSide: 'Left' | 'Right',
    waitExpr: WaitBlock,
    forExpr: RepeatNTimesBlock,
    repeatTimes: number
}

const lang = P.createLanguage<Grammar>({
    statement: l => P.alt(l.moveExpr, l.turnExpr),
    moveExpr: l => P.string('this.g.movePlayer();').map(() => new MoveBlock()),
    turnExpr: l => P.seq(P.string('this.g.turnPlayer'), l.turnSide, P.string('();')).map(([_, side, __]) => new TurnBlock(<RotateTo>side.toLowerCase())),
    turnSide: _ => P.alt(P.string('Left'), P.string('Right')),
    waitExpr: l => P.string('this.g.stopPlayer();').map(() => new WaitBlock()),
    forExpr: l => P.seq(P.string('for (let i = 0; i < '), l.repeatTimes, P.string('; i++) { '), P.alt(l.moveExpr, l.turnExpr, l.waitExpr)).map(([_, nRepeat, _, _]) => new RepeatNTimesBlock(nRepeat)),
    repeatTimes: _ => P.digits.map(n => parseInt(n))
})
