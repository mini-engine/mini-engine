import Component from "../../Engine/Component";
import Camera from "../../Engine/Components/Camera";
import { TAG_PLAYER } from "../../Demo/GameObjects/Player";
import { TAG_FOREGROUND } from "../../Demo/GameObjects/Foreground";

export default class FollowPlayerCamera extends Component {
    camera = null;
    player = null;
    foreground = null;

    start() {
        this.camera = this.gameObject.camera;
        this.player = this.gameObject.scene.getGameObjectByTag(TAG_PLAYER);
        this.foreground = this.gameObject.scene.getGameObjectByTag(TAG_FOREGROUND);
    }

    update(event)  {
        let x = (this.foreground.width - event.canvas.width) / 2
        let y = (this.foreground.height - event.canvas.height) / 2

        x = x < 0 ? event.canvas.width / 2 : x;
        y = x < 0 ? event.canvas.height / 2 : x;
        
        this.gameObject.transform.position.x = this.clamp(this.player.transform.position.x, -x, x);
        this.gameObject.transform.position.y = this.clamp(this.player.transform.position.y, -y, y);
    }

    clamp (number, min, max) {
        return Math.max(min, Math.min(number, max));
    }
}