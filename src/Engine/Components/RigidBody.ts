import { Component, PhysicsComponent } from "../Component";
import { ICollider } from "../Core/Collision/Collider/ICollider";
import { Collision } from "../Core/Collision/CollisionManager";
import { TimeManager } from "../Core/Time/TimeManager";
import { container } from "../Game";
import { Vector2 } from "../Helper/Vector2";
import { ColliderComponent } from "./Colliders/ColliderComponent";

export enum RigidBodyType {
    Static,
    Dynamic,
}

interface Config {
    rigidBodyType: RigidBodyType;
    colliders: ColliderComponent[];
    layersToCollide: string[];
    gravity?: number;
}

export const TYPE_RIGIDBODY: string = "RigidBody";

export class RigidBody extends PhysicsComponent {
    private _rigidBodyType: RigidBodyType;
    private _colliderComponents: ColliderComponent[] = [];
    private _gravity: number = 1;
    private _layersToCollide: string[] = [];
    private _velocity: Vector2 = new Vector2(0, 0);
    private deltaVelocity: number = 0;

    private collisions: Collision[] = [];

    private timeManager: TimeManager = container.getSingleton<TimeManager>("TimeManager");

    constructor(config: Config) {
        super();

        this.type = TYPE_RIGIDBODY;
        this.allowMultiple = false;

        this._rigidBodyType = config.rigidBodyType;
        this._colliderComponents = config.colliders;
        this._layersToCollide = config.layersToCollide;
        this._gravity = config.gravity ?? this._gravity;
    }

    public get rigidBodyType(): RigidBodyType {
        return this._rigidBodyType;
    }

    public set velocity(velocity: Vector2) {
        this._velocity.set(velocity.x, velocity.y);
    }

    public get velocity(): Vector2 {
        return this._velocity;
    }

    public set gravity(gravity: number) {
        this._gravity = gravity;
    }

    public get gravity(): number {
        return this._gravity;
    }

    protected update(): void {
        if (this._rigidBodyType === RigidBodyType.Static) {
            return;
        }

        this.applyGravityToVelocity();
        this.moveGameObject();
    }

    private applyGravityToVelocity(): void {
        if (this._gravity > 0) {
            this._velocity.y -= this._gravity * this.timeManager.deltaTime;
        }
    }

    private moveGameObject(): void {
        if (this._velocity.x !== 0) {
            this.moveX();
        }

        if (this._velocity.y !== 0) {
            this.moveY();
        }
    }

    private moveX(): void {
        this.deltaVelocity = this._velocity.x * this.timeManager.deltaTime;
        this.gameObject.transform.position.x += this.deltaVelocity;
        this.updateCollisions();
        let rollback: boolean = false;

        this.collisions.forEach((collision: Collision) => {
            const rigidBody = collision.remoteCollider.gameObject.getComponentByType<RigidBody>(TYPE_RIGIDBODY);
            if (rigidBody !== null) {
                rollback ||=
                    (this.deltaVelocity > 0 &&
                        collision.remoteCollider.coordinates.x >= collision.localCollider.coordinates.x) ||
                    (this.deltaVelocity < 0 &&
                        collision.remoteCollider.coordinates.x <= collision.localCollider.coordinates.x);
            }
        });

        if (rollback) {
            this.gameObject.transform.position.x -= this.deltaVelocity;
            this._velocity.x = 0;
        }
    }

    private moveY(): void {
        this.deltaVelocity = this._velocity.y * this.timeManager.deltaTime;
        this.gameObject.transform.position.y += this.deltaVelocity;
        this.updateCollisions();
        let rollback: boolean = false;

        this.collisions.forEach((collision: Collision) => {
            const rigidBody = collision.remoteCollider.gameObject.getComponentByType<RigidBody>(TYPE_RIGIDBODY);
            if (rigidBody !== null) {
                rollback ||=
                    (this.deltaVelocity > 0 &&
                        collision.remoteCollider.coordinates.y >= collision.localCollider.coordinates.y) ||
                    (this.deltaVelocity < 0 &&
                        collision.remoteCollider.coordinates.y <= collision.localCollider.coordinates.y);
            }
        });

        if (rollback) {
            this.gameObject.transform.position.y -= this.deltaVelocity;
            this._velocity.y = 0;
        }
    }

    private updateCollisions(): void {
        this.collisions = [];

        this._colliderComponents.forEach((collider: ColliderComponent) =>
            this._layersToCollide.forEach((layer: string) =>
                collider.getCollisionsWithLayer(layer).forEach((collision: Collision) => {
                    this.collisions.push(collision);
                })
            )
        );
    }
}
