import { Vector2 } from "@math";

export const defaultRenderLayer = "Default";

/**
 * @public
 * @category Components
 */
export interface CameraOptions {
    layers: string[];
    zoom: number;
    depth: number;
}

/**
 * @public
 * @category Components
 */
export class Camera {
    /** Layers to be rendered by this camera. Layers are rendered in ascending order */
    layers: string[] = [defaultRenderLayer];
    /** Camera zoom. Default value is 1 */
    zoom: number = 1;
    /** In case you have more than one camera, the depth value determines which camera is rendered first. The lesser value, the first to render */
    depth: number = 0;
    /** @internal */
    _position: Vector2 = new Vector2();

    constructor(options?: Partial<CameraOptions>) {
        Object.assign(this, options);
    }
}
