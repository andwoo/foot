import GameObject from "./components/GameObject";
import Vector2 from "./data/Vector2";
import Square from "./shapes/Square";

export default class TestObject extends GameObject {
  public velocity : Vector2;

  constructor() {
    super();

    let squareComponent = new Square();
    squareComponent.size = new Vector2(50, 50);
    this.AddComponent(squareComponent);

    this.velocity = new Vector2(0, 9.8);
    this.transform.position = new Vector2(500, 400);
  }

  Update() {
    //this.transform.position.y += this.velocity.y;
    this.transform.rotation += 5;
  }
}