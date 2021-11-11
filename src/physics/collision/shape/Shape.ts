import { Vector2 } from "../../../math/Vector2";

export enum ShapeType {
    Rectangle,
}

export abstract class Shape {
    protected _type: ShapeType;
    protected _model: Vector2[] = [];
    protected _vertices: Vector2[] = [];
    protected _position: Vector2 = new Vector2();
    protected _direction: Vector2 = new Vector2();
    protected _height: number = 0;
    protected _width: number = 0;
    protected _angle: number = 0;

    public get type(): ShapeType {
        return this._type;
    }

    public get position(): Vector2 {
        return this._position;
    }

    public set position(position: Vector2) {
        this._position.set(position.x, position.y);
    }

    public get angle(): number {
        return this._angle;
    }

    public set angle(angle: number) {
        this._angle = angle;
    }

    public get width(): number {
        return this._width;
    }

    public set width(width: number) {
        this._width = width;
    }

    public get height(): number {
        return this._height;
    }

    public set height(height: number) {
        this._height = height;
    }

    public get direction(): Vector2 {
        return this._direction;
    }

    public get vertices(): Vector2[] {
        return this._vertices;
    }

    public abstract update(): void;

    public abstract clone(): Shape;

    public abstract getAxes(): Vector2[];
}