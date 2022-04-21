/*Давай навчимо наших роботів сортувати коробки на складі.
 Всі коробки мають номери, а роботи вчаться сортувати їх в порядку зростання.
Але сортування — справа нелегка, іноді трапляються помилки. Тому нам поки 
доведеться перевіряти, чи правильно робот відсортував коробки.
Напиши функцію isSorted, яка отримує масив чисел boxNumbers і повертає true,
 якщо всі числа в порядку зростання, або false, якщо це не так. Числа можуть 
 повторюватись.*/
function isSorted(boxNumbers) {
 if (boxNumbers.length === 0){
   return true;
 }
  for (let i = 1; i < boxNumbers.length; i +=1){
    if(boxNumbers[i-1] > boxNumbers[i]){
      return false;
    } else { continue;}

  }
  return true;
}

/*Наш робот вміє перетворювати команди руху на правильний сигнал і рухатися 
відповідно до нього:
'forward' означає y + 1
'back' означає y - 1
'right' означає x + 1
'left' означає x - 1
Було б чудово, якби робот знав, де він зараз знаходится навіть без GPS.
Напиши функцію getLocation, яка приймає масив початкових координат coordinates 
(у вигляді [x, y]) та массив історії команд commands.
Функція повинна повертати масив кінцевих координат робота в тому ж 
форматі ([x, y]) після рухів відповідно до команд з commands.*/
function getLocation(coordinates, commands) {
let x = coordinates[0];
let y = coordinates[1]; 
 if (commands === 0){
   return coordinates;
 }
 for (let i = 0; i < commands.length; i +=1){
   if (commands[i] === 'forward'){
     coordinates[1] += 1;
     continue;
   }
   if (commands[i] === 'back'){
     coordinates[1] -= 1;
     continue;
   }
    if (commands[i] === 'right'){
     coordinates[0] += 1;
     continue;
   }
   if (commands[i] === 'left'){
     coordinates[0] -= 1;
     continue;
   }
 }
 return coordinates;
}
/*Ну що, коли всі процеси налаштовано, потрібно ставити перед собою 
правильні цілі. Наші роботи найкращі на ринку, тому потрібно нарощувати
 оберти і збільшувати обсяги виробництва.
Напиши функцію getPlan, яка поверне масив з цілями на задану кількість
 місяців numberOfMonths. Зараз ми виготовляємо startProduction роботів
  на місяць і хочемо, щоб щомісяця це число зростало на заданий відсоток
   percent.
Якщо кількість роботів буде не цілою, округли її вниз 
(Math.floor(value)). Ціль кожного наступного місяця розраховуй відносно
 попереднього.*/
function getPlan(startProduction, numberOfMonths, percent) {
  const goals = [];
  let current = startProduction;
for (let i = 0; i < numberOfMonths; i +=1) {
  current = Math.floor(current + current * (percent / 100));
  goals.push(current);
}
return goals;
}
/*Перша партія роботів готова, тепер їх треба перевірити. Всі роботи
 унікальні, тому в кожного своя швидкість руху. Треба визначити 
 найнижчу, найвищу та середню швидкість наших роботів.
Наш сервер приймає масив швидкостей роботів testResults, пропускає 
його через функцію getSpeedStatistic і повертає статистику у вигляді 
масиву, де
перший елемент - це мінімальна швидкість
другий - максимальна
третій - середнє значення всіх швидкостей з testResults, округлене 
вниз (використай Math.floor(result))*/

function getSpeedStatistic(testResults) {
  const statistic = [0, 0, 0];
  if (testResults.length === 0){
   return statistic;
  }
  let min = testResults[0];
  let max = testResults[0];
  let sum = testResults[0];
for (let i = 1; i < testResults.length; i += 1){
  if (min > testResults[i]){
    min = testResults[i];
  }
  if (max < testResults[i]){
    max = testResults[i];
  }
  sum += testResults[i];
}
statistic[0] = min;
statistic[1] = max;
statistic[2] = Math.floor(sum / testResults.length);
return statistic;

}
 /*Роботи протестовані. Повільні роботи відправлені на апгрейд.
  Mate Post хоче купити у нас десяток роботів для доставки вантажів 
  по місту. Для цього їм потрібні роботи, які будуть переносити за 
  день найбільшу сумарну вагу.

Давай напишемо функцію compareRobots, яка приймає 2 масиви. Перший 
масив firstRobotResults містить вагу кожного вантажу, який перевіз за
 добу перший робот, другий secondRobotResults - відповідно вага
  вантажів другого робота.

Перевір, хто з роботів перевіз більшу вагу за день, та поверни рядок 
з рекомендацією, кого з роботів варто купити*/

function compareRobots(firstRobotResults, secondRobotResults) {
  let sumFirstRobot = 0;
  let sumSecondRobot = 0;
  for (let i = 0; i < firstRobotResults.length; i += 1){
    sumFirstRobot += firstRobotResults[i];
  }
   for (let i = 0; i < secondRobotResults.length; i += 1){
    sumSecondRobot += secondRobotResults[i];
  }
  if (sumFirstRobot > sumSecondRobot){
    return 'First robot for sale!';
  }
   if (sumFirstRobot < sumSecondRobot){
    return 'Second robot for sale!';
  }
  if (sumFirstRobot === sumSecondRobot){
    return 'Both robots for sale!';
  }
}
/*Напиши функцію splitString, яка приймає рядок і повертає
 масив рядків з двох символів.

Якщо рядок містить непарну кількість символів, тоді другий символ
 потрібно замінити на підкреслення (_).*/
function splitString(str) {
  const result = [];
  const tempStr = str.split('');
  if (tempStr.length % 2 !== 0){
    tempStr.push('_');
  } 
  for (let i = 0; i < tempStr.length; i += 2) {
    result.push(tempStr[i] + tempStr[i+1]); 
  }
  return result;
}
/*Реалізуй функцію getArraysSum, яка приймає два масива чисел однакової довжини, та повертає суму усіх елементів цих масивів.*/
function getArraysSum(arr1, arr2) {
  let sum = 0;
  
  for (let i = 0; i < arr1.length; i += 1){
    sum = sum + arr1[i] + arr2[i]; 
  }
  return sum;
}
/*Реалізуй функцію combineArrays, яка приймає 2 масиви чисел (first та second) та повертає масив чисел де N[i] це сума чисел first[i] та second[i].

Примітки:

Вхідні масиви завжди однакового розміру.
Приклади:

combineArrays([1, 2, 5], [3, 6, 1]) === [4, 8, 6]
combineArrays([1], [6]) === [7]
combineArrays([], []) === []*/
function combineArrays(first, second) {
  const result = [];
  for (let i =0; i < first.length; i += 1){
    result.push(first[i] + second[i]);

  }
  return result;
}

/*Створи функцію scrollingText, яка

приймає рядок word;
послідовно переставляє всі символи у рядку з нульового індексу 
до останнього;
повертає масив з усіма отриманими комбінаціями в верхньому регістрі.*/
function scrollingText(word) {
  const resultArray = [];
  resultArray.push(word.toUpperCase());
  for (let i = 1; i < word.length; i += 1){
    let strBefore = word.slice(0,i);
    let strAfter = word.slice(i);
    let result = strAfter + strBefore;
    resultArray.push(result.toUpperCase());
  }
  return resultArray;
}

/*Створи функцію isSpecialNumber, яка приймає додатне число
 n і визначає, чи є воно особливим.
Число називається особливим, якщо воно включає в себе лише цифри
 0, 1, 2, 3, 4 або 5.
Функція повинна повертати рядок 'Special!!', якщо число особливе, 
та 'NOT!!', якщо воно таким не є.

Примітка: одноцифрові числа в інтервалі [0:5] вважаються особливими
 числами.*/
function isSpecialNumber(n) {
  let resultStr = '';
  let newStr = n.toString();
  const arrayStr = newStr.split('');
  let check = 0;
  for (let i = 0; i < arrayStr.length; i += 1){

  if (arrayStr[i] >= 0 && arrayStr[i] <= 5){
    check += 1;
  } 
  }
  if (check === arrayStr.length){
    resultStr = 'Special!!';
  } else {
    resultStr = 'NOT!!';
  }
  return resultStr;
}

/*Давай перевіримо, чи всі наші числа охайні і всі цифри стоять у
 правильному порядку - у неспадаючій послідовності.

Створи функцію isTidy, яка приймає позитивне число number і повертає 
true, якщо його цифри у неспадаючій послідовності, або false, якщо це 
не так.*/

function isTidy(number) {
  let newStr = number.toString();
  const newArray = newStr.split('');
  for (let i = 1; i < newArray.length; i += 1){
    if (Number(newArray[i-1]) <= Number(newArray[i])){
      continue;
    } else {
      return false;
    }
  }
  return true;

}

/*Реалізуй функцію isJumping, яка приймає число number та повертає 
рядок JUMPING, якщо кожна цифра в числі відрізняється від сусідньої
 на 1. Якщо умова не виконується - рядок NOT JUMPING.
Примітки:
Вхідне число завжди додатнє
Різниця між 9 та 0 не розцінюється як 1
Всі числа, які складаються із однієї цифри - JUMPING*/
function isJumping(number) {
  let newStr = number.toString();
  const newArray = newStr.split('');
  if (newArray.length === 1) {
  return 'JUMPING';
  }
  for(let t = 1; t < newArray.length; t += 1) {
  let a1 = Number(newArray[t-1])-Number(newArray[t]);
  let a2 = Number(newArray[t])-Number(newArray[t-1]);
  if (a1 ===1 || a2 === 1 ) {
    continue;
  } else {
    return 'NOT JUMPING';
  }
  }
 return 'JUMPING';
}
/*Створи функцію checkNumber, яка приймає ціле число number і перевіряє його на три різні властивості:

Це позитивне число?
Це парне число?
Це число кратне 10?
Функція повинна повернути масив з результатами перевірок у вигляді булевих значень.*/
function checkNumber(number) {
  let isPositive;
  let isEvenNumber;
  let isDividedByTen;
  const resultArray =[];
  if (number > 0){
    isPositive = true;
  } else {
    isPositive = false;
  }
  if (number % 2 === 0){
    isEvenNumber = true;
  } else {
    isEvenNumber = false;
  }
  if (number % 10 === 0){
    isDividedByTen = true;
  } else {
    isDividedByTen = false;
  }
  resultArray.push(isPositive);
  resultArray.push(isEvenNumber);
  resultArray.push(isDividedByTen);
  return resultArray;
}


