import { Component } from "../../Component";
import { Sprite } from "../../Sprite";
declare type Config = {
    sprite: Sprite;
    offsetX: number;
    offsetY: number;
    smooth: boolean;
    rotation: number;
    flipHorizontal: boolean;
    flipVertical: boolean;
    opacity: number;
};
export declare class SpriteRenderer extends Component {
    sprite: Sprite;
    offsetX: number;
    offsetY: number;
    flipHorizontal: boolean;
    flipVertical: boolean;
    rotation: number;
    smooth: boolean;
    opacity: number;
    private renderManager;
    private renderData;
    private goPosition;
    constructor(config: Config);
    protected start(): void;
    protected update(): void;
    private calculateRenderPosition;
    private translateRenderPosition;
}
export {};