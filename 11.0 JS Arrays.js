//* JavaScript Arrays
//  การประกาศตัวแปร array
const cars1 = ["Saab", "Volvo", "BMW"]; //วิธีที่ 1
const cars2 = new Array("Saab", "Volvo", "BMW"); //วิธีที่ 2

//* การเข้าถึง Arrays
//  ดัชนีอาร์เรย์เริ่มต้นด้วย 0
{
    const cars = ["Saab", "Volvo", "BMW"];
    console.log(cars[0]); //Saab
    console.log(cars[1]); //Volve
    console.log(cars[2]); //BMW
    console.log(cars.length - 1); //BMW
    cars[0] = "Opel";
    cars[4] = "Porche"
    console.log(cars[3]); //undefined 
    console.log(cars); //Opel,Volvo,BMW,undefined,Porche
    console.log(typeof(cars)); //object
    //* toString() แปลงอาร์เรย์เป็นสตริง
    cars.toString()
    console.log(cars); //Opel,Volvo,BMW
    
    // ตรวจสอบว่าเป็นสตริงไหม
    console.log(Array.isArray(cars)); //true
    console.log(cars instanceof Array); //true

    //คุณสามารถมีวัตถุในอาร์เรย์ คุณสามารถมีฟังก์ชันใน Array คุณสามารถมีอาร์เรย์ในอาร์เรย์
    const myArray = [];
    myArray[0] = Date.now;
    myArray[1] = myFunction;
    myArray[2] = cars;
}

//* เมื่อใดควรใช้อาร์เรย์ เมื่อใดควรใช้วัตถุ
//  คุณควรใช้วัตถุเมื่อต้องการให้ชื่อองค์ประกอบเป็นสตริง (ข้อความ )
//  คุณควรใช้อาร์เรย์ เมื่อต้องการให้ ชื่อองค์ประกอบเป็นตัวเลข