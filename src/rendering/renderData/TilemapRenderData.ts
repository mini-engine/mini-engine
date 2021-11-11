import { Vector2 } from "../../math/Vector2";
import { Tile } from "../../component/renderingComponent/tilemap/Tile"; // TODO: resolve dependency
import { RenderData, RenderDataType } from "./RenderData";

export class TileRenderData {
    public tile: Tile;
    public position: Vector2 = new Vector2();
    public positionInViewport: Vector2 = new Vector2();
    public flipHorizontal: boolean;
    public flipVertical: boolean;
}

export class TilemapRenderData extends RenderData {
    public type: RenderDataType = RenderDataType.Tilemap;
    public image: HTMLImageElement;
    public smooth: boolean;
    public alpha: number;
    public tilesData: TileRenderData[] = [];
    public tilesToRender: TileRenderData[] = [];
    public tileWidth: number;
    public tileHeight: number;
    public textureCorrection: number;
    public tintColor: string;
}