//* JavaScript Common Mistakes ข้อผิดพลาดทั่วไปของ JavaScript
//  Undefined is Not Null , Undefined ไม่เป็นโมฆะ
//  วัตถุ JavaScript ตัวแปร คุณสมบัติ และเมธอด can be undefined.
//  นอกจากนี้ ออบเจกต์ JavaScript ที่ว่างเปล่าสามารถมีค่าเป็น null ได้
//  สิ่งนี้อาจทำให้การทดสอบว่าวัตถุว่างเปล่าทำได้ยากขึ้นเล็กน้อย
//  คุณสามารถทดสอบว่ามีวัตถุอยู่หรือไม่โดยการทดสอบว่าไม่ได้กำหนดประเภทหรือไม่
{
    if (typeof myObj === "undefined"){}  //true
}

//  แต่คุณไม่สามารถทดสอบว่าออบเจกต์เป็นโมฆะหรือไม่ เพราะจะทำให้เกิดข้อผิดพลาดหากออบเจกต์ไม่ได้กำหนด
{
    if (typeof myObj === "null"){} //false
}

//  ในการแก้ปัญหานี้ คุณต้องทดสอบว่าออบเจกต์ไม่เป็นโมฆะ และไม่ได้กำหนดหรือไม่
//  แต่สิ่งนี้ยังสามารถส่งข้อผิดพลาด
{
    //          True                   False    , T & F = F
    if (myObj !== null && typeof myObj !== "undefined"){} //false
}

//  ด้วยเหตุนี้ คุณต้องทดสอบ not undefined ก่อนจึงจะสามารถทดสอบว่าไม่เป็น null ได้
{
        //          False                   True    , F & T = F
    if (typeof myObj !== "undefined" && myObj !== null){} //false
}