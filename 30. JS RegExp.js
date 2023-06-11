//* JavaScript Regular Expressions นิพจน์ทั่วไปของ JavaScript
//  Syntax
//  /pattern/modifiers; เช่น /w3schools/i;

//* Using String Methods
//  In JavaScript, regular expressions มักใช้กับเมธอดสตริงสองวิธี search() and replace().
//* 1. Using String search() With a String
//  search() คือวิธีการค้นหาสตริงสำหรับค่าที่ระบุและส่งกลับตำแหน่งของการจับคู่
//  ถ้าไม่เจอจะ return -1
{
    let text = "Visit W3Schools!";
    let n = text.search("w3Schools");
    console.log(n); //-1

    // Regular Expressions
    // /i คือไม่คำนึงถึงตัวพิมพ์เล็กพิมพ์ใหญ่
    let x = text.search(/w3schools/i);
    console.log(x); //6
}

//* Using String replace() With a String
//  The replace() method แทนที่ค่าที่ระบุด้วยค่าอื่นในสตริง
{
    let text = "Visit Microsoft!";
    let result1 = text.replace("microsoft", "W3Schools");
    console.log(result1); //Visit Microsoft!

    // Regular Expressions
    // /i คือไม่คำนึงถึงตัวพิมพ์เล็กพิมพ์ใหญ่
    let result2 = text.replace(/microsoft/i, "W3Schools");
    console.log(result1); //Visit W3Schools!
}

//* Regular Expression Modifiers
//TODO:   Modifier    Description
//?       i           ไม่คำนึงถึงตัวพิมพ์เล็กพิมพ์ใหญ่
//?       g           ปกติจะหยุดการค้นหาถ้าเจอตัวแรก แต่ -g ไม่หยุดการค้นหาจนกว่าจะค้นหาเสร็จสิ้น
//?       m           ทำหลายบรรทัด

//* Regular Expression Patterns
//  ใช้วงเล็บเพื่อค้นหาช่วงของอักขระ
//  [abc] ค้นหาอักขระใดก็ได้ระหว่างวงเล็บ
{
    let text = "Is this all there is?";
    let result = text.match(/[h]/g); // h, h
}
//  [0-9] ค้นหาตัวเลขระหว่างวงเล็บ
{
    let text = "123456789";
    let result = text.match(/[1-4]/g); //1,2,3,4
}
//  (x|y) ค้นหาทางเลือกใดๆ ที่คั่นด้วย |
{
    let text = "re, green, red, green, gren, gr, blue, yellow";
    let result = text.match(/(red|green)/g); //green,red,green
}

//* Metacharacters เป็นอักขระที่มีความหมายพิเศษ
//  /d ค้นหาตัวเลข
{
    let text = "Give 100%!"; 
    let result = text.match(/\d/g); //1,0,0
}

//  /s ค้นหาตัวเลข ค้นหาอักขระช่องว่าง
{
    let text = "Is this all there is?";
    let result = text.match(/\s/g); //, , ,
}

//  \b ค้นหาตัวเลข หาคู่ที่ขึ้นต้นคำแบบนี้: \bWORD หรือที่ท้ายคำแบบนี้: WORD\b
{
    //ขึ้นต้นด้วย LO
    let text = "HELLO, LOOK AT YOU!"; 
    let result1 = text.search(/\bLO/); //7

    //ลงท้ายด้วย LO
    let result2 = text.search(/LO\b/); //3
}

//  \uxxxx ค้นหาอักขระ Unicode ที่ระบุด้วยเลขฐานสิบหก xxxx
{
    let text = "Visit W3Schools. Hello World!"; 
    let result = text.match(/\u0057/g); //W,W
}

//* Quantifiers กำหนดปริมาณ
//  +n จับคู่สตริงใดๆ ที่มี n อย่างน้อยหนึ่งตัว
{
    let text = "Hellooo World! Hello W3Schools!"; 
    let result = text.match(/o+/g);
    // ooo,o,o,oo
}

//  n* จับคู่สตริงใดๆ ที่มี n เกิดขึ้นเป็นศูนย์หรือมากกว่า
{
    let text = "Hellooo World! Hello W3Schools!"; 
    let result = text.match(/lo*/g);
    // l,looo,l,l,lo,l
}

//  n? จับคู่สตริงใดๆ ที่มี n เป็นศูนย์หรือหนึ่งรายการ
{
    let text = "1, 100 or 1000?";
    let result = text.match(/10?/g);
    // 1,10,10
}

//* Using test()
//  test()เป็นวิธีการนิพจน์ RegExp
//  โดยจะค้นหาสตริงเพื่อหารูปแบบ และส่งกลับค่าจริงหรือเท็จ ขึ้นอยู่กับผลลัพธ์
{
    const pattern = /e/;
    pattern.test("The best things in life are free!");
    // true

    // คุณไม่จำเป็นต้องใส่นิพจน์ทั่วไปในตัวแปรก่อน สองบรรทัดด้านบนสามารถย่อให้เหลือหนึ่ง
    /e/.test("The best things in life are free!");
    // true
}

//* Using exec()
//  exec()เป็นวิธีการนิพจน์ RegExp
//  ค้นหาสตริงสำหรับรูปแบบที่ระบุ และส่งกลับข้อความที่พบเป็นวัตถุ
//  หากไม่พบรายการที่ตรงกัน ระบบจะส่งคืนวัตถุ ว่าง (null)
{
    /e/.exec("The best things in life are free!");
}