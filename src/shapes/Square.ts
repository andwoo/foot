import Component from "../components/Component";
import Vector2 from "../data/Vector2";
import Colour from "../data/Colour";

export default class Square extends Component {
  public colour : Colour;
  
  constructor() {
    super();
    this.colour = new Colour(0, 0, 0, 1);
  }

  Update() { }

  Draw(context : CanvasRenderingContext2D) {
    let width : number = this.gameObject.width;
    let height : number = this.gameObject.height;

    context.fillStyle = `rgba(${this.colour.r}, ${this.colour.g}, ${this.colour.b}, ${this.colour.a})`;
    context.fillRect(-(width / 2), -(height / 2), width, height);
  }
}