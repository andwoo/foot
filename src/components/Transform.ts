import Component from "./Component";
import Vector2 from "../data/Vector2";

export default class Transform extends Component {

  public position : Vector2;

  constructor() {
    super();
    this.position = new Vector2(0, 0);
  }
}