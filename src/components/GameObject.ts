import Component from "./Component";
import Transform from "./Transform";
import Vector2 from "../data/Vector2";

export default class GameObject {
  private _components : Array<Component>;
  private _transform : Transform;
  public get transform() { return this._transform; }
  public width : number;

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

  Update() {
    for(let i = 0; i < this._components.length; ++i) {
      this._components[i].Update();
    }

    for(let i = 0; i < this._transform.children.length; ++i) {
      this._transform.children[i].gameObject.Update();
    }
  }

  Draw(context : CanvasRenderingContext2D) {
    context.save();
    context.translate(this._transform.position.x, this._transform.position.y);
    context.rotate(this._transform.rotationRadians);

    for(let i = 0; i < this._components.length; ++i) {
      this._components[i].Draw(context);
    }

    for(let i = 0; i < this._transform.children.length; ++i) {
      this._transform.children[i].gameObject.Draw(context);
    }

    context.restore();
  }
}