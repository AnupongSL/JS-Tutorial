//* JavaScript typeof
//  ใน JavaScript มี 5 ประเภทข้อมูลที่แตกต่างกันที่สามารถมีค่าได้
//TODO: string, number, boolean, object, function

//  วัตถุมี 6 ประเภท
//TODO: Object, Date, Array, String, Number, Boolean

//  2 ประเภทข้อมูลที่ไม่สามารถมีค่าได้
//TODO: null, undefined

//* The typeof Operator
{
  typeof "John"; // Returns "string"
  typeof 3.14; // Returns "number"
  typeof NaN; // Returns "number"
  typeof false; // Returns "boolean"
  typeof [1, 2, 3, 4]; // Returns "object"
  typeof { name: "John", age: 34 }; // Returns "object"
  typeof new Date(); // Returns "object"
  typeof function () {}; // Returns "function"
  typeof myCar; // Returns "undefined" *
  typeof null; // Returns "object"
}

//* Primitive Data ข้อมูลดั้งเดิม
{
  typeof "John"; // Returns "string"
  typeof 3.14; // Returns "number"
  typeof true; // Returns "boolean"
  typeof false; // Returns "boolean"
  typeof x; // Returns "undefined" (if x has no value)
}

//* Complex Data ข้อมูลที่ซับซ้อน
//  typeof ส่งคืนหนึ่งในสองประเภทที่ซับซ้อน funciton, object
//  ส่งคืน object สำหรับ object, array, null
//  ไม่ส่งคืน object สำหรับ funtion
{
  typeof { name: "John", age: 34 }; // Returns "object"
  typeof [1, 2, 3, 4]; // Returns "object" (not "array", see note below)
  typeof null; // Returns "object"
  typeof function myFunc() {}; // Returns "function"
}

//* The constructor Property
//  constructor ส่งคืนตัวแปร JavaScript ทั้งหมด
{
  "John".constructor // Returns function String()  {[native code]}
  (3.14).constructor; // Returns function Number()  {[native code]}
  false.constructor[(1, 2, 3, 4)].constructor; // Returns function Boolean() {[native code]} // Returns function Array()   {[native code]}
  let a = { name: "John", age: 34 }.constructor; // Returns function Object()  {[native code]}
  new Date().constructor; // Returns function Date()    {[native code]}
  let b = function () {}.constructor; // Returns function Function(){[native code]}
}

//  คุณสามารถตรวจสอบว่าวัตถุนั้นเป็นฟังก์ชัน Array หรือไม่ 
{
    function isArray(myArray) {
        return myArray.constructor === Array;
    }
}

//  คุณสามารถตรวจสอบว่าวัตถุนั้นเป็นฟังก์ชัน Date หรือไม่
{
    function isDate(myDate) {
        return myDate.constructor === Date;
    }
}

//* Undefined
{
    let car1;    // Value is undefined, type is undefined
    let car2 = undefined;    // Value is undefined, type is undefined
}

//* Empty Values
{
    let car = "";    // The value is "", the typeof is "string"
}

//* Null
//  JavaScript ชนิดข้อมูลของnullเป็นวัตถุ
//  คุณสามารถล้างวัตถุได้โดยตั้งค่าเป็นnull
{
    let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    person = null;    // Now value is null, but type is still an object
}

//  คุณยังสามารถล้างวัตถุได้โดยตั้งค่าเป็นundefined
{
    let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    person = undefined;   // Now both value and type is undefined
}

//* ความแตกต่างระหว่าง Undefined และ Null
{
    typeof undefined           // undefined
    typeof null                // object

    null === undefined         // false
    null == undefined          // true
}

//* The instanceof Operator
//  instanceof ส่งกลับ true ถ้าวัตถุเป็นตัวอย่างของวัตถุที่ระบุ
{
    const cars = ["Saab", "Volvo", "BMW"];

    (cars instanceof Array); //true
    (cars instanceof Object); //true
    (cars instanceof String); //false
    (cars instanceof Number); //false
}