//* JavaScript Numbers
//  สามารถเขียนแบบมีทศนิยมหรือไม่มีก็ได้
{
  let x = 3.14; // A number with decimals
  let y = 3; // A number without decimals
}
{
  let x = 123e5; // 12300000
  let y = 123e-5; // 0.00123
}


//* ตัวเลข JavaScript เป็นทศนิยม 64 บิตเสมอ
//  ตัวเลข (เศษส่วน) ถูกจัดเก็บในบิต 0 ถึง 51 เลขชี้กำลังในบิต 52 ถึง 62 และบิตลงชื่อเข้าใช้ 63
//TODO: Value (aka Fraction/Mantissa)	Exponent	            Sign
//?     52 bits (0 - 51) 	            11 bits (52 - 62)	    1 bit (63)


//* (ตัวเลขที่ไม่มีเครื่องหมายมหัพภาคหรือเลขยกกำลัง) มีความแม่นยำถึง 15 หลัก
{
  let x = 999999999999999; // x will be 999999999999999
  let y = 9999999999999999; // y will be 10000000000000000
}


//* Floating Precision จำนวนทศนิยมสูงสุดคือ 17
{
  let x = 0.2 + 0.1; // 0.2 + 0.1 = 0.30000000000000004
  let y = (0.2 * 10 + 0.1 * 10) / 10; //0.3
}


//* Adding Numbers and Strings
{
  let x = 10;
  let y = 20;
  let z = "hello";
  let z2 = "test";
  console.log(x + y); // 30
  console.log(z + z2); //hellotest
  console.log(x + z); // 10hello
  console.log("The result is: " + x + y); //The result is: 1020
  console.log(x + y + z); // 30hello
}


//* Numeric Strings
{
  let x = 100; // x is a number
  let y = "100"; // y is a string
  let z = "10"; // y is a string
  console.log(y / z); // 10
  console.log(y * z); // 1000
  console.log(y - z); // 90
  console.log(y + z); // 10010
}


//* NaN - Not a Number
{
  let x1 = 100 / "Apple"; // NaN
  let x2 = 100 / "10"; // 10
  //isNaN() เพื่อดูว่าค่าไม่ใช่ตัวเลขหรือไม่
  isNaN(x1); // true
  isNaN(x2); // false
  console.log(NaN + 5); // NaN
  console.log(NaN + "5"); // NaN5
  console.log(typeof NaN); // number
}


//* Infinity
//  Infinity (หรือ -Infinity) คือค่าที่ JavaScript จะส่งกลับหากคุณคำนวณตัวเลขนอกจำนวนที่มากที่สุดเท่าที่จะเป็นไปได้
{
  let myNumber = 2;
  // Execute until Infinity
  while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
  }
  /*
    4
    16
    256
    65536
    4294967296
    18446744073709552000
    3.402823669209385e+38
    1.157920892373162e+77
    1.3407807929942597e+154
    Infinity
*/
}
{
  let x = 2 / 0; //Infinity
  let y = -2 / 0; //-Infinity
  typeof Infinity; // number
}


//* Hexadecimal เลขฐาน 16
//  นำหน้าด้วน 0x จะเป็นเลขฐาน 16
{
  let x = 0xff; //255
}
{
  let myNumber = 32;
  myNumber.toString(36); //Hexatrigesimal (base 36): w
  myNumber.toString(32); //Duotrigesimal (base 32): 10
  myNumber.toString(16); //Hexadecimal (base 16): 20
  myNumber.toString(12); //Duodecimal (base 12): 28
  myNumber.toString(10); //Decimal (base 10): 32
  myNumber.toString(8);  //Octal (base 8): 40
  myNumber.toString(2);  //Binary (base 2): 100000
}


//* JavaScript Numbers as Objects
//! Do not create Number objects.
{
    let x = 123; //number
    let y = new Number(123); //object
    let z = new Number(123); //object
    console.log(x==y);  // true
    console.log(x===y); // false
    //การเปรียบเทียบวัตถุ JavaScript สองรายการจะส่งคืนค่าเท็จเสมอ
    console.log(z==y);  // false
    console.log(z===y); // false    
}