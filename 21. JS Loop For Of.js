//* JavaScript For Of
//* คำสั่ง JavaScript for of วนซ้ำค่าของวัตถุที่ทำซ้ำได้
//* ช่วยให้คุณสามารถวนซ้ำโครงสร้างข้อมูลแบบวนซ้ำได้ เช่น Arrays, Strings, Maps, NodeLists และอื่นๆ
//* Syntax
{
  for (variable of iterable) {
    // code block to be executed
  }
}

//* Looping over an Array
{
  const cars = ["BMW", "Volvo", "Mini"];

  let text = "";
  for (let x of cars) {
    text += x;
  }
}

//* Looping over a String
{
  let language = "JavaScript";

  let text = "";
  for (let x of language) {
    text += x;
  }
}