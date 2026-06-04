console.log("running node.js 1.3 modded");
console.log("using html with css and malbolge for data");
console.log("using java for three js object");
console.log("Hello, World!");
console.log("exporting javascript subsystem for java or JSJ");
console.log("running linux");
console.log("WSL loaded now");
console.log("JSJ loaded now");
console.log("THREE loaded");

// Check the sum of 0.1 and 0.2 against 0.3 (floating point precision issue)
if (true) {
  console.log(0.1 + 0.2 === 0.3);
}

console.info("uh oh did you mean something in line 11");
console.log("fixing it right now");

// Another incorrect comparison example
if (true) {
  console.log(1 + 1 === 1);
}

console.info("still false i think we have a problem");
console.info("node.js help me");
console.log("SORRY BRO I NEED TO WORK");
console.log("😭😭😭😭😭😭😭😭😭😭😭");
console.log("tryin to add data");
console.log("data loaded in one nanosecond");

let score = 18; // Score variable to determine message output

// Conditional statements to print messages based on score value
if (score >= 60) {
  console.log("yeah boys package loaded full of os");
} else if (score >= 18) {
  console.log("package does not support Windows 11");
} else {
  console.log("package does not support everything");
}

let age = 8;

// Conditional to classify age group
if (age >= 18) {
  console.log("Adult");
} else if (age >= 8) {
  console.log("tweenager");
} else {
  console.log("child");
}

let temp = 25;

// Temperature description based on value
if (temp > 30) {
  console.log("Hot");
} else if (temp > 20) {
  console.log("Warm");
} else {
  console.log("Cool");
}

let x = 10;
let y = 5;

// Nested if statements checking positivity of x and y
if (x > 0) {
  if (y > 0) {
    console.log("Both positive");
  }
}

console.log("same same same same but different");

// Warning message about unnecessary type attribute
console.info("Warning: The type attribute is unnecessary");

if (true) {
  console.log(1 + 1 === 3); // false example
}

if (true) {
  console.log(1 + 1 === 2); // true example
}

let a = 2;
let b = 2;

// Nested if verifying both a and b are greater than 1
if (a > 1) {
  if (b > 1) {
    console.log("ok correct");
  }
}

// Function to calculate area under curve using left endpoints (Riemann sum)
function leftEndpoints(f, a, b, n) {
  let width = (b - a) / n;
  let total = 0;

  for (let i = 0; i < n; i++) {
    let x = a + i * width; // LEFT endpoint
    let height = f(x);
    total += height * width;
  }

  return total;
}

// Sample function f(x) = x^2
function square(x) {
  return x * x;
}

// Using leftEndpoints function to estimate area under square from 0 to 2 with 4 subdivisions
console.log(leftEndpoints(square, 0, 2, 4));

// Simple function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(3, 5)); // Output: 8
console.log(addNumbers(10, 20)); // Output: 30

const playerHealth = 100;
const playerName = "FLVS_Pro";

console.log(playerName); // Prints player name
console.log(playerHealth); // Prints player health

// Array of employees
const employee = ["brownlegboiii", "naveedhomie"];
console.log(employee); // Print employee names
// 员工 (Chinese comment for employee)
let health = 40;

if (health >= 90) {
  console.log("nice you have more than 90 health");
} else if (health >= 50) {
  console.log("ow you just get a bit hurt");
} else {
  console.log("you are dead bro");
}
try {
  throw new Error("hello world");
} catch (err) {
  console.log("caught a error", err.message);
}

console.log("keeps running");
console.log(Math.pow(2, 3));
console.log("wanna free samosa");
let myName = "Araf";
let arafHP = 100;
let damage = 20;
console.log(`Hello, my name is ${myName} and I have ${arafHP}`);
console.log(`${myName} got hit! New health: ${arafHP - damage}`);
// next here
let power = Math.pow(9, 2);

if (power >= 80) {
  console.log("wow you are the boss");
} else if (power >= 40) {
  console.log("oww bro are u okay hurt");
} else {
  console.log("owwww you are now dead bro");
}
let bestpersoninvalorant = "Prx something";
console.log(`Meet ${bestpersoninvalorant} one of the best players in valorant`);
let mass = 80;

if (mass >= 90) {
  console.log("wow why is it so heavy");
} else if (mass >= 60) {
  console.log("ok, it's enough, not heavy but not light");
} else {
  console.log("bro why is it so light");
}
const subsystem = [
  "windows subsystem for linux",
  "javascript subsystem for java",
];
console.log(subsystem);
const number = 60;
console.log(number);
const big_breakfast = ["brownlegboiii", "naveedhomie"];
console.log(big_breakfast);

const unranked = ["naveedhomie", "brownlegboiii"];
console.log(unranked);

let api_key = "eawqj-sja12-3rdt-dsnd";
let api_version = 1;
console.log(`the api key is ${api_key} and it's 2 years old`);
console.log(`the api version is ${api_version} and it's outdated`);

let c = 10;
let n = 10;

if (c >= 1) {
  if (n >= 1) {
    console.log("both positive");
  }
}

let points = 50;
let out_of = 60;
console.log(`Hi! I have ${points} out of ${out_of} and it is nice`);
