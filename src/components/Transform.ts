import GameObject from "./GameObject";
import Vector2 from "../data/Vector2";
import Rect from "../data/Rect";

const DEGREES_TO_RADIANS : number = 0.0174533;
const RADIANS_TO_DEGREES : number = 57.2958;

export default class Transform {
  private _gameObject : GameObject;
  public get gameObject() { return this._gameObject; }

  private _parent : Transform;
  public get parent() { return this._parent; }

  private _children : Array<Transform>;
  public get children() { return this._children; }

  public bounds : Rect;

  public localPosition : Vector2;

  private _position : Vector2;
  public get position() : Vector2 {
    return this._position;
  }

  public set position(value : Vector2) {
    if(this._parent) {
      this.localPosition = new Vector2(value.x - this._parent.position.x, value.y - this._parent.position.y);
      this._position = new Vector2(this._parent.position.x + this.localPosition.x, this._parent.position.y + this.localPosition.y);
    }
    else {
      this.localPosition = value;
      this._position = this.localPosition;
    }

    this.bounds.center = this._position;
  }

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

  constructor(gameObject : GameObject) {
    this._gameObject = gameObject;
    this.localPosition = new Vector2();
    this._position = new Vector2();
    this._children = new Array<Transform>();
    this._rotation = 0;
    this.bounds = new Rect(this._position, new Vector2(0, 0));
  }

  SetParent(parent : Transform) {
    this._parent = parent;
    this._parent._children.push(this);
    this._position = parent.position;
    this.bounds.center = this._position;
  }
}