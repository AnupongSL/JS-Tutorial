//* JavaScript Comparison and Logical Operators
//* Comparison Operators
//* ให้ x = 5
//TODO: Operator  Description           Comparing   Returns
//?     ==        เท่ากับ                 x == 8      false
//?                                     x == 5      true
//?                                     x == "5"    true
//?     ===       ค่าและ type เท่ากัน      x === 5     true
//?                                     x === "5"   false
//?     !=        ไม่เท่ากับ               x != 8      true
//?     !==       ค่าและ type ไม่เท่ากัน    x !== 5     false
//?                                     x !== "5"   true
//?                                     x !== 8     true
//?     >         มากกว่า                x > 8       false
//?     <         น้อยกว่า                x < 8       true
//?     >=        มากกว่าหรือเท่ากับ        x >= 8      false
//?     <=        น้อยกว่าหรือเท่ากับ        x <= 8      true

//* Logical Operators
//* ให้ x = 6, y = 3
//TODO: Operator  Description  Example
//?     &&        and          (x < 10 && y > 1) is true
//?     ||        or           (x == 5 || y ==  5) is false
//?     !         not          !(x==y) is true

//* Conditional (Ternary) Operator
//* variablename = (condition) ? value1:value2
{
  let age = 20;
  let voteable = age < 18 ? "Too young" : "Old enough";
  console.log(voteable); // "Old enough"
}

//* Comparing Different Types
//  เมื่อเปรียบเทียบสตริงกับตัวเลข JavaScript จะแปลงสตริงเป็นตัวเลขเมื่อทำการเปรียบเทียบ
//  สตริงว่างแปลงเป็น 0 สตริงที่ไม่ใช่ตัวเลขแปลง NaN เป็นค่า false เสมอ
//TODO:   Case          Value
//?       2 < 12        true
//?       2 < "12"      true
//?       2 < "John"    false
//?       2 > "John"    false
//?       2 == "John"   false
//?       "2" < "12"    false
//?       "2" > "12"    true
//?       "2" == "12"   false
//  เมื่อเปรียบเทียบสองสตริง "2" จะมากกว่า "12" เนื่องจาก (ตามตัวอักษร) 1 น้อยกว่า 2

//* The Nullish Coalescing Operator (??)
//* ?? ส่งคืนอาร์กิวเมนต์แรกหากไม่เป็นโมฆะ ( nullหรือ undefined )
//* มิฉะนั้นจะส่งกลับอาร์กิวเมนต์ที่สอง
{
  let name = null;
  let text = "missing";
  let result = name ?? text; //missing
}

//* The Optional Chaining Operator (?.)
//* ?.ส่งกลับ undefined หากวัตถุเป็น undefined หรือ null(แทนที่จะส่งข้อผิดพลาด)
{
  // Create an object:
  const car = { type: "Fiat", model: "500", color: "white" };
  // Ask for car name:
  document.getElementById("demo").innerHTML = car?.name; //undefined
}