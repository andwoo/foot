import Component from "../components/Component";
import Vector2 from "../data/Vector2";

export default class Square extends Component {
  Update() { }

  Draw(context : CanvasRenderingContext2D) {
    let width : number = this.gameObject.transform.bounds.width;
    let height : number = this.gameObject.transform.bounds.height;

    context.fillStyle = 'rgba(0, 0, 200, 1)';
    context.fillRect(-(width / 2), -(height / 2), width, height);
  }
}