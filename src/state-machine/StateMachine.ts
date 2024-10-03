import { Ticker } from "pixi.js"

export interface IState {
    enter: () => void
    leave: () => void
    update: (dt: Ticker) => void
}

export class StateMachine {
    private static state: IState

    public static setState(newState: IState) {
        if (StateMachine.state) {
            StateMachine.state.leave()
        }
        StateMachine.state = newState
        StateMachine.state.enter()
    }

    public static update(dt: Ticker) {
        if (!StateMachine.state) return
        StateMachine.state.update(dt)
    }
}