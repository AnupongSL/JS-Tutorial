//* The JavaScript this Keyword
{
  const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };
}

//* What is this?
//  In JavaScript , this หมายถึง object.
//  this หมายถึงวัตถุที่แตกต่างกันขึ้นอยู่กับวิธีการใช้
//  ใน object method, this หมายถึง object.
//  alone, this หมายถึง global object.
//  ใน function, this หมายถึง global object.
//  ใน function, ใน strict mode(โหมดเข้มงวด), this คือ undefined.
//  ใน event, this หมายถึง element ที่ได้รับ event.
//  วิธีการเช่น call(), apply(), bind() สามารถอ้างอิง this to any object.
//  this ไม่ใช่ตัวแปร มันคือ keyword คุณไม่สามารถเปลี่ยนค่าของ this

//* this in a Method
//  เมื่อใช้ใน object method, this หมายถึง object.
{
  const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };

  console.log(person.fullName()); //John Doe
}

//* this Alone
//  เมื่อใช้ตัวเดียว this หมายถึง global object.
//  เพราะ this กำลังทำงานใน global object.
//  In a browser window the global object is [object Window]
{
  let x = this;
  console.log(x); // [object Window]
}

//   In strict mode, เมื่อใช้ตัวเดียว this ยังหมายถึง global object.
{
  ("use strict");
  let x = this;
  console.log(x); // [object Window]
}

//* this in a Function (Default)
//  In a function, global object เป็นการเชื่อมโยงเริ่มต้นสำหรับ this.
//  In a browser window the global object is [object Window]
{
  function myFunction() {
    return this;
  }
  console.log(myFunction()); // [object Window]
}

//  this in a Function (Strict) this is undefined
{
  ("use strict");
  function myFunction() {
    return this;
  }
  console.log(myFunction()); // undefined.
}

//* this in Event Handlers
//  In HTML event handlers, this หมายถึง HTML element ที่ได้รับ event.
{
  <button onclick="this.style.display='none'">Click to Remove Me!</button>;
}

//* Object Method Binding
//  this คือ person object.
{
    const person = {
        firstName  : "John",
        lastName   : "Doe",
        id         : 5566,
        myFunction : function() {
          return this;
        }
      };
    console.log(person.myFunction()); //[object Object]
}
//  Example
{
    const person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
          return this.firstName + " " + this.lastName;
        }
      };

    console.log(person.fullName()); //John Doe
}
//  เช่น this.firstName คือ firstName property ของ this(the person object).

//* Explicit Function Binding
//  The call() and apply() methods เป็นวิธี JavaScript ที่กำหนดไว้ล่วงหน้า
//  สามารถใช้เรียก method ของ object กับ object อื่นเป็น argument ได้
//  ตัวอย่างด้านล่างเรียก person1.fullName โดยมี person2 เป็นอาร์กิวเมนต์ ซึ่งอ้างถึง person2 แม้ว่า fullName จะเป็นเมธอดของ person1
{
    const person1 = {
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
      }
      
      const person2 = {
        firstName:"John",
        lastName: "Doe",
      }
      
      // Return "John Doe":
      person1.fullName.call(person2);
}

//* Function Borrowing
//  With the bind() method, วัตถุสามารถยืมวิธีการจากวัตถุอื่น
//  ตัวอย่างนี้สร้าง 2 วัตถุ (person and member).
//  วัตถุ member ยืมเมธอดชื่อเต็มจากวัตถุ person:
{
    const person = {
        firstName:"John",
        lastName: "Doe",
        fullName: function () {
          return this.firstName + " " + this.lastName;
        }
      }
      
      const member = {
        firstName:"Hege",
        lastName: "Nilsen",
      }
      
      let fullName = person.fullName.bind(member); //Hege Nilsen
}

//* This Precedence ลำดับความสำคัญ
//TODO:  Precedence     Object
//?      1              bind()
//?      2              apply() and call()
//?      3              Object method
//?      4              Global scope

//  this คือฟังก์ชั่นที่ถูกเรียกใช้โดยใช้ bind()?
//  this คือฟังก์ชั่นที่ถูกเรียกใช้โดยใช้ apply()?
//  this คือฟังก์ชั่นที่ถูกเรียกใช้โดยใช้ call()?
//  Is this in an object function (method)?
//  Is this in a function in the global scope.