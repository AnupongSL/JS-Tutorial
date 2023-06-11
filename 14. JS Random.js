//* JavaScript Random
//  Math.random()
//  Math.random()ส่งคืนตัวเลขที่ต่ำกว่า 1 เสมอ
//  Math.random() ใช้กับ Math.floor() สามารถใช้เพื่อกลับจำนวนเต็มสุ่ม
{
    // Returns a random integer from 0 to 9:
    Math.floor(Math.random() * 10);
}
{
    // Returns a random integer from 0 to 10
    Math.floor(Math.random() * 11);
}
{
    // Returns a random integer from 0 to 99
    Math.floor(Math.random() * 100);
}
{
    // Returns a random integer from 0 to 100
    Math.floor(Math.random() * 101);
}
{
    // Returns a random integer from 1 to 10
    Math.floor(Math.random() * 10) + 1;
}
{
    // Returns a random integer from 1 to 100
    Math.floor(Math.random() * 100) + 1;
}

//* A Proper Random Function
//  ฟังก์ชัน JavaScript นี้จะส่งคืนตัวเลขสุ่มระหว่าง min (รวม) และ max (ไม่รวม) เสมอ
{
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
}
//  ฟังก์ชัน JavaScript นี้จะส่งคืนตัวเลขสุ่มระหว่างค่าต่ำสุดและค่าสูงสุดเสมอ (รวมทั้งสองค่า)
{
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}