import GameObject from "./GameObject"

abstract class Component {
  public gameObject : GameObject;

  abstract Update() : void;
  abstract Draw(context : CanvasRenderingContext2D) : void;
}

export default Component;