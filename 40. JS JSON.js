//* JavaScript JSON
//  JSON เป็นรูปแบบสำหรับจัดเก็บและขนส่งข้อมูล
//  JSON มักใช้เมื่อข้อมูลถูกส่งจากเซิร์ฟเวอร์ไปยังหน้าเว็บ
//  JSON ย่อมาจาก Java Script Object Notation

//* JSON Example
// {
//     "employees":[
//       {"firstName":"John", "lastName":"Doe"},
//       {"firstName":"Anna", "lastName":"Smith"},
//       {"firstName":"Peter", "lastName":"Jones"}
//     ]
// }

//* รูปแบบ JSON ประเมินเป็นวัตถุ JavaScript
//  รูปแบบ JSON นั้นเหมือนกับรหัสสำหรับการสร้างวัตถุ JavaScript

//* กฎไวยากรณ์ JSON
//  ข้อมูลอยู่ในคู่ name / value
//  ข้อมูลจะถูกคั่นด้วยเครื่องหมายจุลภาค
//  วงเล็บปีกกาคือ objects
//  วงเล็บเหลี่ยมคือ array

//* ข้อมูล JSON - ชื่อและค่า
//  "firstName":"John"
//  ชื่อ JSON ต้องใช้เครื่องหมายอัญประกาศคู่

//* วัตถุ JSON
//  {"firstName":"John", "lastName":"Doe"}

//* อาร์เรย์ JSON
// "employees":[
//   {"firstName":"John", "lastName":"Doe"},
//   {"firstName":"Anna", "lastName":"Smith"},
//   {"firstName":"Peter", "lastName":"Jones"}
// ]

//* การแปลงข้อความ JSON เป็นวัตถุ JavaScript
{
    let text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

    //* JSON.parse()เพื่อแปลงสตริงเป็นวัตถุ JavaScript
    const obj = JSON.parse(text);
}