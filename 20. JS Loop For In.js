//* JavaScript For In
//* Syntax
{
  for (key in object) {
    // code block to be executed
  }
}
{
  const numbers = [45, 4, 9, 16, 25];
  let txt = "";
  for (let x in numbers) {
    txt += numbers[x];
  }
}

//* Array.forEach()
{
  const numbers = [45, 4, 9, 16, 25];

  let txt = "";
  numbers.forEach(myFunction);

  function myFunction(value) {
    txt += value;
  }
}