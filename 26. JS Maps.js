//* JavaScript Maps
//  Maps เก็บคู่คีย์-ค่าโดยที่คีย์สามารถเป็นประเภทข้อมูลใดก็ได้
//TODO:  Method         Description
//?      new Map()      Creates a new Map
//?      set()          Sets the value for a key in a Map
//?      get()          Gets the value for a key in a Map
//?      delete()       Removes a Map element specified by the key
//?      has()          Returns true if a key exists in a Map
//?      forEach()      Calls a function for each key/value pair in a Map
//?      entries()      Returns an iterator with the [key, value] pairs in a Map
//?      size()         Returns the number of elements in a Map

//* The new Map() Method
{
  // Create a Map
  const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
  ]);
}

//* The set() Method
{
  // Create a Map
  const fruits = new Map();

  // Set Map Values
  fruits.set("apples", 500);
  fruits.set("bananas", 300);
  fruits.set("oranges", 200);
  //นอกจากนี้ยังสามารถใช้วิธีนี้ เพื่อเปลี่ยนค่าแผนที่ที่มีอยู่
  fruits.set("apples", 200);
}

//* The get() Method
//  fruits.get("apples");    // Returns 500

//* The size Property
{
  // Create a Map
  const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
  ]);

  fruits.size; //3
}

//* The delete() Method
{
  // Create a Map
  const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
  ]);

  fruits.delete("apples");
  fruits.size; //2
}

//* The has() Method
{
  // Create a Map
  const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
  ]);
  fruits.has("apples"); //true
  fruits.delete("apples");
  fruits.has("apples"); //false
}

//* The forEach() Method
//  เรียกใช้ฟังก์ชันสำหรับแต่ละคู่คีย์/ค่าในแผนที่
{
  // List all entries
  let text = "";
  fruits.forEach(function (value, key) {
    text += key + " = " + value;
  });
}

//* The entries() Method
{
  // List all entries
  let text = "";
  for (const x of fruits.entries()) {
    text += x;
  }
}

//* JavaScript Objects vs Maps
//TODO:                 Object                          Map
//? Iterable(ทำซ้ำได้)    ไม่สามารถทำซ้ำได้โดยตรง           ทำซ้ำได้โดยตรง
//? size(ขนาด)          ไม่มีคุณสมบัติขนาด                 มีคุณสมบัติขนาด
//? Key Types           คีย์ต้องเป็นสตริง (หรือสัญลักษณ์)      คีย์สามารถเป็นประเภทข้อมูลใดก็ได้
//? Key Order           คีย์ไม่เป็นระเบียบ                   คีย์ถูกสั่งโดยการแทรก
//? Defaults            มีคีย์เริ่มต้น                        ไม่มีคีย์เริ่มต้น