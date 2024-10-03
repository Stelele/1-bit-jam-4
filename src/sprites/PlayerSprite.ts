import { Graphics, Ticker } from "pixi.js";
import { IUpdatable } from "../types/IUpdatable";
import { app } from "../main";
import { Input } from "../utils/InputHandler";

export class PlayerSprite extends Graphics implements IUpdatable {
    private readonly GRAVITY = 3
    private prevY: number = 0

    private readonly WALKING_SPEED = 4

    private readonly JUMP_SPEED = 15
    private readonly JUMP_TIME = 10
    private jumpTime = 0
    private isJumping = false

    public constructor(label: string, x: number, y: number, width: number, height: number) {
        super()

        this.label = label
        this.rect(x, y, width, height)
        this.fill(0xffffff)
    }

    private get input() {
        return {
            A: Input.keys["KeyA"] === true,
            D: Input.keys["KeyD"] === true,
            SPACE: Input.debounceKeys["Space"] === true,
        }
    }

    private get isFalling() {
        return this.prevY - this.y < 0
    }

    public update(dt: Ticker) {
        this.handleGravity(dt)
        this.handleInput(dt)
        this.handleJump(dt)
    }

    private handleInput(dt: Ticker) {
        if (this.input.A) {
            this.position.x -= this.WALKING_SPEED * dt.deltaTime
        }
        if (this.input.D) {
            this.position.x += this.WALKING_SPEED * dt.deltaTime
        }
        if (this.input.SPACE && !this.isJumping && !this.isFalling) {
            this.isJumping = true
            this.jump()
        }

    }

    private handleJump(dt: Ticker) {
        if (this.isJumping) {
            this.position.y -= this.JUMP_SPEED * dt.deltaTime
            this.jumpTime -= 1
            if (this.jumpTime <= 0) {
                this.isJumping = false
            }
        }
    }

    private handleGravity(dt: Ticker) {
        this.prevY = this.y
        this.position.y = Math.min(this.position.y + this.GRAVITY * dt.deltaTime, app.height - 100)
    }

    private jump() {
        this.isJumping = true
        this.jumpTime = this.JUMP_TIME
    }
}