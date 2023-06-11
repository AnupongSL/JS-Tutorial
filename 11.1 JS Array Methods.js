//* JavaScript Array Methods
//* 1. Array length
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let size = fruits.length; // 4
}

//* 2. Array toString()
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.toString(); // Banana,Orange,Apple,Mango
}

//* 3. Array pop()
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.pop(); // Mango
    console.log(fruits); // Banana,Orange,Apple
}

//* 4. Array push()
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("Kiwi"); // 5
    console.log(fruits); // Banana,Orange,Apple,Mango,Kiwi
}

//* 5. Array shift() //ลบตัวแรก
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.shift(); // Banana
    console.log(fruits); // Orange,Apple,Mango,Kiwi
}
//* 6. Array unshift() // เพิ่มตัวแรก
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.unshift("Lemon"); // 5
    console.log(fruits); // Lemon,Banana,Orange,Apple,Mango
}

//* 7. Array join()
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.join(" * "); // Banana * Orange * Apple * Mango
}

//* 8. Array delete()
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    delete fruits[0];
    console.log(fruits); // undefined,Orange,Apple,Mango
}

//* 9. Array concat()
{
    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];
    const arr3 = ["Robin", "Morgan"];
    const myChildren = myGirls.concat(myBoys);
    const myChildren1 = myGirls.concat(myBoys, arr3);
    const myChildren2 = myGirls.concat("Peter");
    console.log(myChildren); //Cecilie,Lone,Emil,Tobias,Linus 
    console.log(myChildren1); //Cecilie,Lone,Emil,Tobias,Linus,Robin,Morgan
    console.log(myChildren2); //Cecolie,Lone,Peter
}

//* 10. Array flat()
{
    const myArr = [[1,2],[3,4],[5,6]];
    const newArr = myArr.flat();
    console.log(newArr); //1,2,3,4,5,6
}

//* 11. Array splice()
{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const a = fruits.splice(2, 0, "Lemon", "Kiwi");
    console.log(a); //Banana,Orange,Lemon,Kiwi,Apple,Mango
    const b = fruits.splice(2, 2, "Lemon", "Kiwi"); //Apple,Mango
    console.log(b); //Banana,Orange,Lemon,Kiwi
    const c = fruits.splice(0, 1);
    console.log(c); //Orange,Apple,Mango
}

//* 12. Array slice()
{
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(1); //Orange,Lemon,Apple,Mango
    const citrus1 = fruits.slice(3); //Apple,Mango
    const citrus2 = fruits.slice(1, 3); //Orange,Lemon
    const citrus3 = fruits.slice(2); //Lemon,Apple,Mango
}