import Component from "../components/Component";
import Vector2 from "../data/Vector2";
import Colour from "../data/Colour";

export default class Img extends Component {
  private _imageLoaded : boolean;
  private _image : HTMLImageElement;
  private _imagePath : string;

  public set imagePath(value : string) {
    this._imageLoaded = false;
    this._imagePath = value;
    this._image = new Image();
    this._image.src = this._imagePath;
    this._image.onload = this.OnImageLoaded;
  }

  public get imagePath() : string {
    return this._imagePath;
  }
  
  constructor() {
    super();
  }

  OnImageLoaded() {
    this._imageLoaded = true;
    console.log("banana loaded");
  }

  Update() { }

  Draw(context : CanvasRenderingContext2D) {
    if(this._imageLoaded){
      let width : number = this.gameObject.width;
      let height : number = this.gameObject.height;
      figure out why the image isnt drawing
      context.drawImage(this._image, 0, 0, this._image.width, this._image.height, 0, 0, width, height);
      //context.drawImage(this._image, width, height);
    }
  }
}