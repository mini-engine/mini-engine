import { CollisionMethodConfig, container, GameConfig } from "../../core/Game";
import { Collider } from "./Collider";
import { Vector2 } from "../../math/Vector2";
import { Rotation } from "../../math/Rotation";
import { ColliderData } from "../../physics/collision/ColliderData";
import { Polygon } from "../../physics/collision/shape/Polygon";
import { RenderComponent } from "../../core/Component";
import { RenderManager } from "../../rendering/RenderManager";
import { GeometricRenderData, GeometricShape } from "../../rendering/renderData/GeometricRenderData";
import { Exception } from "../../utils/Exception";
import { InitOptions } from "../../core/GameActor";
import { GameObject } from "../../core/GameObject";
import { RigidBody } from "../RigidBody";

export interface PolygonColliderOptions extends InitOptions {
    vertexModel: Vector2[];
    offsetX?: number;
    offsetY?: number;
    rotation?: Rotation;
    layer?: string;
    physics?: boolean;
    debug?: boolean;
}

export class PolygonCollider extends Collider {
    public debug: boolean = false;
    public vertexModel: Vector2[];
    public offsetX: number = 0;
    public offsetY: number = 0;
    public rotation: Rotation;

    private scaledVertexModel: Vector2[] = [];
    private scaledOffset: Vector2 = new Vector2();
    private scaledPosition: Vector2 = new Vector2();
    private finalRotation: number = 0;
    private innerPosition: Vector2 = new Vector2();

    constructor(gameObject: GameObject, name?: string) {
        super(gameObject, name);

        if (container.getConstant<GameConfig>("GameConfig").collisions.method !== CollisionMethodConfig.SAT) {
            throw new Exception("Polygon Colliders need SAT collision method.");
        }
    }

    protected init(config: PolygonColliderOptions): void {
        if (config.vertexModel.length < 3) {
            throw new Exception("Polygon Collider needs at least 3 vertices.");
        }

        this.debug = (config.debug ?? this.debug) && container.getConstant<GameConfig>("GameConfig").debugEnabled;
        this.vertexModel = config.vertexModel;
        this.offsetX = config.offsetX ?? this.offsetX;
        this.offsetY = config.offsetY ?? this.offsetY;
        this.physics = config.physics ?? this.physics;
        this.rotation = config.rotation ?? new Rotation();
        this.layer = config.layer;

        for (let i = 0; i < this.vertexModel.length; i++) {
            this.scaledVertexModel.push(new Vector2());
        }
    }

    protected start(): void {
        this.colliders.push(
            new ColliderData(
                new Polygon(this.scaledVertexModel),
                this.layer ?? this.gameObject.layer,
                this.gameObject.id,
                true,
                this.physics,
                this.hasComponent(RigidBody)
            )
        );

        if (this.debug) {
            this.renderer = this.gameObject.addComponent(PolygonColliderRenderer, {
                collider: this.colliders[0],
            });
        }
    }

    protected update(): void {
        this.updateSize();
        this.updatePosition();
        this.updateShape();

        super.update();
    }

    private updateSize(): void {
        this.vertexModel.forEach((vertex, index) =>
            this.scaledVertexModel[index].set(
                vertex.x * this.gameObject.transform.scale.x,
                vertex.y * this.gameObject.transform.scale.y
            )
        );

        this.scaledOffset.x = this.offsetX * this.gameObject.transform.scale.x;
        this.scaledOffset.y = this.offsetY * this.gameObject.transform.scale.y;
        this.finalRotation = this.gameObject.transform.rotation.radians + this.rotation.radians;
    }

    protected updatePosition(): void {
        Vector2.add(this.scaledPosition, this.gameObject.transform.position, this.scaledOffset);

        if (this.gameObject.transform.rotation.radians !== 0) {
            this.translate();
        }
    }

    private translate(): void {
        Vector2.subtract(this.innerPosition, this.scaledPosition, this.gameObject.transform.position);
        const translatedAngle: number =
            Math.atan2(this.innerPosition.y, this.innerPosition.x) + this.gameObject.transform.rotation.radians;

        this.scaledPosition.set(
            this.gameObject.transform.position.x + this.innerPosition.magnitude * Math.cos(translatedAngle),
            this.gameObject.transform.position.y + this.innerPosition.magnitude * Math.sin(translatedAngle)
        );
    }

    private updateShape(): void {
        this.colliders[0].layer = this.layer ?? this.gameObject.layer;
        this.colliders[0].shape.position = this.scaledPosition;
        this.colliders[0].shape.angle = this.finalRotation;
        this.colliders[0].shape.vertexModel = this.scaledVertexModel;

        this.colliders[0].shape.update();
    }
}

class PolygonColliderRenderer extends RenderComponent {
    private renderManager: RenderManager = container.getSingleton<RenderManager>("RenderManager");

    private renderData: GeometricRenderData;
    private collider: ColliderData;

    protected config({ collider }: { collider: ColliderData }): void {
        this.renderData = new GeometricRenderData();
        this.renderData.debug = true;
        this.renderData.color = "#00FF00";

        this.collider = collider;
    }

    protected update(): void {
        this.renderData.layer = this.gameObject.layer;
        this.renderData.shape = GeometricShape.Polygon;
        this.renderData.position = this.collider.shape.position;
        this.renderData.angle = this.collider.shape.angle;
        this.renderData.boundingBox = this.collider.shape.boundingBox;
        this.renderData.vertexModel = this.collider.shape.vertexModel;

        this.renderManager.addRenderData(this.renderData);
    }
}