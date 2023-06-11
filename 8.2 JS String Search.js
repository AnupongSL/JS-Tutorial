//* JavaScript String Search
//* 1. String indexOf()
// return ตำแหน่งที่เจอตัวแรกในสตริง
// return -1 หากไม่พบข้อความ
{
    let text = "Please locate where 'locate' occurs!";
    console.log(text.indexOf("locate")); //7
    console.log(text.indexOf("locate", 15)); // 7, เริ่มค้นหาตั้งแต่ตำแหน่งที่ 15
}


//* 2. String lastIndexOf()
// return ตำแหน่งที่เจอตัวสุดท้ายในสตริง
// return -1 หากไม่พบข้อความ
// ไม่สามารถใช้ค่าการค้นหาที่มีประสิทธิภาพ (regular expressions)
{
    let text = "Please locate where 'locate' occurs!";
    console.log(text.lastIndexOf("locate")); //21
    console.log(text.lastIndexOf("locate", 15)); //7
    //ค้นหาย้อนหลัง (จากจุดสิ้นสุดไปยังจุดเริ่มต้น) ความหมาย: หากพารามิเตอร์ที่สองคือ 15 การค้นหาจะเริ่มต้นที่ตำแหน่ง 15 และค้นหาไปยังจุดเริ่มต้น
}


//* 3. String search()
//  การค้นหาสตริงสำหรับสตริง (regular expressions) และส่งกลับตำแหน่งของการจับคู่
//  ไม่สามารถใช้อาร์กิวเมนต์ตำแหน่งเริ่มต้นที่สองได้
{
    let text = "Please locate where 'locate' occurs!";
    console.log(text.search("locate")); //7
    console.log(text.search(/locate/)); //7
}


//* 4. String match()
{
    let text = "The rain in SPAIN stays mainly in the plain";
    console.log(text.match("ain"));  // 1 ain
    console.log(text.match(/ain/));  // 1 ain
    console.log(text.match(/ain/g)); // 3 ain,ain,ain
    console.log(text.match(/ain/gi)); // 4 ain,AIN,ain,ain ไม่คำนึงถึงตัวพิมพ์เล็กพิมพ์ใหญ่
}


//* 5. String matchAll()
{
    let text = "I love cats. Cats are very easy to love. Cats are very popular."
    console.log(text.matchAll("Cats"));  // Cats,Cats
    //หากพารามิเตอร์เป็น regular expressions ต้องตั้งค่า (g) มิฉะนั้น TypeError จะถูกส่งออกไป
    console.log(text.matchAll(/Cats/g)); // Cats,Cats
    console.log(text.matchAll(/Cats/gi)); // cats,Cats,Cats
}


//* 6. String includes()
//  ถ้ามีค่าส่งคืน true , ไม่มีค่าส่งคืน false
{
    let text = "Hello world, welcome to the universe.";
    console.log(text.includes("world"));     // true
    // เริ่มค้นหาตั้งแต่ตำแหน่งที่ 12
    console.log(text.includes("world", 12)); // false
}


//* 7. String startsWith()
//  ถ้าตัวแรกมีค่าเท่ากับ startsWith() ส่งคืน true , ไม่เท่าส่งคืน false
{
    let text = "Hello world, welcome to the universe.";
    console.log(text.startsWith("Hello"));     // true
    console.log(text.startsWith("world"));     // false
    // สามารถกำหนดตำแหน่งให้เริ่มค้นหาได้
    console.log(text.startsWith("world", 5));  // true
}


//* 8. String endsWith()
//  ถ้าสุดท้ายมีค่าเท่ากับ endsWith() ส่งคืน true , ไม่เท่าส่งคืน false
{
    let text = "Hello world, welcome to the universe.";
    console.log(text.endsWith("universe.")); // true
    console.log(text.endsWith("world"));     // false
    // ค้นหา 11 ตัวแรกว่ามี world หรือไม่
    console.log(text.endsWith("world", 11));  // true
}