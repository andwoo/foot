import Component from "../components/Component";
import Vector2 from "../data/Vector2";
import Colour from "../data//Colour";

export default class Square extends Component {
  private colour : Colour;
  
  constructor(colour : Colour) {
    super();
    this.colour = colour;
  }

  Update() { }

  Draw(context : CanvasRenderingContext2D) {
    let width : number = this.gameObject.transform.bounds.width;
    let height : number = this.gameObject.transform.bounds.height;

    context.fillStyle = `rgba(${this.colour.r}, ${this.colour.g}, ${this.colour.b}, ${this.colour.a})`;
    context.fillRect(-(width / 2), -(height / 2), width, height);
  }
}