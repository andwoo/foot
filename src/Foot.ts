import GameObject from "./components/GameObject";
import Hierarchy from "./components/Hierarchy";
import Colour from "./data/Colour";

var _canvas : HTMLCanvasElement;
var _context : CanvasRenderingContext2D;
var _hierarchy : Hierarchy = new Hierarchy();
var _backgroundColour : Colour;

export function Initialize(canvas : HTMLCanvasElement, backgroundColour : Colour) {
  _canvas = canvas;
  _context = _canvas.getContext("2d");
  _backgroundColour = backgroundColour;

  _canvas.width = window.innerWidth;
  _canvas.height = window.innerHeight;
  window.addEventListener('resize', () => {
    _canvas.width = window.innerWidth;
    _canvas.height = window.innerHeight;
  }, false);
}

export function CanvasWidth() {
  return _canvas.width;
}

export function  CanvasHeight() {
  return _canvas.height;
}

export function CreateGameObject<TGOBluePrint extends GameObject>(type: { new(): TGOBluePrint ;}, parent ?: GameObject) : TGOBluePrint {
  let go : TGOBluePrint = new type();
  go.transform.SetParent(parent ? parent.transform : _hierarchy.transform);
  return go;
}


export function Start() {
  BeginFrame();
}

function BeginFrame() {
  requestAnimationFrame(BeginFrame);

  for(let i = 0; i < _hierarchy.transform.children.length; ++i) {
    _hierarchy.transform.children[i].gameObject.InternalUpdate();
  }

  _context.clearRect(0, 0, _canvas.width, _canvas.height);
  _context.fillStyle = `rgba(${_backgroundColour.r}, ${_backgroundColour.g}, ${_backgroundColour.b}, ${_backgroundColour.a})`;
  _context.fillRect (0, 0, _canvas.width, _canvas.height);

  for(let i = 0; i < _hierarchy.transform.children.length; ++i) {
    _context.save();
    _hierarchy.transform.children[i].gameObject.InternalDraw(_context);
    _context.restore();
  }
}