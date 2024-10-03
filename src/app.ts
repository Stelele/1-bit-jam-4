import { Application } from "pixi.js";
import { StateMachine } from "./state-machine/StateMachine";
import { StartState } from "./state-machine/states/StartState";
import { Input } from "./utils/InputHandler";

export class App {
    public pixi: Application
    public get width() { return window.innerWidth }
    public get height() { return window.innerHeight }

    public constructor() {
        this.pixi = new Application()
    }

    public async start() {
        await this.pixi.init({
            background: "#000000",
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            resizeTo: window,
        })

        document.body.appendChild(this.pixi.canvas)

        Input.init()
        StateMachine.setState(new StartState())
        this.pixi.ticker.add(StateMachine.update)
    }
}