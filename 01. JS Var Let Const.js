//* JavaScript สามารถประกาศตัวแปรได้ 4 วิธี
//  1. Automatically
//  2. var
//  3. let เปลี่ยนแปลงค่าได้
//  4. const เปลี่ยนแปลงค่าไม่ได้


//* let
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10

//* const เหมือนกับ let แต่เปลี่ยนแปลงค่าไม่ได้
//! ไม่สามารถกำหนดตัวแปรใหม่ได้
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

// ใช้ const เมื่อประกาศ Array, Object, Function, RegExp