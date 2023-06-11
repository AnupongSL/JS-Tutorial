//* JavaScript Type Conversion
//* การแปลงสตริงเป็นตัวเลข
//  Number() แปลงตัวแปร (หรือค่า) เป็นตัวเลข
//  สตริงว่าง (เช่น "") แปลงเป็น 0
//  สตริงที่ไม่ใช่ตัวเลข (เช่น "John") แปลงเป็นNaN
{
    Number("3.14") //3.14
    Number(Math.PI) //3.141592653589793
    Number(" ") //0
    Number("") //0
    Number("99 88") //NaN
    Number("John") //NaN
}

//* The Unary + Operator
//  สามารถใช้ ตัวดำเนินการ unary +เพื่อแปลงตัวแปรเป็นตัวเลขได้
{
    let y1 = "5";      // y1 is a string
    let x1 = + y1;      // x1 is a number

    // หากแปลงตัวแปรไม่ได้ ตัวแปรจะยังคงเป็นตัวเลข แต่มีค่าNaN(ไม่ใช่ตัวเลข)
    let y2 = "John";   // y2 is a string
    let x2 = + y2;      // x2 is a number (NaN)
}

//* การแปลงตัวเลขเป็นสตริง
//  String()สามารถแปลงตัวเลขเป็นสตริง
{
    String(x)         // returns a string from a number variable x
    String(123)       // returns a string from a number literal 123
    String(100 + 23)  // returns a string from a number from an expression

    // toString() ทำเช่นเดียวกัน
    x.toString()
    (123).toString()
    (100 + 23).toString()
}

//* การแปลงวันที่เป็นตัวเลข
//  Number() สามารถใช้วิธีการสากล เพื่อแปลงวันที่เป็นตัวเลขได้
{
    d = new Date();
    Number(d)          // returns 1404568027739

    //getTime() ทำได้เช่นเดียวกัน
    d = new Date();
    d.getTime()        // returns 1404568027739
}

//* การแปลงตัวเลขเป็นวันที่
//  String()สามารถแปลงวันที่เป็นสตริง
{
    String(Date())  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"

    //toString() ทำได้เช่นเดียวกัน
    Date().toString()  // returns "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
}

//* การแปลงบูลีนเป็นตัวเลข
//  Number()ยังสามารถแปลงบูลีนเป็นตัวเลข
{
    Number(false)     // returns 0
    Number(true)      // returns 1
}

//* การแปลงบูลีนเป็นสตริง
//  String()สามารถแปลงบูลีนเป็นสตริงได้
{
    String(false)      // returns "false"
    String(true)       // returns "true"

    //toString() ทำได้เช่นเดียวกัน
    false.toString()   // returns "false"
    true.toString()    // returns "true"
}

//* ตารางการแปลงประเภท JavaScript
//  ตารางนี้แสดงผลการแปลงค่า JavaScript ต่างๆ เป็น Number, String และ Boolean
//TODO:   Value             to Number   to String           to Boolean
//?       false             0           "false"             false
//?       true              1           "true"              true
//?       0                 0           "0"                 false
//?       1                 1           "1"                 true
//?       "0"               0           "0"                 true
//?       "000"             0           "000"               true
//?       "1"               1           "1"                 true
//?       NaN               NaN         "NaN"               false
//?       Infinity          Infinity    "Infinity"          true
//?       -Infinity         -Infinity   "-Infinity"         true
//?       ""                0           ""                  false
//?       "20"              20          "20"                true
//?       "twenty"          NaN         "twenty"            true
//?       []                0           ""                  true
//?       [20]              20          "20"                true
//?       [10,20]           NaN         "10,20"             true
//?       ["ten"]           NaN         "ten"               true
//?       function(){}      NaN         "function(){}"      true
//?       {}                NaN         "[object Object]"   true
//?       null              0           "null"              false
//?       undefined         NaN         "undefined"         false