//ตัวแปรที่ประกาศภายในฟังก์ชัน JavaScript จะกลายเป็น LOCAL ของฟังก์ชัน
//ตัวแปรโลคัลสามารถเข้าถึงได้จากภายในฟังก์ชันเท่านั้น

function toCelsius1(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let value1 = toCelsius1(77); // 25

function toCelsius2(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let value2 = toCelsius2(); // NaN

function toCelsius3(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let value3 = toCelsius3; // function toCelsius(f) { return (5/9) * (f-32); }