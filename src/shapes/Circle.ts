import Component from "../components/Component";
import Vector2 from "../data/Vector2";
import Colour from "../data/Colour";

export default class Circle extends Component {
  public colour : Colour;
  public radius : number;
  
  constructor() {
    super();
    this.colour = new Colour(0, 0, 0, 1);
    this.radius = 0;
  }

  Update() { }

  Draw(context : CanvasRenderingContext2D) {
    let width : number = this.gameObject.transform.bounds.width;
    let height : number = this.gameObject.transform.bounds.height;
    context.beginPath();
    context.fillStyle = `rgba(${this.colour.r}, ${this.colour.g}, ${this.colour.b}, ${this.colour.a})`;
    context.arc(0, 0, this.radius, 0, 2 * Math.PI, false);
    context.fill();
  }
}