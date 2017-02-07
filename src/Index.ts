import TestObject from "./TestObject";
import GameObject from "./components/GameObject";
import Square from "./shapes/Square";
import Vector2 from "./data/Vector2";
import Foot from "./Foot";

var foot = new Foot();
foot.SetCanvas(document.getElementById("simulator") as HTMLCanvasElement);
let test : TestObject = foot.CreateGameObject(TestObject);
test.transform.Setposition(new Vector2(500, 400));
test.toggleRotation = true;

let testThree : TestObject = foot.CreateGameObject(TestObject, test);
testThree.transform.Setposition(new Vector2(test.transform.position.x + 50, test.transform.position.y));
testThree.toggleRotation = true;