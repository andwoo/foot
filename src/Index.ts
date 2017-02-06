import TestObject from "./TestObject";

var canvas : HTMLCanvasElement = document.getElementById("simulator") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context : CanvasRenderingContext2D = canvas.getContext("2d");

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}, false);

var test = new TestObject();

function Update() {
  test.Update();
}

function Draw(context : CanvasRenderingContext2D) {
  test.Draw(context);
}

function render() {
  requestAnimationFrame(render);
  Update();
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'rgba(0, 0, 0, 1)';
  context.fillRect (0, 0, canvas.width, canvas.height);
  Draw(context);
}
render();