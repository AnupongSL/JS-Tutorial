//* JavaScript Iterables
//  Iterables เป็นวัตถุที่ทำซ้ำได้ (เช่น Arrays)
//  Iterables สามารถเข้าถึงได้ด้วยรหัสที่ง่ายและมีประสิทธิภาพ
//  Iterables สามารถวนซ้ำได้ด้วย for..of การวนซ้ำ
//  The For Of Loop
{
  for (variable of iterable) {
    // code block to be executed
  }
}

//* Iterating Over a String การวนซ้ำบนสตริง
{
  const name = "W3Schools";

  for (const x of name) {
    // code block to be executed
  }
}

//* Iterating Over an Array การวนซ้ำในอาร์เรย์
{
  const letters = ["a", "b", "c"];

  for (const x of letters) {
    // code block to be executed
  }
}

//* Iterating Over a Set วนซ้ำ Set
{
  const letters = new Set(["a", "b", "c"]);

  for (const x of letters) {
    // code block to be executed
  }
}

//* Iterating Over a Map วนซ้ำแผนที่
{
  const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
  ]);

  for (const x of fruits) {
    // code block to be executed
  }
}