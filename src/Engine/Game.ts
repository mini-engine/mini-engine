import { SceneManager, SceneConstructor as SceneFactory } from "./Core/Scene/SceneManager";
import { RenderManager } from "./Core/Rendering/RenderManager";
import { loadDependencies } from "./Core/DependencyInjection/Config";
import { Container } from "./Core/DependencyInjection/Container";
import { DEFAULT_GAME_FRAMERATE, DEFAULT_PHYSICS_FRAMERATE } from "./Core/GameLoop/TimeManager";
import { AssetManagerFacade } from "./Facades/AssetManagerFacade";
import { DomManagerFacade } from "./Facades/DomManagerFacade";
import { InputManagerFacade } from "./Facades/InputManagerFacade";
import { SceneManagerFacade } from "./Facades/SceneManagerFacade";
import { TimeManagerFacade } from "./Facades/TimeManagerFacade";
import { GameObjectManagerFacade } from "./Facades/GameObjectManagerFacade";
import { DEFAULT_MAX_LEVELS, DEFAULT_MAX_COLLIDERS } from "./Core/Collision/QuadTree";
import { Rectangle } from "./Math/Rectangle";
import { MiniEngineException } from "./Core/Exception/MiniEngineException";
import { Vector2 } from "./Math/Vector2";
import { IterationManager } from "./Core/GameLoop/IterationManager";

export const EVENT_START: string = "mini-engine-start";
export const EVENT_UPDATE: string = "mini-engine-update";
export const EVENT_UPDATE_ENGINE: string = "mini-engine-update-engine";
export const EVENT_UPDATE_COLLIDER: string = "mini-engine-update-collider";
export const EVENT_UPDATE_PHYSICS: string = "mini-engine-update-physics";
export const EVENT_UPDATE_RENDER: string = "mini-engine-update-render";

export const container: Container = new Container();

export interface GameConfig {
    containerNode: HTMLElement;
    gameWidth?: number;
    gameHeight?: number;
    debugEnabled?: boolean;
    canvasColor?: string;
    context2d?: Context2DConfig;
    gameFrameRate?: number;
    physicsFramerate?: number;
    spriteDefaultScale?: Vector2;
    collisions?: {
        method?: CollisionMethodConfig;
        quadTreeBounds?: Rectangle; // TODO: implement different bounds per scene
        debugQuadTree?: boolean;
        quadMaxLevel?: number;
        collidersPerQuad?: number;
    };
}

export enum Context2DConfig {
    Default = "default",
    Disabled = "disabled",
    Fallback = "fallback",
}

export enum CollisionMethodConfig {
    AABB = "aabb",
    SAT = "sat",
}

const defaultConfig: GameConfig = {
    containerNode: null,
    gameWidth: 320,
    gameHeight: 180,
    debugEnabled: false,
    canvasColor: "#000000",
    context2d: Context2DConfig.Fallback,
    spriteDefaultScale: null,
    gameFrameRate: DEFAULT_GAME_FRAMERATE,
    physicsFramerate: DEFAULT_PHYSICS_FRAMERATE,
    collisions: {
        method: CollisionMethodConfig.AABB,
        quadTreeBounds: null,
        debugQuadTree: false,
        quadMaxLevel: DEFAULT_MAX_LEVELS,
        collidersPerQuad: DEFAULT_MAX_COLLIDERS,
    },
};

export class Game {
    private sceneManager: SceneManager;
    private renderManager: RenderManager;
    private iterationManager: IterationManager;

    private _config: GameConfig;

    private _running: boolean = false;
    private _stop: boolean = false;
    private frameRequestId: number = null;

    constructor(config: GameConfig) {
        this._config = {
            ...defaultConfig,
            ...config,
        };
        this._config.collisions = {
            ...defaultConfig.collisions,
            ...config.collisions,
        };

        window.addEventListener("error", this.errorEventHandler);

        this.setupManagers();
        this.initializeFacades();
    }

    private errorEventHandler = (event: ErrorEvent): void => {
        if (event.error.message.indexOf(MiniEngineException.messagePrefix) !== -1) {
            this.stop();

            event.stopPropagation();
            event.preventDefault();

            console.error(`${event.error.message}\n${event.filename}:${event.lineno}`);
        }
    };

    private setupManagers(): void {
        loadDependencies(container, this);

        this.renderManager = container.getSingleton<RenderManager>("RenderManager");
        this.sceneManager = container.getSingleton<SceneManager>("SceneManager");
        this.iterationManager = container.getSingleton<IterationManager>("IterationManager");
    }

    private initializeFacades(): void {
        AssetManagerFacade.initialize();
        DomManagerFacade.initialize();
        InputManagerFacade.initialize();
        SceneManagerFacade.initialize();
        TimeManagerFacade.initialize();
        GameObjectManagerFacade.initialize();
    }

    public get config(): GameConfig {
        return this._config;
    }

    public get running(): boolean {
        return this._running;
    }

    /**
     * Add a scene to the game
     *
     * @param name The name of the scene
     * @param sceneFactory The factory funciton for the escene
     * @param openingScene If this is the opening scene, set TRUE, FALSE instead
     */
    public addScene(name: string, sceneFactory: SceneFactory, openingScene: boolean = false): void {
        this.sceneManager.addScene(name, sceneFactory, openingScene);
    }

    /**
     * Run the game
     */
    public run(): void {
        this.sceneManager.loadOpeningScene();
        this.requestAnimationFrame();
    }

    /**
     * Stop the game
     */
    public stop(): void {
        this.pauseLoop();
        this.sceneManager.unloadCurrentScene();
        this.renderManager.clearCanvas();
    }

    private gameLoop(time: number): void {
        if (this._stop === true) return;

        this._running = true;
        this.iterationManager.update(time);
        this.requestAnimationFrame();
    }

    /**
     * Pauses the game loop
     */
    public pauseLoop(): void {
        this._stop = true;
        this._running = false;

        window.cancelAnimationFrame(this.frameRequestId);
        this.frameRequestId = null;
    }

    /**
     * Resumes the paused game loop
     */
    public resumeLoop(): void {
        if (this._running == false && this.frameRequestId === null) {
            this._stop = false;
            this.requestAnimationFrame();
        }
    }

    private requestAnimationFrame(): void {
        this.frameRequestId = window.requestAnimationFrame((time) => this.gameLoop(time));
    }
}
