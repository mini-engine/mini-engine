import { RenderManager } from "../../rendering/RenderManager";
import { CollisionMethodConfig, container, GameConfig } from "../../core/Game";
import { Collider } from "./Collider";
import { GeometricRenderData, GeometricShape } from "../../rendering/renderData/GeometricRenderData";
import { Vector2 } from "../../math/Vector2";
import { RenderComponent } from "../../core/Component";
import { Rotation } from "../../math/Rotation";
import { ColliderData } from "../../physics/collision/ColliderData";
import { Rectangle } from "../../physics/collision/shape/Rectangle";
import { InitOptions } from "../../core/GameActor";
import { RigidBody } from "../RigidBody";

export interface BoxColliderOptions extends InitOptions {
    width: number;
    height: number;
    offsetX?: number;
    offsetY?: number;
    rotation?: Rotation;
    layer?: string;
    physics?: boolean;
    debug?: boolean;
}

export class BoxCollider extends Collider {
    public debug: boolean = false;
    public width: number;
    public height: number;
    public offsetX: number = 0;
    public offsetY: number = 0;
    public rotation: Rotation;

    private realWidth: number = 0;
    private realHeight: number = 0;
    private realOffset: Vector2 = new Vector2();
    private realPosition: Vector2 = new Vector2();
    private realRotation: number = 0;

    private applyRotation: boolean =
        container.getConstant<GameConfig>("GameConfig").collisions.method === CollisionMethodConfig.SAT;
    private innerPosition: Vector2 = new Vector2();

    protected init(config: BoxColliderOptions): void {
        this.width = config.width;
        this.height = config.height;
        this.offsetX = config.offsetX ?? this.offsetX;
        this.offsetY = config.offsetY ?? this.offsetY;
        this.physics = config.physics ?? this.physics;
        this.debug = (config.debug ?? this.debug) && container.getConstant<GameConfig>("GameConfig").debugEnabled;
        this.rotation = config.rotation ?? new Rotation();
        this.layer = config.layer;
    }

    protected start(): void {
        this.colliders.push(
            new ColliderData(
                new Rectangle(this.realWidth, this.realHeight, this.realPosition),
                this.layer ?? this.gameObject.layer,
                this.gameObject.id,
                true,
                this.physics,
                this.hasComponent(RigidBody)
            )
        );

        if (this.debug) {
            this.renderer = this.gameObject.addComponent(BoxColliderRenderer, { collider: this.colliders[0] });
        }
    }

    protected update(): void {
        this.updateRealSize();
        this.updatePosition();
        this.updateShape();

        super.update();
    }

    private updateRealSize(): void {
        this.realWidth = this.width * Math.abs(this.gameObject.transform.scale.x);
        this.realHeight = this.height * Math.abs(this.gameObject.transform.scale.y);

        this.realOffset.x = this.offsetX * this.gameObject.transform.scale.x;
        this.realOffset.y = this.offsetY * this.gameObject.transform.scale.y;

        this.realRotation = this.applyRotation ? this.gameObject.transform.rotation.radians + this.rotation.radians : 0;
    }

    protected updatePosition(): void {
        Vector2.add(this.realPosition, this.gameObject.transform.position, this.realOffset);

        if (this.gameObject.transform.rotation.radians !== 0) {
            this.translate();
        }
    }

    private translate(): void {
        Vector2.subtract(this.innerPosition, this.realPosition, this.gameObject.transform.position);
        const translatedAngle: number =
            Math.atan2(this.innerPosition.y, this.innerPosition.x) + this.gameObject.transform.rotation.radians;

        this.realPosition.set(
            this.gameObject.transform.position.x + this.innerPosition.magnitude * Math.cos(translatedAngle),
            this.gameObject.transform.position.y + this.innerPosition.magnitude * Math.sin(translatedAngle)
        );
    }

    private updateShape(): void {
        this.colliders[0].layer = this.layer ?? this.gameObject.layer;
        this.colliders[0].shape.position = this.realPosition;
        this.colliders[0].shape.angle = this.realRotation;
        (this.colliders[0].shape as Rectangle).updateSize(this.realWidth, this.realHeight);

        this.colliders[0].shape.update();
    }
}

class BoxColliderRenderer extends RenderComponent {
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