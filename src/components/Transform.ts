import Vector2 from "../data/Vector2";

const DEGREES_TO_RADIANS : number = 0.0174533;
const RADIANS_TO_DEGREES : number = 57.2958;

export default class Transform {

  public position : Vector2;

  private _rotation : number;
  public get rotation() { return this._rotation; }
  public set rotation(degrees : number) {
    this._rotation = degrees;
    if(this._rotation > 360) {
      this._rotation = this._rotation % 360;
    }
    this._rotationRadians = degrees * DEGREES_TO_RADIANS;
  } 

  private _rotationRadians : number;
  public get rotationRadians() { return this._rotationRadians; }
  public set rotationRadians(radians : number) {
    this._rotationRadians = radians;
    this._rotation = radians * RADIANS_TO_DEGREES;
    if(this._rotation > 360) {
      this._rotation = this._rotation % 360;
      this._rotationRadians = this._rotation * DEGREES_TO_RADIANS;
    }
  } 

  constructor() {
    this.position = new Vector2(0, 0);
    this.rotation = 0;
  }
}