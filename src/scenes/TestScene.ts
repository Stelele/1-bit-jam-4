import { Container, Ticker } from "pixi.js";
import { IUpdatable } from "../types/IUpdatable";
import { PlayerSprite } from "../sprites/PlayerSprite";

export class TestScene extends Container implements IUpdatable {
    private player: PlayerSprite

    public constructor() {
        super()

        this.x

        this.player = new PlayerSprite("Player", 0, 0, 20, 20)
        this.addChild(this.player)
    }

    public update(dt: Ticker) {
        this.player.update(dt)
    }
} 