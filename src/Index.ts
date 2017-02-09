import TestObject from "./TestObject";
import GameObject from "./components/GameObject";
import Square from "./shapes/Square";
import Vector2 from "./data/Vector2";
import Foot from "./Foot";

var foot = new Foot();
foot.SetCanvas(document.getElementById("simulator") as HTMLCanvasElement);

let spacing : number = 55;
let cCount = (foot.canvasWidth / spacing) + 1;
let rCount = (foot.canvasHeight / spacing) + 1;

for(let c = 0; c < cCount; ++c) {
  for(let r = 0; r < rCount; ++r) {

    let testOne : TestObject = foot.CreateGameObject(TestObject);
    testOne.transform.position = new Vector2(c * spacing, r * spacing);
    testOne.toggleRotation = true;

    let testTwo : TestObject = foot.CreateGameObject(TestObject, testOne);
    testTwo.transform.localPosition = new Vector2(55, 0);
    testTwo.toggleRotation = true;

    let testThree : TestObject = foot.CreateGameObject(TestObject, testTwo);
    testThree.transform.localPosition = new Vector2(55, 0);
    testThree.toggleRotation = true;

    // let testFour : TestObject = foot.CreateGameObject(TestObject, testThree);
    // testFour.transform.localPosition = new Vector2(55, 0);
    // testFour.toggleRotation = true;

    // let testFive : TestObject = foot.CreateGameObject(TestObject, testFour);
    // testFive.transform.localPosition = new Vector2(55, 0);
    // testFive.toggleRotation = true;

  }
}

