import { IPhysicsManager, Polygon } from "../../../../2d-physics";
import { IEntityManager } from "../../../manager/EntityManager";
import { Vector2 } from "../../../../math";
import { System, SystemGroup } from "../../../manager/SystemManager";
import { BoxCollider } from "../../../component/collider/BoxCollider";

export class BoxColliderSystem extends System {
    constructor(
        private readonly entityManager: IEntityManager,
        private readonly physicsManager: IPhysicsManager,
    ) {
        super();
        this.group = SystemGroup.Physics;
    }

    public onUpdate(): void {
        this.entityManager.search(BoxCollider).forEach(({ entity, component: boxCollider }) => {
            this.createColliderIfNotExists(boxCollider);

            boxCollider._collider.layer = boxCollider.layer;
            boxCollider._collider.physics = boxCollider.physics;
            boxCollider._collider.offset.copy(boxCollider.offset);
            boxCollider._collider.shape.rotation = boxCollider.rotation;
            boxCollider._collider.shape.vertexModel[0].set(-boxCollider.width / 2, -boxCollider.height / 2);
            boxCollider._collider.shape.vertexModel[1].set(-boxCollider.width / 2, boxCollider.height / 2);
            boxCollider._collider.shape.vertexModel[2].set(boxCollider.width / 2, boxCollider.height / 2);
            boxCollider._collider.shape.vertexModel[3].set(boxCollider.width / 2, -boxCollider.height / 2);

            this.physicsManager.addCollider(entity, boxCollider._collider);
        });
    }

    private createColliderIfNotExists(boxCollider: BoxCollider): void {
        if (!boxCollider._collider) {
            boxCollider._collider = {
                layer: "",
                offset: new Vector2(),
                shape: new Polygon([new Vector2(), new Vector2(), new Vector2(), new Vector2()]),
                updateCollisions: true,
                physics: true,
            };
        }
    }
}
