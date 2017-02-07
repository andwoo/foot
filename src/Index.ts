import TestObject from "./TestObject";
import GameObject from "./components/GameObject";
import Square from "./shapes/Square";
import Vector2 from "./data/Vector2";
import Foot from "./Foot";

var foot = new Foot();
foot.SetCanvas(document.getElementById("simulator") as HTMLCanvasElement);
let test : TestObject = foot.CreateGameObject(TestObject);

console.log(test.transform.position);
let testThree : TestObject = foot.CreateGameObject(TestObject, test);
console.log(testThree.transform.position);
testThree.transform.Setposition(new Vector2(testThree.transform.position.x + 50, testThree.transform.position.y));
console.log(testThree.transform.position);