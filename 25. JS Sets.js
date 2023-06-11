//* JavaScript Sets
//* Essential Set Methods
//TODO:  Method         Description
//?      new Set()      Create a new Set
//?      add()          เพิ่ม element ใหม่ให้กับ Set
//?      delete()       ลบ element ออกจาก Set
//?      has()          Returns true if a value exists in the Set
//?      forEach()      Invokes a callback for each element in the Set
//?      values()       ส่งกลับ iterator ด้วยค่าทั้งหมดใน Set
//?      size           Returns the number of elements in a Set

//* The new Set() Method
{
  // Create a Set
  const letters = new Set();
  const c = "c";

  // Add Values to the Set
  letters.add("a");
  // หากคุณเพิ่มองค์ประกอบที่เท่ากัน ระบบจะบันทึกเฉพาะองค์ประกอบแรกเท่านั้น
  letters.add("b");
  letters.add("b");
  letters.add(c);
}

//* The forEach() Method
{
  // Create a Set
  const letters = new Set(["a", "b", "c"]);

  // List all Elements
  let text = "";
  letters.forEach(function (value) {
    text += value;
  });
  //a
  //b
  //c
}

//* The values() Method
//  ส่งคืนวัตถุตัววนซ้ำใหม่ที่มีค่าทั้งหมดในชุด
{
  letters.values(); // Returns [object Set Iterator]
}
{
  // Create a Set
  const letters = new Set(["a", "b", "c"]);

  // List all Elements
  let text = "";
  for (const x of letters.values()) {
    text += x + "<br>";
  }
  //a
  //b
  //c
}