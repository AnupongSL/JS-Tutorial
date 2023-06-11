//* JavaScript Arrow Function
//  Arrow functions ช่วยให้เราเขียนไวยากรณ์ของฟังก์ชันที่สั้นลงได้
//  ก่อนใช้ arrow
{
    hello = function() {
        return "Hello World!";
      }
}

//  หลังใช้ arrow
{
    hello = () => {
        return "Hello World!";
    }
}

//  Arrow Functions Return Value by Default
//  วิธีนี้ใช้ได้เฉพาะเมื่อฟังก์ชันมีคำสั่งเดียวเท่านั้น
{
    hello = () => "Hello World!"; 
}

//* Arrow Function With Parameters
{
    hello1 = (val) => "Hello " + val;
    //ในความเป็นจริง หากคุณมีพารามิเตอร์เพียงตัวเดียว คุณสามารถข้ามวงเล็บได้เช่นกัน
    hello2 = val => "Hello " + val;
}

//* What About this?
//  With a regular function this represents the object that calls the function
{
// Regular Function:
hello = function() {
    document.getElementById("demo").innerHTML += this;
  }
  
  // The window object calls the function:
  window.addEventListener("load", hello);
  
  // A button object calls the function:
  document.getElementById("btn").addEventListener("click", hello);
}

//  With an arrow function this represents the owner of the function
{
// Arrow Function:
hello = () => {
    document.getElementById("demo").innerHTML += this;
  }
  
  // The window object calls the function:
  window.addEventListener("load", hello);
  
  // A button object calls the function:
  document.getElementById("btn").addEventListener("click", hello);
}