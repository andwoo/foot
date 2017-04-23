import Component from "./Component";
import Transform from "./Transform";
import Vector2 from "../data/Vector2";

export default class GameObject {
  private _components : Array<Component>;
  private _transform : Transform;
  public get transform() { return this._transform; }
  
  public set width(value : number) {
    this.transform.bounds.size = new Vector2(value, this.height);
  }
  public set height(value : number) {
    this.transform.bounds.size = new Vector2(this.width, value);
  }
  public get width() : number {
    return this.transform.bounds.width;
  }
  public get height() : number {
    return this.transform.bounds.height;
  }

  constructor() {
    this._components = new Array<Component>();
    this._transform = new Transform(this);
  }

  AddComponent(component : Component) {
    component.gameObject = this;
    this._components.push(component);
  }

  RemoveComponent(component : Component) {
    let index = this._components.indexOf(component);
    if(index != -1) {
      component.gameObject = null;
      this._components.slice(index, 1);
    }
  }

  Update() { }

  InternalUpdate() {
    this.Update();
    for(let i = 0; i < this._components.length; ++i) {
      this._components[i].Update();
    }

    for(let i = 0; i < this._transform.children.length; ++i) {
      this._transform.children[i].gameObject.InternalUpdate();
    }
  }

  InternalDraw(context : CanvasRenderingContext2D) {
    context.translate(this._transform.localPosition.x, this._transform.localPosition.y);
    context.rotate(this._transform.rotationRadians);

    for(let i = 0; i < this._components.length; ++i) {
      this._components[i].Draw(context);
    }

    for(let i = 0; i < this._transform.children.length; ++i) {
      this._transform.children[i].gameObject.InternalDraw(context);
    }

    context.translate(-this._transform.localPosition.x, -this._transform.localPosition.y);
    context.rotate(-this._transform.rotationRadians);
  }
}