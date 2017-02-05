import GameObject from "./components/GameObject";
import Vector2 from "./data/Vector2";

export default class Square extends GameObject {
  public velocity : Vector2;

  constructor() {
    super();
    this.velocity = new Vector2(0, 9.8);
  }

  update() {
    this.transform.position.y += this.velocity.y;
  }

  draw(context : CanvasRenderingContext2D) {
    context.save();

    context.translate(this.transform.position.x, this.transform.position.y);

    context.rotate(45*Math.PI/180);
    context.fillStyle = 'rgba(0, 0, 200, 0.5)';
    context.fillRect(0, 0, 50, 50);
    context.restore();
  }
}