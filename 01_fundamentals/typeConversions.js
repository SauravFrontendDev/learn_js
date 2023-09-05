// Type Conversion Vs Type Coercion

// Type Conversion - Wehn we manually change the type of a variable to any other type.

// Type Coercion - When javascript automatically ( Behind the scene) changes the Data type of a value in some cases to handle the situation.

const inputYear = "1998";

console.log(inputYear + 18);
console.log(Number(inputYear) + 18);
console.log(Number("Java"));

console.log(String(256));

// Type Coercion

console.log("I am a " + 23 + " Years old");
console.log("23" - 10 - "3");

console.log("23" * "56");
console.log("1024" / "64");

// Truthy and Falsy Values
// Falsy Values

/*
 - 0
 - ""
 - undefined
 - null
 - NaN 
 */

const favourite = Number(prompt("What's your favourite number?"));

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) console.log(" 23 is an amzing number");
else if (favourite === 7) console.log(" 7 is also acool number");
else {
  console.log(" No favourite Number, you are a fraud");
}
