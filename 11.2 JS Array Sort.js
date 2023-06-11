//* JavaScript Sorting Arrays
//* Sorting an Array เรียงลำดับ array ตามตัวอักษร
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const fruits1 = fruits.sort();
  console.log(fruits1); // Apple,Banana,Mango,Orange
}

//* Reversing an Array
//  ย้อนกลับองค์ประกอบในอาร์เรย์
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.sort(); //Apple,Banana,Mango,Orange
  fruits.reverse(); //Orange,Mango,Banana,Apple
}

//* Numeric Sort การเรียงลำดับตัวเลข
//  หากเรียงตัวเลขเป็นสตริง "25" จะมากกว่า "100" เนื่องจาก "2" จะมากกว่า "1"
//* The Compare Function
{
  const points = [40, 100, 1, 5, 25, 10];
  let minToMax = points.sort(function (a, b) {
    return a - b;
  });
  let maxToMin = points.sort(function (a, b) {
    return b - a;
  });
  console.log(minToMax); //1,5,10,25,40,100
  console.log(maxToMin); //100,40,25,10,5,1
}
//* The Compare Function
// ฟังก์ชันเปรียบเทียบส่งคืนค่าลบ ศูนย์ หรือค่าบวก ขึ้นอยู่กับอาร์กิวเมนต์
//* function(a, b){return a - b}
//  เมื่อ sort() ฟังก์ชันเปรียบเทียบค่าสองค่า
//  หากผลลัพธ์เป็นลบaจะเรียงลำดับก่อนbหลัง
//  หากผลลัพธ์เป็นบวกbจะเรียงลำดับก่อนaหลัง
//  ถ้าผลลัพธ์เป็น 0 จะไม่มีการเปลี่ยนแปลงลำดับการจัดเรียงของค่าทั้งสอง

//* การเรียงลำดับอาร์เรย์ในลำดับสุ่ม
//  ตัวอย่างนี้ array.sort() ไม่ถูกต้อง มันจะชอบตัวเลขบางตัวมากกว่าตัวอื่นๆ
{
  const points = [40, 100, 1, 5, 25, 10];
  points.sort(function () {
    return 0.5 - Math.random();
  });
}
//  วิธีที่ถูกต้องและได้รับความนิยมมากที่สุดเรียกว่า Fisher Yates shuffle และถูกนำมาใช้ในวิทยาการข้อมูลตั้งแต่ปี 1938!
{
  const points = [40, 100, 1, 5, 25, 10];

  for (let i = points.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
  }
}


//* ค้นหาค่าอาร์เรย์สูงสุด (หรือต่ำสุด)
//  ไม่มีฟังก์ชันในตัวสำหรับค้นหาค่าสูงสุดหรือต่ำสุดในอาร์เรย์
//  เรียงลำดับจากน้อยไปมาก
{
    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a - b});
    // now points[0] contains the lowest value
    // and points[points.length-1] contains the highest value
}

//  เรียงลำดับจากมากไปน้อย
{
    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return b - a});
    // now points[0] contains the highest value
    // and points[points.length-1] contains the lowest value
}
//! การจัดเรียงอาร์เรย์ทั้งหมดเป็นวิธีที่ไม่มีประสิทธิภาพมาก หากคุณต้องการค้นหาเฉพาะค่าสูงสุด (หรือต่ำสุด)


//* Using Math.max() on an Array
//  คุณสามารถใช้ Math.max.apply เพื่อค้นหาจำนวนสูงสุดในอาร์เรย์:
{
    const points = [40, 100, 1, 5, 25, 10];
    myArrayMax(points); // 100

    function myArrayMax(arr) {
        return Math.max.apply(null, arr);
    }
}
//* Math.max.apply(null, [1, 2, 3])เทียบเท่ากับMath.max(1, 2, 3)


//* Using Math.min() on an Array
//  คุณสามารถใช้ Math.min.apply เพื่อค้นหาจำนวนต่ำสุดในอาร์เรย์:
{
    const points = [40, 100, 1, 5, 25, 10];
    myArrayMin(points); // 1

    function myArrayMin(arr) {
        return Math.min.apply(null, arr);
    }
}
//* Math.min.apply(null, [1, 2, 3])เทียบเท่ากับMath.min(1, 2, 3)


//* My Min / Max JavaScript Methods
//  Example (Find Max)
{
    const points = [40, 100, 1, 5, 25, 10];
    myArrayMax(points); // 100

    function myArrayMax(arr) {
        let len = arr.length;
        let max = -Infinity;
        while (len--) {
          if (arr[len] > max) {
            max = arr[len];
          }
        }
        return max;
      }
}

//  Example (Find Min)
{
    const points = [40, 100, 1, 5, 25, 10];
    myArrayMin(points); // 1

    function myArrayMin(arr) {
        let len = arr.length;
        let min = Infinity;
        while (len--) {
          if (arr[len] < min) {
            min = arr[len];
          }
        }
        return min;
      }
}


//* Sorting Object Arrays การเรียงลำดับอาร์เรย์ของวัตถุ
//  แม้ว่าออบเจกต์จะมีคุณสมบัติประเภทข้อมูลต่างกัน ก็สามารถใช้วิธีนี้ในการจัดเรียงอาร์เรย์ได้
{
    const cars = [
        {type:"Volvo", year:2016},
        {type:"Saab", year:2001},
        {type:"BMW", year:2010}
      ];
    
    let car1 = cars.sort(function(a, b){return a.year - b.year});
    console.log(car1);
    // Saab 2001
    // BMW 2010
    // Volvo 2016
}

//* การเปรียบเทียบคุณสมบัติสตริง
{
    cars.sort(function(a, b){
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
      });
}