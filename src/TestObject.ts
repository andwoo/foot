import GameObject from "./components/GameObject";
import Vector2 from "./data/Vector2";
import Square from "./shapes/Square";

export default class TestObject extends GameObject {
  public velocity : Vector2;
  public toggleRotation : boolean;

  constructor() {
    super();

    let squareComponent = new Square(new Vector2(50, 50));
    this.AddComponent(squareComponent);

    this.velocity = new Vector2(0, 9.8);
  }

  Update() {
    //this.transform.position.y += this.velocity.y;
    if(this.toggleRotation) {
      this.transform.rotation += 1;
    }
    super.Update();
  }
}