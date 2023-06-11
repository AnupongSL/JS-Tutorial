//* JavaScript Array Iteration
//* JavaScript Array forEach()
{
  const numbers = [45, 4, 9, 16, 25];
  let txt = "";
  numbers.forEach(myFunction);
  //45
  //4
  //9
  //16
  //25

  // function รับ 3 arguments (value, index, array)
  function myFunction(value, index, array) {
    txt += value + "<br>";
  }
}

//* JavaScript Array map()
{
  const numbers1 = [45, 4, 9, 16, 25];
  const numbers2 = numbers1.map(myFunction);
  //90,8,18,32,50

  // function รับ 3 arguments (value, index, array)
  function myFunction(value, index, array) {
    return value * 2;
  }
}

//* JavaScript Array flatMap()
{
  const myArr = [1, 2, 3, 4, 5, 6];
  const newArr = myArr.flatMap((x) => x * 2); //2,4,6,8,10,12
}

//* JavaScript Array filter()
{
  const numbers = [45, 4, 9, 16, 25];
  const over18 = numbers.filter(myFunction);
  //45,25

  // function รับ 3 arguments (value, index, array)
  function myFunction(value, index, array) {
    return value > 18;
  }
}

//* JavaScript Array reduce()
//  การทำงานจากซ้ายไปขวาในอาร์เรย์
{
  const numbers = [45, 4, 9, 16, 25];
  let sum = numbers.reduce(myFunction);
  // 99
  // วิธี reduce() สามารถรับค่าเริ่มต้นได้
  let sum1 = numbers.reduce(myFunction, 100);
  // 199

  // function รับ 4 arguments (total, value, index, array)
  function myFunction(total, value, index, array) {
    return total + value;
  }
}

//* JavaScript Array reduceRight()
//  เหมือนกับ reduce () แต่ทำงานจากขวาไปซ้ายในอาร์เรย์

//* JavaScript Array every()
//  ตัวอย่างนี้จะตรวจสอบว่าค่าอาร์เรย์ทั้งหมดมากกว่า 18 หรือไม่
{
  const numbers = [45, 4, 9, 16, 25];
  let allOver18 = numbers.every(myFunction);
  // false

  // function รับ 3 arguments (value, index, array)
  function myFunction(value, index, array) {
    return value > 18;
  }
}

//* JavaScript Array some()
//  ตัวอย่างนี้ตรวจสอบว่าค่าอาร์เรย์บางค่ามีค่ามากกว่า 18 หรือไม่
{
  const numbers = [45, 4, 9, 16, 25];
  let someOver18 = numbers.some(myFunction);
  //true

  // function รับ 3 arguments (value, index, array)
  function myFunction(value, index, array) {
    return value > 18;
  }
}

//* JavaScript Array indexOf()
//  ค้นหาค่าองค์ประกอบในอาร์เรย์และส่งกลับตำแหน่ง
//* Array.indexOf() returns -1 if the item is not found.
{
  const fruits = ["Apple", "Orange", "Apple", "Mango"];
  let position = fruits.indexOf("Apple") + 1; //1
}

//* JavaScript Array lastIndexOf()
//  Array.lastIndexOf()จะเหมือนกับArray.indexOf()แต่คืนตำแหน่งของการเกิดขึ้นล่าสุดขององค์ประกอบที่ระบุ
{
  const fruits = ["Apple", "Orange", "Apple", "Mango"];
  let position = fruits.lastIndexOf("Apple") + 1; //3
  // return 0 หากไม่พบ index
}

//* JavaScript Array find()
//  ตัวอย่างนี้ค้นหา (ส่งคืนค่าของ) องค์ประกอบแรกที่มากกว่า 18
{
  const numbers = [4, 9, 16, 25, 29];
  let first = numbers.find(myFunction);
  //25

  // function รับ 3 arguments (value, index, array)
  function myFunction(value, index, array) {
    return value > 18;
  }
}

//* JavaScript Array findIndex()
//  ตัวอย่างนี้ค้นหาดัชนีขององค์ประกอบแรกที่มากกว่า 18
{
  const numbers = [4, 9, 16, 25, 29];
  let first = numbers.findIndex(myFunction);
  //3

  // function รับ 3 arguments (value, index, array)
  function myFunction(value, index, array) {
    return value > 18;
  }
}

//* JavaScript Array.from()
//  ส่งกลับวัตถุ Array จากวัตถุใด ๆ ที่มีคุณสมบัติความยาวหรือวัตถุใด ๆ ที่ทำซ้ำได้
{
  Array.from("ABCDEFG"); //A,B,C,D,E,F,G
}

//* JavaScript Array Keys()
//  ส่งคืนอ็อบเจกต์ Array Iterator ด้วยคีย์ของอาร์เรย์
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const keys = fruits.keys();
  //0
  //1
  //2
  //3

  for (let x of keys) {
    text += x + "<br>";
  }
}

//* JavaScript Array entries()
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const f = fruits.entries();
  //0,Banana
  //1,Orange
  //2,Apple
  //3,Mango

  for (let x of f) {
    document.getElementById("demo").innerHTML += x;
  }
}

//* JavaScript Array includes()
//  สิ่งนี้ช่วยให้เราสามารถตรวจสอบได้ว่ามีองค์ประกอบอยู่ในอาร์เรย์หรือไม่ (รวมถึง NaN ซึ่งแตกต่างจาก indexOf)
//  Array.includes() อนุญาตให้ตรวจสอบค่า NaN ไม่เหมือนกับ Array.indexOf()
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.includes("Mango"); // is true
  fruits.includes("NaN"); // is false
}

//* JavaScript Array Spread (...)
{
  const q1 = ["Jan", "Feb", "Mar"];
  const q2 = ["Apr", "May", "Jun"];
  const q3 = ["Jul", "Aug", "Sep"];
  const q4 = ["Oct", "Nov", "May"];

  const year = [...q1, ...q2, ...q3, ...q4];
  // Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,May
}