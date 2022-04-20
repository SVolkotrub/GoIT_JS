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
