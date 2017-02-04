import Square from "./Square";

var canvas : HTMLCanvasElement = document.getElementById("simulator") as HTMLCanvasElement;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var context : CanvasRenderingContext2D = canvas.getContext("2d");

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}, false);

var square = new Square();

function update() {
  square.update();
}

function draw(context : CanvasRenderingContext2D) {
  square.draw(context);
}

function render() {
  requestAnimationFrame(render);
  update();
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'rgba(0, 0, 0, 1)';
  context.fillRect (0, 0, canvas.width, canvas.height);
  draw(context);
}
render();