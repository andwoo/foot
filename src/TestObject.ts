import GameObject from "./components/GameObject";
import Vector2 from "./data/Vector2";
import Square from "./shapes/Square";

export default class TestObject extends GameObject {
  public toggleRotation : boolean;

  constructor() {
    super();

    this.AddComponent(new Square());
    this.transform.bounds.size = new Vector2(2, 2);
  }

  Update() {
    if(this.toggleRotation) {
      this.transform.rotation += 1;
    }
    super.Update();
  }
}