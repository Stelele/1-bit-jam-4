import { Ticker } from "pixi.js";

export interface IUpdatable {
    update: (dt: Ticker) => void
}