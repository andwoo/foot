import Vector2 from "./Vector2";

export default class Square {
  public position : Vector2;
  public velocity : Vector2;

  constructor() {
    this.position = new Vector2();
    this.velocity = new Vector2();

    this.velocity.y = 9.8;
  }

  update() {
    this.position.y += this.velocity.y;
  }

  draw(context : CanvasRenderingContext2D) {
    context.save();

    context.translate(this.position.x, this.position.y);

    context.rotate(45*Math.PI/180);
    context.fillStyle = 'rgba(0, 0, 200, 0.5)';
    context.fillRect(0, 0, 50, 50);
    context.restore();
  }
}