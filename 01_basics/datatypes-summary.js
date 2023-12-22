// Primitive

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol & BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const bigNumber =6583745178394525684672389n




const id = Symbol ('123')
const anotherid = Symbol ('123')

console.log(id===anotherid);

console.log(typeof bigNumber);

//Reference (Non primitive)

//Array, Objects, Functions

const heroes = ["Batman", "Superman", "Flash", "Aquaman"]

// let myObj = {
//   name = "Ayush"
//   age = 7
//   city = "Huacho";
// } 

const myFunction = function (){
  console.log("Hello World")
}

console.log(myFunction);