import GameObject from "./components/GameObject";
import Vector2 from "./data/Vector2";
import Square from "./shapes/Square";
import Colour from "./data/Colour";

export default class TestObject extends GameObject {
  public toggleRotation : boolean;

  private _width : number = 10;
  private _height : number = 10;

  constructor() {
    super();

    this.AddComponent(new Square(new Colour(174, 213, 129, 1)));
    this.transform.bounds.size = new Vector2(this._width, this._height);
  }

  Update() {
    if(this.toggleRotation) {
      this.transform.rotation += 1;
    }
    super.Update();
  }
}