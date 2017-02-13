import GameObject from "./components/GameObject";

export default class Foot extends GameObject {
  private _canvas : HTMLCanvasElement;
  private _context : CanvasRenderingContext2D;

  public get canvasWidth() {
    return this._canvas.width;
  }

   public get canvasHeight() {
    return this._canvas.height;
  }

  SetCanvas(canvas : HTMLCanvasElement) {
    this._canvas = canvas;
    this._context = this._canvas.getContext("2d");

    this._canvas.width = window.innerWidth;
    this._canvas.height = window.innerHeight;
    window.addEventListener('resize', this.OnWindowResize.bind(this), false);

    this.BeginFrame();
  }

  OnWindowResize() {
    this._canvas.width = window.innerWidth;
    this._canvas.height = window.innerHeight;
  }

  CreateGameObject<TGOBluePrint extends GameObject>(type: { new(): TGOBluePrint ;}, parent ?: GameObject) : TGOBluePrint {
    let go : TGOBluePrint = new type();
    go.transform.SetParent(parent ? parent.transform : this.transform);
    return go;
  }

  BeginFrame() {
    requestAnimationFrame(this.BeginFrame.bind(this));

    for(let i = 0; i < this.transform.children.length; ++i) {
      this.transform.children[i].gameObject.Update();
    }

    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._context.fillStyle = 'rgba(0, 0, 0, 1)';
    this._context.fillRect (0, 0, this._canvas.width, this._canvas.height);

    for(let i = 0; i < this.transform.children.length; ++i) {
      this._context.save();
      this.transform.children[i].gameObject.Draw(this._context);
      this._context.restore();
    }
  }
}