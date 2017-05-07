import TestObject from "./TestObject";
import GameObject from "./components/GameObject";
import ParticleEmitter from "./components/particles/ParticleEmitter";
import Square from "./shapes/Square";
import Vector2 from "./data/Vector2";
import Colour from "./data/Colour";
import {Initialize, Start, CreateGameObject, CanvasWidth, CanvasHeight} from "./Foot";

//initialize Foot
Initialize(document.getElementById("simulator") as HTMLCanvasElement, new Colour(66, 66, 66, 1));
Start();


// let emitter : GameObject = CreateGameObject(GameObject);
// emitter.AddComponent(new ParticleEmitter(10));



let testOne : TestObject = CreateGameObject(TestObject);
testOne.transform.position = new Vector2(25,25);

let t2 : TestObject = CreateGameObject(TestObject, testOne);
t2.transform.localPosition = new Vector2(200,200);





// let spacing : number = 55;
// let cCount = (CanvasWidth() / spacing) + 1;
// let rCount = (CanvasHeight() / spacing) + 1;

// for(let c = 0; c < cCount; ++c) {
//   for(let r = 0; r < rCount; ++r) {

//     let testOne : TestObject = CreateGameObject(TestObject);
//     testOne.transform.position = new Vector2(c * spacing, r * spacing);
//     testOne.toggleRotation = true;

//     let testTwo : TestObject = CreateGameObject(TestObject, testOne);
//     testTwo.transform.localPosition = new Vector2(55, 0);
//     testTwo.toggleRotation = true;

//     let testThree : TestObject = CreateGameObject(TestObject, testTwo);
//     testThree.transform.localPosition = new Vector2(55, 0);
//     testThree.toggleRotation = true;

//     let testFour : TestObject = CreateGameObject(TestObject, testThree);
//     testFour.transform.localPosition = new Vector2(55, 0);
//     testFour.toggleRotation = true;

//     let testFive : TestObject = CreateGameObject(TestObject, testFour);
//     testFive.transform.localPosition = new Vector2(55, 0);
//     testFive.toggleRotation = true;

//   }
// }

