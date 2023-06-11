//* Escape Character
//TODO:     Code      Result        Description
//?         \'        '             Single quote
//?         \"        "             Double quote
//?         \\        \             Backslash
console.log("Hello \"World!\""); //Hello "World!"

//* Escape Sequences
//TODO:     Code      Result
//?         \b        Backspace
//?         \f        Form Feed
//?         \n        New Line
//?         \r        Carriage Return
//?         \t        Horizontal Tabulator
//?         \v        Vertical Tabulator

//! Do not create Strings objects.
{
    let x = "John";
    let y = new String("John");
    console.log(x == y); // true
    console.log(x === y); // false
}
{
    //การเปรียบเทียบวัตถุ JavaScript สองรายการจะส่งคืนค่าเท็จเสมอ
    let x = new String("John");
    let y = new String("John");
    console.log(x == y); // false
    console.log(x === y); // false
}