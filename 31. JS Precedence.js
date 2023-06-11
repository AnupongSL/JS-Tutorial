//* ลำดับความสำคัญของตัวดำเนินการ JavaScript
//* ลำดับความสำคัญของตัวดำเนินการอธิบายลำดับการดำเนินการในนิพจน์ทางคณิตศาสตร์
//* การคูณ (*) และการหาร (/) มีความสำคัญสูงกว่าการบวก (+) และการลบ (-)
{
    //การคูณจะทำก่อน
    let x1 = 100 + 50 * 3; // 250

    //เมื่อใช้วงเล็บ การดำเนินการภายในวงเล็บจะถูกคำนวณก่อน
    let x2 = (100 + 50) * 3; // 450

    //การดำเนินการที่มีลำดับความสำคัญเท่ากัน (เช่น * และ / ) จะคำนวณจากซ้ายไปขวา
    let x = 100 / 50 * 3; // 6
}