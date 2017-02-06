import Component from "../components/Component";
import Vector2 from "../data/Vector2";

export default class Square extends Component {
  public size : Vector2 = new Vector2(1, 1);

  Update() { }

  Draw(context : CanvasRenderingContext2D) {
    context.fillStyle = 'rgba(0, 0, 200, 0.5)';
    context.fillRect( -(this.size.x / 2), -(this.size.y / 2), this.size.x, this.size.x);
  }
}