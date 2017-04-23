import GameObject from "./components/GameObject";
import Vector2 from "./data/Vector2";
import Square from "./shapes/Square";
import Circle from "./shapes/Circle";
import Colour from "./data/Colour";

export default class TestObject extends GameObject {
  public toggleRotation : boolean;
  constructor() {
    super();
    this.width = 10;
    this.height = 10;

    let shape : Square = new Square();
    shape.colour = new Colour(174, 213, 129, 1);
    //shape.radius = 5;
    this.AddComponent(shape);
  }

  Update() {
    if(this.toggleRotation) {
      this.transform.rotation += 1;
    }
  }
}