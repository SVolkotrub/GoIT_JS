function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
 for (let i = 0; i <= max-min; i +=1){
   numbers = numbers.push(min + i);
 }
  // Change code above this line
  return numbers;
}

console.log(createArrayOfNumbers(1, 3));