import { Ticker } from "pixi.js";
import { IState } from "../StateMachine";
import { TestScene } from "../../scenes/TestScene";
import { app } from "../../main";

export class StartState implements IState {
    private scene!: TestScene

    public enter() {
        this.scene = new TestScene()
        app.pixi.stage.addChild(this.scene)
    }

    public leave() {
        app.pixi.stage.removeChild(this.scene)
    }

    public update(dt: Ticker) {
        if (!this.scene) return
        this.scene.update(dt)
    }

}