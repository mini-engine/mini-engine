import { IPhysicsManager, Polygon } from "../../../../2d-physics";
import { Vector2 } from "../../../../math";
import { IEntityManager } from "../../../manager/EntityManager";
import { System, SystemGroup } from "../../../manager/SystemManager";
import { EdgeCollider } from "../../../component/collider/EdgeCollider";

export class EdgeColliderSystem extends System {
    constructor(
        private readonly entityManager: IEntityManager,
        private readonly physicsManager: IPhysicsManager,
    ) {
        super();
        this.group = SystemGroup.Physics;
    }

    public onUpdate(): void {
        this.entityManager.search(EdgeCollider).forEach(({ entity, component: edgeCollider }) => {
            for (let i = 0; i < edgeCollider.vertexModel.length - 1; i++) {
                this.updateColliders(edgeCollider, i);

                edgeCollider._colliders[i].offset.copy(edgeCollider.offset);
                edgeCollider._colliders[i].physics = edgeCollider.physics;
                edgeCollider._colliders[i].layer = edgeCollider.layer;
                edgeCollider._colliders[i].shape.rotation = edgeCollider.rotation;
                edgeCollider._colliders[i].shape.vertexModel = [
                    edgeCollider.vertexModel[i],
                    edgeCollider.vertexModel[i + 1],
                ];

                this.physicsManager.addCollider(entity, edgeCollider._colliders[i]);
            }
        });
    }

    private updateColliders(edgeCollider: EdgeCollider, index: number): void {
        if (!edgeCollider._colliders[index]) {
            edgeCollider._colliders[index] = {
                layer: "",
                offset: new Vector2(),
                shape: new Polygon([new Vector2(), new Vector2()]),
                updateCollisions: true,
                physics: true,
            };
        }
    }
}
