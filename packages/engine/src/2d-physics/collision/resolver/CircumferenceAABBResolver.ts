import { clamp, Vector2 } from "../../../math";
import { ICollisionResolution, ICollisionResolver } from "./ICollisionResolver";
import { Circumference, Polygon } from "../../component/Shape";

export class CircumferenceAABBResolver implements ICollisionResolver {
    private closestPoint: Vector2 = new Vector2();
    private distance: Vector2 = new Vector2();
    private direction: Vector2 = new Vector2();

    public resolve(shapeA: Circumference, shapeB: Polygon, invert: boolean = false): ICollisionResolution {
        this.closestPoint.set(
            clamp(shapeA.position.x, shapeB.boundingBox.x, shapeB.boundingBox.x1),
            clamp(shapeA.position.y, shapeB.boundingBox.y, shapeB.boundingBox.y1),
        );

        Vector2.subtract(this.distance, this.closestPoint, shapeA.position);

        if (this.distance.magnitude > shapeA.radius) return undefined;

        Vector2.unit(this.direction, this.distance);

        return {
            direction: invert ? Vector2.scale(new Vector2(), this.direction, -1) : this.direction.clone(),
            penetration: shapeA.radius - this.distance.magnitude,
        };
    }
}
