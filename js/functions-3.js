function getLastCharacter(input) {
  const newArray = input.split('');
  if (newArray.length === 0) {
    return 'You input the empty string';
  }
  return newArray[newArray.length-1];
    
}

console.log(getLastCharacter('123'));
console.log(getLastCharacter('asdf'));
console.log(getLastCharacter('asdF'));
console.log(getLastCharacter('asdF '));
console.log(getLastCharacter('!@#$'));
console.log(getLastCharacter(''));

function removeZs(string) {
  
   let result = '';
  for (let letter of string){
    if (letter !== 'z' && letter !== 's' && letter !== 'S' && letter !== 'Z'){
        result += letter;
    }
  }
  return result;
}


console.log(removeZs('Mate academy'));
console.log(removeZs('zzzmatesss'));
console.log(removeZs('ZMzastSe AcaZzzzdemsSy'));
console.log(removeZs('zszszSSZsz'));
console.log(typeof removeZs(''));
console.log(removeZs('    '));
console.log(removeZs(''));
console.log(removeZs('123zz123'));
console.log(removeZs('shSezlZlsoSzz zzSSwSsszsoZszsrld'));
console.log(removeZs('zszszSSZsz'));


function getAverageAge(years) {
  const age = [];
  let sum = 0;

  if (years.length === 0) {
    return sum;
  }
  for (let i = 0; i < years.length; i += 1){
    const tempArrAge = years[i].split('-');
    let tempAge = Number(tempArrAge[1]) - Number(tempArrAge[0]);
    age.push(tempAge);
  }
  for (let i = 0; i < age.length; i += 1){
    sum += age[i];
  }
  return Math.round(sum / age.length);
}

console.log(typeof getAverageAge(['1832-1905']));
console.log(getAverageAge(['1832-1905']));
console.log(getAverageAge(['1900-1950' ,'1700-1740']));
console.log(getAverageAge(['1832-1905', '1876-1956', '1683-1724' ,'1714-1748']));
console.log(getAverageAge(['1700-1730', '1800-1831', '1900-1931']));

console.log(getAverageAge(['1700-1740', '1800-1840', '1900-1941']));
console.log(getAverageAge(['1700-1750', '1800-1851']));
console.log(getAverageAge([]));

function removeLetter(word, letter) {
  let result = '';
  if (word.length === 0) {
    return result;
 }
  for (let value of word) {
    if (value !== letter){
        result += value;
    }
  }
  return result;
}


console.log(typeof removeLetter('AaaaB', 'a'));
console.log(removeLetter('Mate Academy', 'a'));
console.log(removeLetter('Mate Academy', 'b'));
console.log(removeLetter(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Labore et dolore magna aliqua.',
      ' ',
    ));
console.log(removeLetter(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Labore et dolore magna aliqua.',
      'L',
    ));

console.log(removeLetter(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Labore et dolore magna aliqua.',
      '',
    ));
console.log(removeLetter('', 'b'));
console.log(removeLetter('', ''));
