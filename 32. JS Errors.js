//* JavaScript Errors

//* Throw, and Try...Catch...Finally
//  try คำสั่งกำหนดบล็อครหัสที่จะเรียกใช้(to try).
//  catch คำสั่งกำหนดบล็อกรหัสเพื่อจัดการกับข้อผิดพลาดใด ๆ
//  finally คำสั่งกำหนดบล็อกรหัสที่จะทำงานโดยไม่คำนึงถึงผลลัพธ์
//  throw คำสั่งกำหนดข้อผิดพลาดที่กำหนดเอง

//* JavaScript try and catch
//  try คำสั่งอนุญาตให้คุณกำหนดบล็อกของรหัสที่จะทดสอบข้อผิดพลาดในขณะที่กำลังดำเนินการ
//  catch คำสั่งอนุญาตให้คุณกำหนดบล็อกของโค้ดที่จะดำเนินการ หากเกิดข้อผิดพลาดในบล็อกการลอง
//  คำสั่ง JavaScript try and catch มาเป็นคู่
{
    try {
        //Block of code to try
      }
      catch(err) {
        //Block of code to handle errors
      }
}

//* JavaScript Throws Errors
//  เมื่อเกิดข้อผิดพลาด โดยปกติ JavaScript จะหยุดทำงานและสร้างข้อความแสดงข้อผิดพลาด
//  JavaScript will throw an exception (throw an error).

//* The throw Statement
//  throw คำสั่งอนุญาตให้คุณสร้างข้อผิดพลาดที่กำหนดเอง
//  Technically you can throw an exception (throw an error).
//  ข้อยกเว้นสามารถเป็น JavaScript String, Number, Boolean, Object.
{
    throw "Too big";    // throw a text
    throw 500;          // throw a number
}

//* The finally Statement
//  finally  คำสั่งให้คุณรันโค้ดหลังจากลองแล้วจับ โดยไม่คำนึงถึงผลลัพธ์
{
    try {
        //Block of code to try
      }
      catch(err) {
        //Block of code to handle errors
      }
      finally {
        //Block of code to be executed regardless of the try / catch result
      }
}

//* The Error Object
//  JavaScript มีวัตถุข้อผิดพลาดในตัวที่ให้ข้อมูลข้อผิดพลาดเมื่อเกิดข้อผิดพลาด
//  วัตถุข้อผิดพลาดมีคุณสมบัติที่มีประโยชน์สองอย่าง name and message.
//  name ตั้งค่าหรือส่งคืนชื่อข้อผิดพลาด
//  message ตั้งค่าหรือส่งคืนข้อความแสดงข้อผิดพลาด (สตริง)

//* Error Name Values
//TODO:  Error Name     Description
//?      EvalError      เกิดข้อผิดพลาดในฟังก์ชัน eval()
//?      RangeError     มีตัวเลข "นอกช่วง" เกิดขึ้น
//?      ReferenceError เกิดการอ้างอิงที่ผิดกฎหมาย
//?      SyntaxError    เกิดข้อผิดพลาดทางไวยากรณ์
//?      TypeError      เกิดข้อผิดพลาดประเภท
//?      URIError       เกิดข้อผิดพลาดใน encodeURI()

//* Eval Error
//  EvalError บ่งชี้ข้อผิดพลาดในฟังก์ชัน eval()
//  JavaScript เวอร์ชันใหม่กว่าไม่โยน EvalError ใช้ SyntaxError แทน

//* Range Error
//  จะถูกส่งออกหากคุณใช้ตัวเลขที่อยู่นอกช่วงของค่าตามกฎหมาย
{
    let num = 1;
    try {
      num.toPrecision(500);   // A number cannot have 500 significant digits
    }
    catch(err) {
      document.getElementById("demo").innerHTML = err.name;
    }

    //  RangeError
}

//* Reference Error
//  ReferenceError จะเกิดขึ้นหากคุณใช้ (reference) ตัวแปรที่ยังไม่ได้ประกาศ
{
    let x = 5;
    try {
      x = y + 1;   // y cannot be used (referenced)
    }
    catch(err) {
      document.getElementById("demo").innerHTML = err.name;
    }
    //  ReferenceError
}

//* Syntax Error
//  SyntaxError จะเกิดขึ้นหากคุณพยายามประเมินโค้ดที่มีข้อผิดพลาดทางไวยากรณ์
{
    try {
        eval("alert('Hello)");   // Missing ' will produce an error
      }
      catch(err) {
        document.getElementById("demo").innerHTML = err.name;
      }

    //  SyntaxError
}

//* Type Error
//  TypeError จะเกิดขึ้นหากคุณใช้ค่าที่อยู่นอกช่วงของประเภทที่คาดไว้
{
    let num = 1;
    try {
      num.toUpperCase();   // You cannot convert a number to upper case
    }
    catch(err) {
      document.getElementById("demo").innerHTML = err.name;
    }

    //  TypeError
}

//* URI (Uniform Resource Identifier) Error
//  URIError จะเกิดขึ้นหากคุณใช้อักขระที่ไม่ถูกต้องในฟังก์ชัน URI
{
    try {
        decodeURI("%%%");   // You cannot URI decode percent signs
      }
      catch(err) {
        document.getElementById("demo").innerHTML = err.name;
      }

    //  URIError
}

//* Non-Standard Error Object Properties
//  Mozilla และ Microsoft กำหนดคุณสมบัติของวัตถุข้อผิดพลาดที่ไม่ได้มาตรฐาน
//  fileName (Mozilla)
//  lineNumber (Mozilla)
//  columnNumber (Mozilla)
//  stack (Mozilla)
//  description (Microsoft)
//  number (Microsoft)
//! ห้ามใช้คุณสมบัติเหล่านี้ในเว็บไซต์สาธารณะ พวกเขาจะไม่ทำงานในทุกเบราว์เซอร์