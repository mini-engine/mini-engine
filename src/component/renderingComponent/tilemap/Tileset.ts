import { Vector2 } from "../../../math/Vector2";
import { Tile } from "./Tile";

export interface TilesetConfig {
    image: HTMLImageElement;
    tileWidth: number;
    tileHeight: number;
    gridWidth: number;
    gridHeight: number;
    offset?: Vector2;
    spacing?: Vector2;
}

export class Tileset {
    public image: HTMLImageElement = null;
    public tileWidth: number;
    public tileHeight: number;
    public gridWidth: number; // in number of tails
    public gridHeight: number; // in number of tails
    public offset: Vector2 = new Vector2(0, 0);
    public tileSpacing: Vector2 = new Vector2(0, 0);

    private _tiles: Tile[] = [];

    constructor(config: TilesetConfig) {
        this.image = config.image;
        this.tileWidth = config.tileWidth;
        this.tileHeight = config.tileHeight;
        this.gridWidth = config.gridWidth;
        this.gridHeight = config.gridHeight;
        this.offset = config.offset ?? this.offset;
        this.tileSpacing = config.spacing ?? this.tileSpacing;

        this.generateTiles();
    }

    private generateTiles(): void {
        let index: number = 0;

        for (let row: number = 0; row < this.gridHeight; row++) {
            for (let col: number = 0; col < this.gridWidth; col++) {
                this._tiles[index] = new Tile(
                    col * this.tileWidth + col * this.tileSpacing.x + this.offset.x,
                    row * this.tileHeight + row * this.tileSpacing.y + this.offset.y,
                    this.tileWidth,
                    this.tileHeight
                );

                index++;
            }
        }
    }

    public getTile(index: number): Tile | null {
        return this._tiles[index] ? this._tiles[index] : null;
    }

    public get tiles(): Tile[] {
        return this._tiles;
    }
}