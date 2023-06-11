//* JavaScript Best Practices
//  หลีกเลี่ยงตัวแปร global , new, ==, eval()

//* Avoid Global Variables
//  ลดการใช้ตัวแปรร่วมให้น้อยที่สุด
//  ซึ่งรวมถึงชนิดข้อมูล ออบเจกต์ และฟังก์ชันทั้งหมด
//  Global variables และฟังก์ชันสามารถเขียนทับโดยสคริปต์อื่นได้
//  ใช้ตัวแปรในเครื่องแทน และเรียนรู้วิธีใช้การปิด

//* Always Declare Local Variables
//  ตัวแปรทั้งหมดที่ใช้ในฟังก์ชันควรประกาศเป็นตัวแปร local
//  ต้องประกาศตัวแปร Local ด้วยคีย์เวิร์ด var, let หรือ const มิฉะนั้นจะกลายเป็นตัวแปร global
//  Strict mode ไม่อนุญาตให้มีตัวแปรที่ไม่ได้ประกาศ

//* Declarations on Top
//  การเขียนโค้ดที่ดีคือการวางการประกาศทั้งหมดไว้ที่ด้านบนสุดของแต่ละสคริปต์หรือฟังก์ชัน
{
// Declare at the beginning
let firstName, lastName, price, discount, fullPrice;

// Use later
firstName = "John";
lastName = "Doe";

price = 19.90;
discount = 0.10;

fullPrice = price - discount;
}

//* Initialize Variables เริ่มต้นตัวแปร
//  เป็นแนวปฏิบัติที่ดีในการเขียนโค้ดเพื่อเริ่มต้นตัวแปรเมื่อคุณประกาศตัวแปร
//  หลีกเลี่ยงค่าที่ไม่ได้กำหนด
{
// Declare and initiate at the beginning
let firstName = "";
let lastName = "";
let price = 0;
let discount = 0;
let fullPrice = 0;
const myArray = [];
const myObject = {};
}

//* Declare Objects with const ประกาศวัตถุด้วย const
//  การประกาศวัตถุด้วย const จะป้องกันการเปลี่ยนประเภทโดยไม่ตั้งใจ
{
    let car1 = {type:"Fiat", model:"500", color:"white"};
    car1 = "Fiat";      // Changes object to string

    const car2 = {type:"Fiat", model:"500", color:"white"};
    car2 = "Fiat";      // Not possible
}

//* Declare Arrays with const ประกาศ Arrays ด้วย const
//  การประกาศอาร์เรย์ด้วย const จะป้องกันการเปลี่ยนประเภทโดยไม่ตั้งใจ
{
    let cars1 = ["Saab", "Volvo", "BMW"];
    cars1 = 3;    // Changes array to number

    const cars2 = ["Saab", "Volvo", "BMW"];
    cars2 = 3;    // Not possible
}

//* Don't Use new Object() อย่าใช้ new Object()
//  ใช้ "" แทน new String()
//  ใช้ 0 แทน newe Number()
//  ใช้ false แทน new Boolean()
//  ใช้ {} แทน new Object()
//  ใช้ [] แทน new Array()
//  ใช้ /()/ แทน new RegExp()
//  ใช้ function (){} แทน new Function()
{
    let x1 = "";             // new primitive string
    let x2 = 0;              // new primitive number
    let x3 = false;          // new primitive boolean
    const x4 = {};           // new object
    const x5 = [];           // new array object
    const x6 = /()/;         // new regexp object
    const x7 = function(){}; // new function object
}


//* Beware of Automatic Type Conversions ระวังการแปลงประเภทอัตโนมัติ
//  ตัวแปรสามารถเปลี่ยนประเภทข้อมูลได้
{
    let x = "Hello";     // typeof x is a string
    x = 5;               // changes typeof x to a number
}

//  ระวังว่าตัวเลขอาจถูกแปลงเป็นสตริงหรือ NaN (ไม่ใช่ตัวเลข) โดยไม่ได้ตั้งใจ
//  เมื่อดำเนินการทางคณิตศาสตร์ JavaScript สามารถแปลงตัวเลขเป็นสตริง
{
    let x1 = 5 + 7;       // x.valueOf() is 12,  typeof x is a number
    let x2 = 5 + "7";     // x.valueOf() is 57,  typeof x is a string
    let x3 = "5" + 7;     // x.valueOf() is 57,  typeof x is a string
    let x4 = 5 - 7;       // x.valueOf() is -2,  typeof x is a number
    let x5 = 5 - "7";     // x.valueOf() is -2,  typeof x is a number
    let x6 = "5" - 7;     // x.valueOf() is -2,  typeof x is a number
    let x7 = 5 - "x";     // x.valueOf() is NaN, typeof x is a number
}

//  การลบสตริงออกจากสตริงจะไม่สร้างข้อผิดพลาด แต่จะคืนค่า NaN (ไม่ใช่ตัวเลข)
{
    "Hello" - "Dolly"    // returns NaN
}

//* Use === Comparison ใช้ === การเปรียบเทียบ
//  ตัวดำเนินการเปรียบเทียบ == จะแปลง (เป็นประเภทการจับคู่) ก่อนการเปรียบเทียบเสมอ
//  ตัวดำเนินการ === บังคับให้มีการเปรียบเทียบค่าและประเภท
{
    0 == "";        // true
    1 == "1";       // true
    1 == true;      // true
    
    0 === "";       // false
    1 === "1";      // false
    1 === true;     // false
}

//* Use Parameter Defaults ใช้ค่าเริ่มต้นของพารามิเตอร์
//  หากมีการเรียกใช้ฟังก์ชันโดยไม่มีอาร์กิวเมนต์ ค่าของอาร์กิวเมนต์ที่ขาดหายไปจะถูกตั้งค่าเป็น undefined
//  ค่าที่ไม่ได้กำหนดอาจทำให้รหัสของคุณเสียหายได้ เป็นนิสัยที่ดีในการกำหนดค่าเริ่มต้นให้กับอาร์กิวเมนต์
{
    function myFunction(x, y) {
        if (y === undefined) {
          y = 0;
        }
    }
}

//* End Your Switches with Defaults จบสวิตช์ของคุณด้วยค่าเริ่มต้น
//  จบคำสั่ง switch ของคุณด้วยค่าดีฟอลต์เสมอ 
{
    switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
          day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
          break;
        default:
          day = "Unknown";
      }
}

//* Avoid Number, String, and Boolean as Objects หลีกเลี่ยงตัวเลข สตริง และบูลีนเป็นวัตถุ
//  ถือว่าตัวเลข สตริง หรือบูลีนเป็นค่าดั้งเดิมเสมอ ไม่เป็นวัตถุ
//  การประกาศประเภทเหล่านี้เป็นออบเจกต์ ทำให้ความเร็วในการดำเนินการช้าลง และสร้างผลข้างเคียงที่น่ารังเกียจ
{
    let x = "John";             
    let y = new String("John");
    (x === y) // is false because x is a string and y is an object.
}
//  หรือแย่กว่านั้น
{
    let x = new String("John");             
    let y = new String("John");
    (x == y) // is false because you cannot compare objects.
}

//* Avoid Using eval() หลีกเลี่ยงการใช้ eval()
//  ฟังก์ชัน eval() ใช้สำหรับเรียกใช้ข้อความเป็นรหัส ในเกือบทุกกรณีก็ไม่จำเป็นต้องใช้
//  เนื่องจากอนุญาตให้เรียกใช้รหัสโดยอำเภอใจ จึงแสดงถึงปัญหาด้านความปลอดภัยด้วย