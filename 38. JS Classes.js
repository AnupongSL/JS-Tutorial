//* JavaScript Classes
//  JavaScript Class Syntax
//  คลาส JavaScript ไม่ใช่วัตถุ เป็นเทมเพลตสำหรับวัตถุ JavaScript
{
  class Car {
    // contructor = method
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
}

//* Using a Class การใช้คลาส
//  เมื่อคุณมี class คุณสามารถ class เพื่อสร้าง object
{
  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }

  const myCar1 = new Car("Ford", 2014);
  const myCar2 = new Car("Audi", 2019);
}

//* Class Methods
/*
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
*/

//* สร้างเมธอดคลาสชื่อ "age" ซึ่งจะคืนค่า Car age
{
    class Car {
        constructor(name, year) {
          this.name = name;
          this.year = year;
        }
        age() {
          const date = new Date();
          return date.getFullYear() - this.year;
        }
      }
      
      const myCar = new Car("Ford", 2014);
      myCar.age() //2014
}