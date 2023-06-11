//* JavaScript Number Methods
//TODO:   Method           Description
//?       toString()       ส่งกลับตัวเลขเป็นสตริง
//?       toExponential()  ส่งกลับตัวเลขที่เขียนในรูปแบบเลขชี้กำลัง
//?       toFixed()        ส่งกลับตัวเลขที่เขียนด้วยจำนวนทศนิยม
//?       toPrecision()    ส่งกลับตัวเลขที่เขียนด้วยความยาวที่ระบุ
//?       ValueOf()        ส่งกลับตัวเลขเป็นตัวเลข

//* The toString() Method
{
  let x = 123;
  x.toString(); //123
  (123).toString(); //123
  (100 + 23).toString(); //123
}

//* The toExponential() Method
{
  let x = 9.656;
  x.toExponential(); //9.656e+0
  x.toExponential(2); //9.66e+0
  x.toExponential(4); //9.6560e+0
  x.toExponential(6); //9.656000e+0
}

//* The toFixed() Method
{
  let x = 9.656;
  x.toFixed(0); //10
  x.toFixed(2); //9.66
  x.toFixed(4); //9.6560
  x.toFixed(6); //9.656000
}

//* The toPrecision() Method
{
  let x = 9.656;
  x.toPrecision(); //9.656
  x.toPrecision(2); //9.7
  x.toPrecision(4); //9.656
  x.toPrecision(6); //9.65600
}

//* The valueOf() Method
{
  let x = 123;
  x.valueOf(); //123
  (123).valueOf(); //123
  (100 + 23).valueOf(); //123
}

//* Converting Variables to Numbers การแปลงตัวแปรเป็นตัวเลข
//TODO:  Method         Description
//?      Number()       ส่งกลับจำนวนที่แปลงจากอาร์กิวเมนต์
//?      parseFloat()   แยกวิเคราะห์อาร์กิวเมนต์และส่งกลับจำนวน floating
//?      parseInt()     แยกวิเคราะห์อาร์กิวเมนต์และส่งกลับจำนวนเต็ม

//* The Number() Method
{
  Number(true); //1
  Number(false); //0
  Number("10"); //10
  Number("  10"); //10
  Number("10  "); //10
  Number(" 10  "); //10
  Number("10.33"); //10.33
  Number("10,33"); //NaN
  Number("10 33"); //NaN
  Number("John"); //NaN
  Number(new Date("2017-09-30")); //1506729600000
}

//* The parseInt() Method
//  แยกวิเคราะห์สตริงและส่งกลับจำนวนเต็ม อนุญาตให้ใช้ช่องว่างได้ ส่งคืนเฉพาะหมายเลขแรกเท่านั้น
{
  parseInt("-10"); //-10
  parseInt("-10.33"); //-10
  parseInt("10"); //10
  parseInt("10.33"); //10
  parseInt("10 20 30"); //10
  parseInt("10 years"); //10
  parseInt("years 10"); //NaN
}

//* The parseFloat() Method
//  แยกวิเคราะห์สตริงและส่งกลับตัวเลข อนุญาตให้ใช้ช่องว่างได้ ส่งคืนเฉพาะหมายเลขแรกเท่านั้น
{
  parseFloat("10"); //10
  parseFloat("10.33"); //10.33
  parseFloat("10 20 30"); //10
  parseFloat("10 years"); //10
  parseFloat("years 10"); //NaN
}

//* Number Object Methods
//TODO:  Method  Description