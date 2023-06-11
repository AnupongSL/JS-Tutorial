//* JavaScript Break and Continue
//* คำสั่ง break "กระโดดออก" ของลูป
//* คำสั่ง continue "กระโดดข้าม" หนึ่งการวนซ้ำในลูป
//* คำสั่ง breakand และ continue เป็นคำสั่ง JavaScript เดียวที่สามารถ "ข้าม" บล็อกโค้ดได้
//* break labelname;
//* continue labelname;
//* ด้วยการอ้างอิงเลเบล คุณสามารถใช้คำสั่ง break เพื่อข้ามออกจากบล็อกโค้ดใดก็ได้
{
  const cars = ["BMW", "Volvo", "Saab", "Ford"];
  list: {
    text += cars[0] + "<br>";
    text += cars[1] + "<br>";
    break list;
    text += cars[2] + "<br>";
    text += cars[3] + "<br>";
  }
  // BMW
  // Volvo
}