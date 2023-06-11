//* JavaScript Data Type
//  JavaScript มีประเภทข้อมูล 8 ประเภทดังนี้
//  1. String
//  2. Number
//  3. Bigint
//  4. Boolean
//  5. Undefined
//  6. Null
//  7. Symbol
//  8. Object

//  JavaScript ประเภทข้อมูลวัตถุ 3 ประเภทดังนี้
//  1. Array
//  2. Object
//  3. Date

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans:
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

let b = 16 + 4 + "Volvo"; // 20Volvo
let c = "Volvo" + 16 + 4; // Volvo164

//*JavaScript Types are Dynamic
{
    let x;       // Now x is undefined
    x = 5;       // Now x is a Number
    x = "John";  // Now x is a String
}
{
    let y = 123e5;    // 12300000
    let z = 123e-5;   // 0.00123
    let x = BigInt("123456789012345678901234567890");
}
{
    let car;    // Value is undefined, type is undefined
    let car2 = "";    // The value is "", the typeof is "string"
}