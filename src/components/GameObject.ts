import Component from "./Component";
import Transform from "./Transform";

export default class GameObject {
  private _components : Array<Component>;
  private _transform : Transform;
  
  public get transform() { return this._transform; }

  constructor() {
    this._components = new Array<Component>();
    this._transform = new Transform();
  }

  AddComponent(component : Component) {
    this._components.push(component);
  }

  RemoveComponent(component : Component) {
    let index = this._components.indexOf(component);
    if(index != -1) {
      this._components.slice(index, 1);
    }
  }
}