import { GameObject } from "../../../GameObject";
import { Vector2 } from "../../../Helper/Vector2";

export enum ColliderType {
    Rectangle,
    Circle,
    Polygon,
}

export interface ICollider {
    readonly type: ColliderType;
    readonly gameObject: GameObject;

    coordinates: Vector2;
    points: Vector2[];

    readonly bottomLeftPoint: Vector2;
    readonly bottomRightPoint: Vector2;
    readonly topLeftPoint: Vector2;
    readonly topRightPoint: Vector2;
    hasCollision(collider: ICollider): boolean;
}
