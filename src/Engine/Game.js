import Input from "./Input/Input";
import SceneManager from "./Scene/SceneManager";
import RenderManager from "./Rendering/RenderManager";

const CANVAS_ID = 'miniEngineCanvas';

(function () {
    let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

export default class Game {
    canvas = null;
    canvasContext = null;
    input = null;
    sceneManager = null;
    renderManager = null;

    constructor(containerId, width, height) {
        this.createCanvas(document.getElementById(containerId), width, height);
        this.canvasContext = this.canvas.getContext('2d');
        this.sceneManager = new SceneManager();
        this.renderManager = new RenderManager();
    }

    createCanvas(container, width, height) {
        this.canvas = document.createElement('canvas');
        this.canvas.id = CANVAS_ID;
        this.canvas.width = width;
        this.canvas.height = height;

        container.appendChild(this.canvas);
    }

    addScene(sceneId, sceneFunction, openingScene = false) {
        this.sceneManager.addScene(sceneId, sceneFunction, openingScene);
    }

    run() {
        this.input = new Input(this);
        this.sceneManager.loadOpeningScene();
        this.gameLoop();
    }

    gameLoop() {
        this.clearCanvas();
        
        window.dispatchEvent(new CustomEvent(
            'gameLoop',
            {
                detail: {
                    game: this,
                    sceneManager: this.sceneManager,
                    renderManager: this.renderManager,
                    canvas: this.canvas,
                    canvasContext: this.canvasContext,
                    input: this.input,
                }
            }
        ));

        window.requestAnimationFrame(() => this.gameLoop());
    }

    clearCanvas() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvasContext.fillStyle = '#000000';
        this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}