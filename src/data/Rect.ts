import Vector2 from "./Vector2";

export default class Rect {
  private _size : Vector2;
  public center : Vector2;

  public set size(value : Vector2) {
    this._size = value;
  }

  public get width() {
    return this._size.x === 0 ? 1 : this._size.x;
  }

  public get height() {
    return this._size.y === 0 ? 1 : this._size.y;
  }

  public get xMin() {
    return this.center.x - this.width / 2;
  }

  public get yMin() {
    return this.center.y - this.height / 2;
  }

  public get xMax() {
    return this.center.x + this.width / 2;
  }

  public get yMax() {
    return this.center.y + this.height / 2;
  }

  constructor(position : Vector2, size : Vector2) {
    this.center = position;
    this._size = size;
  }
}