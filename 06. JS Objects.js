const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

name = person.fullName(); // John Doe
name1 = person.fullName; // function() { return this.firstName + " " + this.lastName; }
console.log(person.firstName); // John
console.log(person["lastName"]); // Doe

//! Do Not Declare Strings, Numbers, and Booleans as Objects!
x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object

//* String, Number, และBoolean ทำให้โค้ดของคุณซับซ้อนและทำให้ความเร็วในการดำเนินการช้าลง