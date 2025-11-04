
/*this section talks about variables in javascript*/
let name = "pheezo";
name = "hafiz";
const age = 25;
console.log(name, age);
console.log(name);

/*this section talks about data types in javascript*/
let score = 90; //number
let studentName = "John"; //string
let isPassed = true; //boolean
let hobbies = ["reading", "gaming", "coding"]; //array
let address = { city: "New York", zip: "10001" }; //object
let unknown = null; //null
let notDefined; //undefined

console.log(score, (address.city));


/*this section talks about operations in javascript*/
let num1 = 10;
let num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

/*this section talks about conditions in javascript*/


let Marks = 85; // you can change this number to test
Marks = 65;

if (Marks >= 70) {
  console.log("You passed!");
} else {
  console.log("You failed!");
}
/*this section talks about loops in javascript*/
for (let number = 1; number <= 10; number++) {
  console.log(number);
}

/*this section talks about functions in javascript*/
function greet(name) {
  return "Hello, " + name + "!";
}
greet("Alice");
console.log(greet("Alice"));

function checkgrade(Mark) {
  if (Mark >= 70) {
    return "You passed!";
  } else {
    return "You failed!";
  }}

console.log(checkgrade(85));
console.log(checkgrade(65));    
