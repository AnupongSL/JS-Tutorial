//* JavaScript String Methods
//* 1. String.length เช็คความยาวสตริง
{
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(text.length); // 26
}

//* 2. String slice()
{
    let text = "Apple, Banana, Kiwi";
    console.log(text.slice(0, 13)); // Apple, Banana
    console.log(text.slice(7)); // Banana, Kiwi
    console.log(text.slice(-4)); // Kiwi
    console.log(text.slice(-12, -6)); // Banana
}

//* 3. String substring()
//  substring() คล้ายกับ slice()
//  ข้อแตกต่างคือค่าเริ่มต้นและค่าสิ้นสุดที่น้อยกว่า 0 จะถือว่าเป็น 0
{
    let text = "Apple, Banana, Kiwi";
    console.log(text.substring(0, 13)); // Apple, Banana
    console.log(text.substring(-7)); // Apple, Banana, Kiwi
    console.log(text.substring(-5, 13)); // Apple, Banana
    console.log(text.substring(5, -100)); // Apple
}

//* 4. String substr()
// substr() คล้ายกับ slice().
// ข้อแตกต่างคือพารามิเตอร์ที่สองระบุความยาวของส่วนที่แยกออกมา
{
    let text = "Apple, Banana, Kiwi";
    console.log(text.substr(0, 2)); // Ap
    console.log(text.substr(7)); // Banana, Kiwi
    console.log(text.substr(-4)); // Kiwi
}

//* 5. String replace()
{
    let text = "Please visit Microsoft and Microsoft!";
    let newText = text.replace("Microsoft", "W3Schools"); // Please visit W3Schools and Microsoft!
    let newText1 = text.replace("MICROSOFT", "W3Schools"); //Please visit Microsoft and Microsoft!
    let newText2 = text.replace(/MICROSOFT/i, "W3Schools"); //Please visit W3Schools and Microsoft!
    let newText3 = text.replace(/Microsoft/g, "W3Schools"); //Please visit W3Schools and W3Schools!
}

//* 6. String replaceAll()
{
    let text = "I love cats. Cats are very easy to love. Cats are very popular."
    text = text.replaceAll("Cats","Dogs");
    text = text.replaceAll("cats","dogs"); // I love dogs. Dogs are very easy to love. Dogs are very popular.
}

//* 7. String toUpperCase()
{
    let text1 = "Hello World!";
    console.log(text1.toUpperCase()); //HELLO WORLD!
}

//* 8. String toLowerCase()
{
    let text1 = "Hello World!";
    console.log(text1.toLowerCase()); //hello world!
}

//* 9. String concat()
{
    let text1 = "Hello";
    let text2 = "World";
    console.log(text1.concat(" ", text2)); //Hello World!
}

//* 10. String trim() ลบช่องว่างออกจากทั้งสองด้านของสตริง
{
    let text1 = "      Hello World!      ";
    let text2 = text1.trim();
    console.log(text1.length); //22
    console.log(text2.length); //12
}

//* 11. String trimStart() ลบช่องว่างออกจากจุดเริ่มต้นของสตริงเท่านั้น
{
    let text1 = "      Hello World!      ";
    let text2 = text1.trim();
    console.log(text1.length); //22
    console.log(text2.length); //17
}

//* 12. String trimEnd() ลบช่องว่างออกจากส่วนท้ายของสตริงเท่านั้น
{
    let text1 = "      Hello World!      ";
    let text2 = text1.trim();
    console.log(text1.length); //22
    console.log(text2.length); //17
}

//* 13. String padStart()
{
    let text = "5";
    let padded = text.padStart(4,"0");  // 0005
    let padded1 = text.padStart(4,"x"); // xxx5
}

//* 14. String padEnd()
{
    let text = "5";
    let padded = text.padEnd(4,"0");  // 5000
    let padded1 = text.padEnd(4,"x"); // 5xxx
}
//* 15. String charAt()
{
    let text = "HELLO WORLD";
    console.log(text.charCodeAt(0)); // H
    console.log(text.charCodeAt(3)); // L
    console.log(text[0]); // A, //!Gives no error, but does not work
    //ถ้าไม่พบ character [] return undefined
    // charAt() return ค่าว่าง
}

//* 16. String charCodeAt() return UTF-16 (จำนวนเต็มระหว่าง 0 ถึง 65535)
{
    let text = "HELLO WORLD";
    console.log(text.charCodeAt(0)); // 72
    console.log(text.charCodeAt(3)); // 76
}

//* 17. String split() สตริงสามารถแปลงเป็นอาร์เรย์
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe