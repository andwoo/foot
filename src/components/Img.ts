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
    this._image.onload = this.OnImageLoaded.bind(this);
  }

  public get imagePath() : string {
    return this._imagePath;
  }
  
  constructor() {
    super();
  }

  OnImageLoaded() {
    this._image.onload = null;
    this._imageLoaded = true;
  }

  Update() { }

  Draw(context : CanvasRenderingContext2D) {
    if(this._imageLoaded) {
      context.save();
      context.translate(-this.gameObject.transform.position.x, -this.gameObject.transform.position.y);

      context.drawImage(this._image, 
      //source image coordinates/sizing.
      0, 
      0, 
      this._image.width, 
      this._image.height, 
      //destination coordinates/sizing
      this.gameObject.transform.bounds.xMin,
      this.gameObject.transform.bounds.yMin,
      this.gameObject.width, 
      this.gameObject.height);

      context.restore();
    }
  }
}