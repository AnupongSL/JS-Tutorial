//* JavaScript While Loop
//* Syntax
{
    while (condition) {
        // code block to be executed
    }
}
{
    while (i < 10) {
        text += "The number is " + i;
        i++;
    }
}
//! หากคุณลืมเพิ่มตัวแปรที่ใช้ในเงื่อนไข ลูปจะไม่มีวันสิ้นสุด สิ่งนี้จะทำให้เบราว์เซอร์ของคุณพัง

//* The Do While Loop
//* Syntax
//  การวนซ้ำจะถูกดำเนินการอย่างน้อยหนึ่งครั้งเสมอ แม้ว่าเงื่อนไขจะเป็นเท็จ เนื่องจากโค้ดบล็อกจะถูกดำเนินการก่อนที่จะทดสอบเงื่อนไข
{
    do {
        // code block to be executed
    }
    while (condition);
}
{
    do {
        text += "The number is " + i;
        i++;
    }
    while (i < 10);
}
//! อย่าลืมเพิ่มตัวแปรที่ใช้ในเงื่อนไข มิฉะนั้น การวนซ้ำจะไม่มีวันสิ้นสุด!