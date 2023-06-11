//* JavaScript Template Literals
//  ใช้เครื่องหมายย้อนกลับ (``) แทนเครื่องหมายคำพูด ("") เพื่อกำหนดสตริง
let text1 = `Hello World!`; //Hello World!
let text2 = `He's often called "AnupongSL"`; //He's often called "AnupongSL"

//* Template literals
//  เป็นวิธีที่ง่ายในการสอดแทรกตัวแปรและนิพจน์ลงในสตริง
//* ${...}

//* Variable Substitutions
let firstName = "John";
let lastName = "Doe";
let text = `Welcome ${firstName}, ${lastName}!`; // Welcome John, Doe!

//* Expression Substitution
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`; //Total: 12.50

//* HTML Templates
{
  let header = "Templates Literals";
  let tags = ["template literals", "javascript", "es6"];

  let html = `<h2>${header}</h2><ul>`;
  for (const x of tags) {
    html += `<li>${x}</li>`;
  }
  html += `</ul>`;
}