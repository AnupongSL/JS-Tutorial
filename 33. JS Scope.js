//* JavaScript Scope
//  JavaScript มีขอบเขต 3 ประเภท
//  1. Block scope, 2. Function scope, 3. Global scope
//  ตัวแปรที่ประกาศภายในบล็อก { } ไม่สามารถเข้าถึงได้จากภายนอกบล็อก
{
    let x = 2;
}
// x ไม่สามารถใช้ได้ที่นี่

//* Local Scope
//  ตัวแปรที่ประกาศภายในฟังก์ชัน คือตัวแปร LOCAL
//  สามารถเข้าถึงได้จากภายในฟังก์ชันเท่านั้น
//  ตัวแปรที่ประกาศด้วย var, let, const ไม่สามารถใช้งานนอก function ได้
{
// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  
  // code here can NOT use carName
}

//* Global JavaScript Variables
//  ตัวแปรที่ประกาศนอกฟังก์ชัน คือตัวแปร Global
//  สคริปต์และฟังก์ชันทั้งหมดบนหน้าเว็บสามารถเข้าถึงได้ 
{
    let carName = "Volvo";
    // code here can use carName
    
    function myFunction() {
    // code here can also use carName
    }
}

//* ใน JavaScript วัตถุและฟังก์ชันก็เป็นตัวแปรเช่นกัน
//* Automatically Global
//  หากคุณกำหนดค่าให้กับตัวแปรที่ไม่ได้ประกาศไว้ ตัวแปรนั้นจะกลายเป็นตัวแปร GLOBAL โดยอัตโนมัติ
{
    myFunction();

    // code here can use carName
    
    function myFunction() {
      carName = "Volvo";
    }
}

//* Strict Mode โหมดเข้มงวด
//  ใน strict mode ตัวแปรที่ไม่ได้ประกาศไม่เป็นตัวแปร Global โดยอัตโนมัติ