//* JavaScript Number Properties
//TODO:  Property           Description
//?      ESPILON            ผลต่างระหว่าง 1 กับจำนวนที่น้อยที่สุด > 1
//?      MAX_VALUE          จำนวนมากที่สุดที่เป็นไปได้ใน JavaScript
//?      MIN_VALUE          จำนวนที่น้อยที่สุดใน JavaScript
//?      MAX_SAFE_INTEGER   จำนวนเต็มปลอดภัยสูงสุด (2^(53 - 1))
//?      MIN_SAFE_INTEGER   จำนวนเต็มปลอดภัยน้อยสุด -(2^(53 - 1))
//?      POSITIVE_INFINITY  Infinity (returned on overflow)
//?      NEGATIVE_INFINITY  -infinity (returned on overflow)
//?      NaN                ค่า "ไม่ใช่ตัวเลข"

//* JavaScript EPSILON
{
    let x = Number.EPSILON; //2.220446049250313e-16
}

//* JavaScript MAX_VALUE
{
    let x = Number.MAX_VALUE; //1.7976931348623157e+308
}
// ไม่สามารถใช้คุณสมบัติตัวเลขกับตัวแปรได้ 
// คุณสมบัติ Number เป็นของ JavaScript Number Object พร็อพเพอร์ตี้เหล่านี้สามารถเข้าถึงได้ด้วย Number.MAX_VALUE เท่านั้น
// การใช้ x.MAX_VALUE โดยที่ x เป็นตัวแปรหรือค่า จะส่งกลับ undefined
{
    let x = 6;
    x.MAX_VALUE //undefined
}


//* JavaScript MIN_VALUE
{
    let x = Number.MIN_VALUE; //5e-324
}


//* JavaScript MAX_SAFE_INTEGER
{
    let x = Number.MAX_SAFE_INTEGER; //9007199254740991
}


//* JavaScript MIN_SAFE_INTEGER
{
    let x = Number.MIN_SAFE_INTEGER; //-9007199254740991
}

//* JavaScript POSITIVE_INFINITY
{
    let x = Number.POSITIVE_INFINITY; //Infinity
    let y = 1/0; //Infinity
}

//* JavaScript NEGATIVE_INFINITY
{
    let x = Number.NEGATIVE_INFINITY; //-Infinity
    let y = -1/0; //-Infinity
}

//* JavaScript NaN - Not a Number
{
    let x = Number.NaN; //NaN
    let y = 100 / "Apple"; //NaN
}