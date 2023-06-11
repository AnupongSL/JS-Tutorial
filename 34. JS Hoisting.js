//* JavaScript Hoisting
//  ประกาศตัวแปรก่อนนำไปใช้งาน
//! error
{
    carname = "Volvo"
    let carname;
    //ReferenceError;
}
//* good
{
    let carname;
    carname = "Volvo"
}

//* เพื่อหลีกเลี่ยงข้อบกพร่อง ให้ประกาศตัวแปรทั้งหมดที่จุดเริ่มต้นของทุกขอบเขตเสมอ