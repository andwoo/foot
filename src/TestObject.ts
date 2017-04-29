import GameObject from "./components/GameObject";
import Vector2 from "./data/Vector2";
import Square from "./shapes/Square";
import Circle from "./shapes/Circle";
import Img from "./components/Img";
import Colour from "./data/Colour";

export default class TestObject extends GameObject {
  public toggleRotation : boolean;
  constructor() {
    super();
    this.width = 10;
    this.height = 10;

    this.AddImage();
  }

  AddSquare() {
    let shape : Square = new Square();
    shape.colour = new Colour(174, 213, 129, 1); 
    this.AddComponent(shape);
  }

  AddImage() {
    let imgage : Img = new Img();
    imgage.imagePath = "http://im.mtv.fi/image/5935814/landscape16_9/1024/576/574d2764d0e46b86a28846de55f6ed96/OJ/shutterstock-17038576.jpg";
    this.AddComponent(imgage);
  }

  Update() {
    if(this.toggleRotation) {
      this.transform.rotation += 1;
    }
  }
}