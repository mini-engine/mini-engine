import { GameCamera } from "../gameObject/GameCamera";
import { RenderManager } from "../rendering/RenderManager";
import { container, Game } from "./Game";
import { GameActor } from "./GameActor";

export class Scene extends GameActor {
    constructor(public readonly name: string, public readonly game: Game) {
        super();

        this.addGameObject(GameCamera);
    }

    public get gameCamera(): GameCamera {
        return this.findGameObject(GameCamera);
    }

    protected _destroy(): void {
        this.gameObjectManager.destroyAllGameObjects();

        if (!this.game.config.headless) {
            container.getSingleton<RenderManager>("RenderManager").clearData();
        }

        // @ts-ignore
        Object.keys(this).forEach((key) => delete this[key]);
    }
}
