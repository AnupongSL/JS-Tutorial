//* Assignement Operators
//TODO:     Operator        Example         Same As
//?         =               x = y           x = y
//?         +=              x += y          x = x + y
//?         -=              x -= y          x = x - y
//?         *=              x *= y          x = x * y
//?         /=              x /= y          x = x / y
//?         %=              x %= y          x = x % y
//?         **=             x **= y         x = x ** y

//* Shift Assignment Operators
//TODO:     Operator        Example         Same As
//?         <<=             x <<= y         x = x << y
//?         >>=             x >>= y         x = x >> y
//?         >>>=            x >>>= y        x = x >>> y
//Example
{
    let x = -1; // -00000001
    x <<= 5;    // -00100000 = -32 หรือ (-1 * 2 * 2 * 2 * 2 * 2) = -32
}

//* Bitwise Assignment Operators
//TODO:     Operator        Example         Same As
//?         &=              x &= y         x = x & y
//?         ^=              x ^= y         x = x ^ y
//?         |=              x |= y         x = x | y
//Example
{
    let x = 3; //0011
    x &= 1; //0011 & 0001 = 0001 = 1
}


//* Logical Assignment Operators
//TODO:     Operator        Example         Same As
//?         &&=             x &&= y         x = x && (x=y)
//?         ||=             x ||= y         x = x || (x=y)
//?         ??=             x ??= y         x = x ?? (x=y)
//Example &&
{
    let x = 5; 
    x &&= y; // result = y
    let a = null;
    a &&= y; // result = null
    let b = undefined;
    b &&= y; // result = undefined
    let c = 0;
    c &&= y; // result = 0
    let d = "";
    d &&= y; // result = 
}

//Example ||
{
    let x = 5; 
    x ||= y; // result = 5
    let a = null;
    a ||= y; // result = y
    let b = undefined;
    b ||= y; // result = y
    let c = 0;
    c ||= y; // result = y
    let d = "";
    d ||= y; // result = y
}

//Example ??
{
    let x = 5; 
    x ??= y; // result = 5
    let a = null;
    a ??= y; // result = y
    let b = undefined;
    b ??= y; // result = y
    let c = 0;
    c ??= y; // result = 0
    let d = "";
    d ??= y; // result = 
}