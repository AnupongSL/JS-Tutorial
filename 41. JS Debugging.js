//* JavaScript Debugging
//* คุณสามารถใช้ console.log() เพื่อแสดงค่า JavaScript ในหน้าต่างดีบั๊ก
//* ใช้ debugger;
{
    let x = 15 * 5;
    debugger;
    document.getElementById("demo").innerHTML = x;
}
//  หากไม่มีการดีบั๊ก คำสั่งดีบั๊กจะไม่มีผล
//  เมื่อดีบักเกอร์เปิดอยู่ โค้ดนี้จะหยุดทำงานก่อนที่จะรันบรรทัดที่สาม