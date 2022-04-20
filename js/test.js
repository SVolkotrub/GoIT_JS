//function getArraysSum(arr1, arr2) {
  let sum = 0;
 // if (arr1.length === 0){
 //   return total;
 // }
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
  for (let i = 0; i < arr1.length; i += 1){
    sum = sum + arr1[i] + arr2[i]; 
    console.log('Ineration: ', i, ' sum: ', sum)
  }
 // return sum;
//}
//console.log(getArraysSum([1, 2, 3], [4, 5, 6]));