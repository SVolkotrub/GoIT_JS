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
