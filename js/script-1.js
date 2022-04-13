
// Составить фразу "A has B bots in stock", где A, B - переменные

const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const message = `${companyName} has ${repairBots + defenceBots} bots in stock `;
console.log("Task 1");
console.log(message); 
 
// Напиши скрипт, который просит пользователя ввести число и степень, возводит в степень и выводит результат в консоль
console.log("Task 2");
let base = prompt('Введите число');
base = Number(base);
let pow = prompt('Введите степень');
pow = Number(pow);
const result = Math.pow(base, pow);
console.log('Результат возведения в степень: ', result);

// Выведи случайное целое число большее 10 и меньшее 30
console.log("Task 3");
const max = 30;
const min = 10;
const randomNumber = Math.round(Math.random() * (max - min) + min);
console.log(randomNumber); 

// Запросить у пользователя название бренда и вывести на экран бренд в формате : первая буква заглавная, остальные - строчные
console.log("Task 4");
let brand = prompt('Введите название бренда');
brand = brand[0].toUpperCase() + brand.slice(1).toLowerCase();
console.log(brand);

// Наипиши скрипт, который проверяет вхождение числа 1) в отрезок (х1,х2), 2) до х1 или после х2
//1)
console.log("Task 5");
const x1 = 12;
const x2 = 45;
let numberCheck = prompt('Введите число для проверки');
numberCheck = Number(numberCheck); 
console.log(`Число ${numberCheck} попадает в отрезок от ${x1} до ${x2}? Ответ: `, numberCheck > x1 && numberCheck < x2);
console.log(`Число ${numberCheck} или меньше ${x1}, или больше ${x2}? Ответ: `, numberCheck < x1 ||  numberCheck > x2);
  
/* Напиши скрипт который проверяет возможность открыть чат с пользователем. Для этого пользователь должен быть:
- другом,
- онлайн,
- без режима не беспокоить */
console.log("Task 6");
const isFriend = true;
const isOnline = true;
const isDoNotDisturb = false;
const openChat = isFriend && isOnline && !isDoNotDisturb;
console.log('Can you open chat?', openChat);

/* Напиши скрипт который проверяет подписки (есть три типа подписки 'free', 'pro', 'vip') и получить дпступ к коннтенту могут только 
пользователи с 'pro'и 'vip' */
console.log("Task 7");
const subscription = 'pro';
const canAccess = subscription === 'pro' || subscription === 'vip';
console.log('Есть доступ к контенту?', canAccess);
