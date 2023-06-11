//* JavaScript Math Object
//* 1. Math Properties (Constants) ค่าคงที่
//  The syntax for any Math property is : Math.property.
{
  Math.E; // returns Euler's number
  Math.PI; // returns PI
  Math.SQRT2; // returns the square root of 2
  Math.SQRT1_2; // returns the square root of 1/2
  Math.LN2; // returns the natural logarithm of 2
  Math.LN10; // returns the natural logarithm of 10
  Math.LOG2E; // returns base 2 logarithm of E
  Math.LOG10E; // returns base 10 logarithm of E
}

//TODO: JavaScript Math Methods
//TODO: Method          Description             
//?     abs(x)          ส่งกลับค่า absolute ของ x
//?     acos(x)         ส่งกลับค่า arccosine ของ x ในหน่วย radians
//?     acosh(x)        ส่งกลับค่า hyperbolic arccosine ของ x
//?     asin(x)	        ส่งกลับค่า arcsine ของ x ในหน่วย radians
//?     asinh(x)	    ส่งกลับค่า hyperbolic arcsine ของ x
//?     atan(x)	        ส่งกลับ arctangent ของ x เป็นค่าตัวเลขระหว่าง -PI/2 และ PI/2 radians
//?     atan2(y, x)	    ส่งกลับค่า arctangent ของผลหารของอาร์กิวเมนต์
//?     atanh(x)	    ส่งกลับค่า hyperbolic arctangent ของ x
//?     cbrt(x)	        ส่งกลับรากลูกบาศก์ของ x
//?     ceil(x)         คืนค่า x ปัดขึ้นเป็นจำนวนเต็มที่ใกล้เคียงที่สุด
//?     cos(x)          ส่งกลับค่า cosine ของ x (x มีหน่วยเป็น radians)
//?     cosh(x)         ส่งกลับ hyperbolic arctangent ของ x
//?     exp(x)          ส่งกลับค่าของ E^x
//?     floor(x)        คืนค่า x ปัดลงเป็นจำนวนเต็มที่ใกล้เคียงที่สุด
//?     log(x)          ส่งกลับ logarithm (ฐาน E) ของ x
//?     max(x, y, z)    ส่งกลับจำนวนที่มีค่าสูงสุด
//?     min(x, y, z)    ส่งกลับจำนวนที่มีค่าต่ำสุด
//?     pow(x, y)       คืนค่า x ยกกำลัง y
//?     random()        ส่งกลับตัวเลขสุ่มระหว่าง 0 ถึง 1
//?     round(x)        ปัดเศษ x เป็นจำนวนเต็มที่ใกล้เคียงที่สุด
//?     sign(x)         ส่งกลับถ้า x เป็นค่าลบ ค่าว่าง หรือค่าบวก (-1, 0, 1)
//?     sin(x)          ส่งกลับค่า sine ของ x (x มีหน่วยเป็น radians)
//?     sinh(x)         คืนค่า hyperbolic sine ของ x
//?     sqrt(x)         คืนค่ารากที่สองของ x
//?     tan(x)          ส่งกลับค่า tangent ของมุม
//?     tanh(x)         ส่งกลับค่า hyperbolic tangent ของ number
//?     trunc(x)        ส่งกลับส่วนจำนวนเต็มของจำนวน (x)

//* 2. Math Methods
//  The syntax for Math any methods is : Math.method(number)
//  มี 4 วิธีทั่วไปในการปัดเศษตัวเลขเป็นจำนวนเต็ม
//* 2.1 Math.round() ส่งกลับจำนวนเต็มที่ใกล้ที่สุด
{
    Math.round(4.6); //5
    Math.round(4.5); //5
    Math.round(4.4); //4
}

//* 2.2 Math.ceil() ปัดเศษขึ้น
{
    Math.ceil(4.9); //5
    Math.ceil(4.7); //5
    Math.ceil(4.4); //5
    Math.ceil(4.0); //4
    Math.ceil(-4.2); //-4
}

//* 2.3 Math.floor() ปัดเศษลง
{
    Math.floor(4.9); //4
    Math.floor(4.7); //4
    Math.floor(4.4); //4
    Math.floor(4.2); //4
    Math.floor(-4.2); //-5
}

//* 2.4 Math.trunc() ส่งกลับส่วนจำนวนเต็มของ x
{
    Math.trunc(4.9); //4
    Math.trunc(4.7); //4
    Math.trunc(4.4); //4
    Math.trunc(4.2); //4
    Math.trunc(-4.2); //-4
}

//* 2.5 Math.sign()
{
    Math.sign(-4); // -1
    Math.sign(0);  // 0
    Math.sign(4);  // 1
}

//* 2.6 Math.pow() คืนค่า x ยกกำลัง y
{
    Math.pow(8, 2); //64
}

//* 2.7 Math.sqrt() ส่งกลับค่ารากที่สองของ x
{
    Math.sqrt(64); //8
}

//* 2.8 Math.abs() ส่งกลับค่าสัมบูรณ์ (บวก) ของ x
{
    Math.abs(-4.7); // 4.7
}

//* 2.9 Math.sin()
//  Math.sin(x)ส่งกลับค่าไซน์ (ค่าระหว่าง -1 ถึง 1) ของมุม x (ระบุเป็นเรเดียน)
//  หากคุณต้องการใช้องศาแทนเรเดียน คุณต้องแปลงองศาเป็นเรเดียน
//  มุมเป็นเรเดียน = มุมเป็นองศา x PI / 180
{
    Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)
}

//* 2.10 Math.cos()
//  Math.cos(x)ส่งกลับค่าโคไซน์ (ค่าระหว่าง -1 ถึง 1) ของมุม x (ระบุเป็นเรเดียน)
//  หากคุณต้องการใช้องศาแทนเรเดียน คุณต้องแปลงองศาเป็นเรเดียน
//  มุมเป็นเรเดียน = มุมเป็นองศา x PI / 180
{
    Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)
}

//* 2.11 Math.min() and Math.max()
//  Math.min() และ Math.max() สามารถใช้เพื่อค้นหาค่าต่ำสุดหรือสูงสุดในรายการอาร์กิวเมนต์
{
    Math.min(0, 150, 30, 20, -8, -200); //-200
    Math.max(0, 150, 30, 20, -8, -200); //150
}

//* 2.12 Math.random() ส่งคืนตัวเลขสุ่มระหว่าง 0 (รวม) และ 1 (พิเศษ)
{
    Math.random(); //0.5621389713929019
}

//* 2.13 The Math.log() Method คืนค่าลอการิทึมธรรมชาติของ x
//  Math.E และ Math.log() เป็นฝาแฝดกัน
{
    Math.log(1); //0
    Math.log(2); //0.6931471805599453
    Math.log(3); //1.0986122886681096
    //* เราต้องคูณ Math.E กี่ครั้งเพื่อให้ได้ 10
    Math.log(10); //2.302585092994046
}

//* 2.14 The Math.log2() Method คืนค่าลอการิทึมฐาน 2 ของ x
{
    //*เราต้องคูณ 2 กี่ครั้งถึงจะได้ 8?
    Math.log2(8); //3
    //*เราต้องคูณ 2 กี่ครั้งถึงจะได้ 16?
    Math.log2(16); //4   
}

//* 2.15 The Math.log10() Method คืนค่าลอการิทึมฐาน 10 ของ x
{
    //* เราต้องคูณ 10 กี่ครั้งถึงจะได้ 1,000?
    Math.log10(1000); //10
}