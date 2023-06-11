//* JavaScript BigInt
//  JavaScript BigInt ใช้เพื่อเก็บค่าจำนวนเต็มขนาดใหญ่ที่ JavaScript number ไม่สามารถเก็บได้

//* JavaScript Integer Accuracy
//  จำนวนเต็มของ JavaScript มีความแม่นยำไม่เกิน 15 หลักเท่านั้น
let x = 999999999999999; //999999999999999
let y = 9999999999999999; //10000000000000000

//  ใน JavaScript ตัวเลขทั้งหมดจะถูกจัดเก็บในรูปแบบทศนิยม 64 บิต (มาตรฐาน IEEE 754)
//  ด้วยมาตรฐานนี้ จำนวนเต็มขนาดใหญ่ไม่สามารถแสดงได้ทั้งหมดและจะถูกปัดเศษ
//  ด้วยเหตุนี้ JavaScript จึงสามารถแสดงได้เฉพาะจำนวนเต็มเท่านั้น
//* ค่าสูงสุด 9007199254740991 +(2^(53-1))
//* ค่าต่ำสุด -9007199254740991 -(2^(53-1))
//  ค่านอกเหนือจากนี้จะไม่มีความแม่นยำ


//* How to Create a BigInt
{
    let x = 1234567890123456789012345n; //1234567890123456789012345
    let y = BigInt(1234567890123456789012345) //1234567890123456789012345
    console.log(typeof(x)); //* bigint
}


// BigInt เป็นประเภทข้อมูลตัวเลขที่สองใน JavaScript (รองจาก Number)
// BigInt ไม่สามารถมีทศนิยมได้
{
    let x = 5n;
    let y = x / 2;
    // Error: Cannot mix BigInt and other types, use explicit conversion.
}
{
    let x = 5n;
    let y = Number(x) / 2;
}


//* BigInt Hex, Octal and Binary เลขฐานสิบหก เลขฐานแปด หรือเลขฐานสอง
{
    let hex = 0x20000000000003n;
    let oct = 0o400000000000000003n
    let bin = 0b100000000000000000000000000000000000000000000000000011n;
}


//  การปัดเศษอาจทำให้ความปลอดภัยของโปรแกรมลดลง
{
    let x = 9007199254740992 === 9007199254740993; // true
}


//* Minimum and Maximum Safe Integers
{
    let x = Number.MAX_SAFE_INTEGER; //9007199254740991
    let y = Number.MIN_SAFE_INTEGER; //-9007199254740991
}


//* The Number.isInteger() Method , return true ถ้าเป็นจำนวนเต็ม
{
    Number.isInteger(10);   //true
    Number.isInteger(10.5); //false
}


//* The Number.isSafeInteger() Method
//  คืนค่าจริงหากอาร์กิวเมนต์เป็นจำนวนเต็มที่ปลอดภัย
{
    Number.isSafeInteger(10); //true
    Number.isSafeInteger(12345678901234567890); //false
}