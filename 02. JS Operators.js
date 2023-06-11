//* Types of JavaScrpit Operators
//  1. Arithmetic Operators
//  2. Assignement Operators
//  3. Comparison Operators
//  4. String Operators
//  5. Logical Operators
//  6. Bitwise Operators
//  7. Ternary Operators
//  8. Type Operators

//* Arithmetic Operators
{
    let a = 3;
    let x = (100 + 50) * a; // x = 450
}
//TODO:     Operator        Description                Example                Result
//?         +               Addition(บวก)              x = 5 + 10             15
//?         -               Subtraction(ลบ)            x = 10 - 5             5
//?         *               Multiplication(คูณ)         x = 10 * 5             50
//?         **              Exponentiation(ยกกำลัง)     x = 10 ** 2            100
//?         /               Division(หาร)               x = 10 / 2             5
//?         %               Modulus(ส่วนที่เหลือของส่วน)    x = 10 % 3             1
//?         ++              Increment                   x = 0, x++             1
//?         --              Decrement                   x = 2, x--             1  


//* Assignement Operators
{
    let x = 10;
    x += 5; // x = 15
}
//TODO:     Operator        Example         Same As
//?         =               x = y           x = y
//?         +=              x += y          x = x + y
//?         -=              x -= y          x = x - y
//?         *=              x *= y          x = x * y
//?         /=              x /= y          x = x / y
//?         %=              x %= y          x = x % y
//?         **=             x **= y         x = x ** y



//* Comparison Operators
//TODO:     Operator        Description
//?         ==              equal to(ค่าเท่ากัน)
//?         ===             equal value and equal type(ค่าและ type เท่ากัน)
//?         !=              not equal(ค่าไม่เท่ากัน)
//?         !==             not equal value or not equal type(ค่าและ type ไม่เท่ากัน)
//?         >               greater than(มากกว่า)
//?         <               less than(น้อยกว่า)
//?         >=              greater than or equal to(มากกว่าหรือเท่ากับ)
//?         <=              less than or equal to(น้อยกว่าหรือเท่ากับ)
//?         ?               tenary operator


//* String Operators
// JavaScript String Comparison
{
    let text1 = 'A'
    let text2 = 'B'
    console.log(text1 > text2); //false
}

{
    let text1 = '20'
    let text2 = '5'
    console.log(text1 > text2); //false สตริงจะเทียบตามตัวอักษร
}

// JavaScript String Addition
{
    let text1 = "Anupong"
    let text2 = "Sutlek"
    console.log(text1 + " " + text2); // Anupong Sutlek
}

{
    let text1 = "Anupong"
    text1 += "Sutlek"
    console.log(text1); // Anupong Sutlek
}

// Adding String and Numbers
{
    let x = 5 + 5;          // x = 10
    let y = "5" + 5;        // y = 55
    let z = "Hello" + 5;    //z = Hello5
}

//* Logical Operators
//TODO:     Operator        Description
//?         &&              logical and
//?         ||              logical or
//?         !               logical not


//* Bitwise Operators
//TODO:  AND           OR            NOT         XOR           NAND             NXOR
//       0 & 0 = 0     0 | 0 = 0     ~ 0 = 1     0 ^ 0 = 0     ~(0 & 0) = 1     ~(0 | 0) = 1
//       0 & 1 = 0     0 | 1 = 1     ~ 1 = 0     0 ^ 1 = 1     ~(0 & 1) = 1     ~(0 | 1) = 0
//       1 & 0 = 0     1 | 0 = 1                 1 ^ 0 = 1     ~(1 & 0) = 1     ~(1 | 0) = 0
//       1 & 1 = 1     1 | 1 = 1                 1 ^ 1 = 0     ~(1 & 1) = 0     ~(1 | 1) = 0

//TODO:  Operator  Description           Example    Same As            Result  Decomal
//?      &         AND                   5 & 1      0101 & 0001        0001    1
//?      |         OR                    5 | 1      0101 & 0001        0101    5
//?      ~         NOT                   ~5         ~0101              1010    10
//?      ^         XOR                   5 ^ 1      0101 ^ 0001        0100    4
//?      <<        left shift            3 << 1     0011 << 2          1100    12 (หรือนำ 3 * 2 * 2)
//?      >>        right shift           5 >> 1     0101 >> 1          0010    2
//?      >>>       unsigned right shift  5 >>> 1    0101 >>> 1         0010    2

//* Type Operators
//TODO:     Operator        Description
//?         typeof          Returns the type of a variable(return type ของตัวแปร)
//?         instanceof      Returns true if an object is an instance of an object type (return true หาก object เป็น instance ของ object type)