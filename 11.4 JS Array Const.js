//* JavaScript Array Const
const cars = ["Saab", "Volvo", "BMW"];

//อาร์เรย์ที่ประกาศด้วยconstไม่สามารถกำหนดใหม่ได้
{
  const cars = ["Saab", "Volvo", "BMW"];
  cars = ["Toyota", "Volvo", "Audi"]; // ERROR
}

//* คุณสามารถเปลี่ยนองค์ประกอบของอาร์เรย์คงที่ได้
{
  // You can create a constant array:
  const cars = ["Saab", "Volvo", "BMW"];

  // You can change an element:
  cars[0] = "Toyota";

  // You can add an element:
  cars.push("Audi");
}

//* สิ่งนี้จะไม่ทำงาน
{
  // const cars;
  // cars = ["Saab", "Volvo", "BMW"];
}

//* ขอบเขตบล็อก Const
{
  const cars = ["Saab", "Volvo", "BMW"];
  // Here cars[0] is "Saab"
  {
    const cars = ["Toyota", "Volvo", "BMW"];
    // Here cars[0] is "Toyota"
  }
  // Here cars[0] is "Saab"
}

//* constไม่อนุญาตให้ประกาศซ้ำหรือกำหนดอาร์เรย์ที่มีอยู่ใหม่ ในขอบเขตเดียวกันหรือในบล็อกเดียวกัน
{
  //   const cars = ["Volvo", "BMW"]; // Allowed
  //   const cars = ["Volvo", "BMW"]; // Not allowed
  //   var cars = ["Volvo", "BMW"]; // Not allowed
  //   cars = ["Volvo", "BMW"]; // Not allowed
  //   {
  //     const cars = ["Volvo", "BMW"]; // Allowed
  //     const cars = ["Volvo", "BMW"]; // Not allowed
  //     var cars = ["Volvo", "BMW"]; // Not allowed
  //     cars = ["Volvo", "BMW"]; // Not allowed
  //   }
}

//* การประกาศอาร์เรย์อีกครั้งด้วยconst, ในขอบเขตอื่นหรือในบล็อกอื่น, ได้รับอนุญาต
{
  const cars = ["Volvo", "BMW"]; // Allowed
  {
    const cars = ["Volvo", "BMW"]; // Allowed
  }
  {
    const cars = ["Volvo", "BMW"]; // Allowed
  }
}