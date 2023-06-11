//* JavaScript Booleans
//* The Boolean() Function
//  ส่งกลับ true ถ้าเป็นจริง
//  ส่งกลับ false ถ้าเป็นเท็จ
{
    Boolean(10 > 9) //true
    10 > 9 //true
}
//* Everything With a "Value" is True ทุกอย่างที่มี "ค่า" เป็นจริง
{
    100 //true
    3.14 //true
    -15 //true 
    "Hello" //true
    "false" //true
    7 + 1 + 3.14 //true
}

//* Everything Without a "Value" is False ทุกสิ่งที่ไม่มี "ค่า" เป็นเท็จ
{
    let x1 = 0;
    Boolean(x1); //false

    let x2 = -0;
    Boolean(x2); //false

    let x3 = "";
    Boolean(x3); //false

    let x4;
    Boolean(x4); //false

    let x5 = null
    Boolean(x5); //false

    let x6 = 10 / "Hello";
    Boolean(x6); //false
}

//* JavaScript Booleans as Objects
{
    let x = false;
    let y = new Boolean(false);
    let z = new Boolean(false);    

    // typeof x returns boolean
    // typeof y returns object
    // x == y , true
    // x === y , false
    // y == z , false
    // y === z , false วัตถุไม่เท่ากัน
}