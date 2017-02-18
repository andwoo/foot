import Component from "../../components/Component";
import Vector2 from "../../data/Vector2";
import Particle from "./Particle";
import {CreateGameObject} from "../../Foot";
import GameObject from "../../components/GameObject";

export default class ParticleEmitter extends Component {

  private _particles : Array<Particle>;

  constructor(particleCount : number) {
    super();
    this._particles = new Array<Particle>();

    for(let i = 0; i < particleCount; ++i) {
      let gameObject = CreateGameObject(GameObject);
      let particle = new Particle();
      gameObject.AddComponent(particle);
      this._particles.push(particle);
    }
  }

  Update() { }

  Draw() { }
}