//* JavaScript Use Strict ใช้โหมดเข้มงวด
//* ประกาศโหมดเข้มงวด
//* ประกาศไว้บนสุด แบบ Global โค้ดทั้งหมดจะถูกดำเนินการในโหมด strict
{
    "use strict";
    myFunction();
    
    function myFunction() {
      y = 3.14;   // This will also cause an error because y is not declared
    }
}

//* ประกาศภายในฟังก์ชัน มีขอบเขตเฉพาะที่ (เฉพาะโค้ดภายในฟังก์ชันเท่านั้นที่อยู่ในโหมดเข้มงวด)
{
    x = 3.14;       // This will not cause an error.
    myFunction();
    
    function myFunction() {
      "use strict";
      y = 3.14;   // This will cause an error
    }
}

//* Not Allowed in Strict Mode ไม่อนุญาตในโหมดเข้มงวด
//  ไม่อนุญาตให้ใช้ตัวแปรโดยไม่ประกาศ
{
    "use strict";
    x = 3.14;      // This will cause an error
}

//  ไม่อนุญาตให้ใช้วัตถุโดยไม่ประกาศ
{
    "use strict";
    x = {p1:10, p2:20};      // This will cause an error
}

//  ไม่อนุญาตให้ลบตัวแปร (หรือวัตถุ)
{
    "use strict";
    let x = 3.14;
    delete x;                // This will cause an error
}

//  ไม่อนุญาตให้ลบฟังก์ชัน
{
    "use strict";
    function x(p1, p2) {};
    delete x;                // This will cause an error     
}

//  ไม่อนุญาตให้ทำซ้ำชื่อพารามิเตอร์
{
    "use strict";
    function x(p1, p1) {};   // This will cause an error
}

// ไม่อนุญาตให้ใช้ตัวอักษรที่เป็นตัวเลขฐานแปด
{
    "use strict";
    //let x = 010;  // This will cause an error
}

//  ไม่อนุญาตให้เขียนไปยังคุณสมบัติแบบอ่านอย่างเดียว
{
    "use strict";
    const obj = {};
    Object.defineProperty(obj, "x", {value:0, writable:false});
    
    obj.x = 3.14;            // This will cause an error
}

//  ไม่อนุญาตให้เขียนไปยังพร็อพเพอร์ตี้ get-only
{
    "use strict";
    const obj = {get x() {return 0} };
    
    obj.x = 3.14;            // This will cause an error
}

//  ไม่อนุญาตให้ลบคุณสมบัติที่ลบไม่ได้
{
    "use strict";
    delete Object.prototype; // This will cause an error
}

//  eval ไม่สามารถใช้คำ เป็นตัวแปรได้
{
    "use strict";
    let eval = 3.14;         // This will cause an error
}

//  arguments ไม่สามารถใช้คำ เป็นตัวแปรได้
{
    "use strict";
    let arguments = 3.14;    // This will cause an error
}

//  withไม่อนุญาตให้ใช้คำสั่ง
{
    "use strict";
    with (Math){x = cos(2)}; // This will cause an error
}

//  ด้วยเหตุผลด้านความปลอดภัยeval()ไม่อนุญาตให้สร้างตัวแปรในขอบเขตที่ถูกเรียกใช้
//  ในโหมดเข้มงวด จะไม่สามารถใช้ตัวแปรก่อนที่จะประกาศได้
{
    "use strict";
    eval ("x = 2");
    alert (x);      // This will cause an error
}

//  ในโหมดเข้มงวด eval() ไม่สามารถประกาศตัวแปรโดยใช้คำสำคัญ var
{
    "use strict";
    eval ("var x = 2");
    alert (x);    // This will cause an error
}

//  eval() ไม่สามารถประกาศตัวแปรโดยใช้ let
{
    eval ("let x = 2");
    alert (x);        // This will cause an error
}

//  คีย์เวิร์ด this ในฟังก์ชันทำงานต่างกันในโหมดเข้มงวด
//  this หมายถึงวัตถุที่เรียกฟังก์ชัน
//  หากไม่ได้ระบุวัตถุ ฟังก์ชันในโหมดเข้มงวดจะส่งคืนundefinedและฟังก์ชันในโหมดปกติจะส่งคืนวัตถุ Global
{
    "use strict";
    function myFunction() {
      alert(this); // will alert "undefined"
    }
    myFunction();
}

// *Future Proof! พิสูจน์ได้ในอนาคต!
//  คำหลักที่สงวนไว้สำหรับเวอร์ชัน JavaScript ในอนาคตไม่สามารถใช้เป็นชื่อตัวแปรในโหมดเข้มงวดได้
//? implements, interface, let, package, private
//? protected, public, static, yield
{
    "use strict";
    let public = 1500;      // This will cause an error
}

//! Watch Out! ระวัง
//  คำสั่ง "use strict" จะรู้จักเฉพาะที่จุดเริ่มต้นของสคริปต์หรือฟังก์ชัน เท่านั้น