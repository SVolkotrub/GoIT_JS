/* Напиши скрипт обработки покупки в магазине
- баланс хранится в переменной balance
сумма покупки хранится в переменной payment

Перед проверкой вывести сообщение:
"Общая стоимость заказа.. Проверяем количество доступных средств на счету"

если сумма покупки не превышае баланс :
- вычесть из баланса сумму покупки
- вывести сообщение "на счету осталось..."
если сумма покупки превышает баланс:
- вывести сообщение: "на счету недостаточно средств для проведения операции"
в конце вывести сообщение "операция завершена" */

let balance = 1000;
const payment = 2000;
console.log(`Общая стоимость заказа ${payment}. Проверяем количество доступных средств на счету`);
if (payment <= balance) {
    balance -= payment;
    console.log('На Вашем счету осталось ', balance);
} else { 
    console.log('На счету недостаточно средств для проведения операции');
}
console.log('Операция завершена');

/*Посчитать скидку в зависимости от суммы заказа*/
const totalSpent = 2000;
let currentPayment = 1200;
let discount = 0;
if (totalSpent >= 100 && totalSpent < 1000) {
    console.log('Бронзовый партнер, Ваша скидка 2%');
    discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) { 
    console.log('Серебряный партнер, Ваша скидка 5%');
    discount = 0.05;
} else if (totalSpent >= 5000) { 
    console.log('Серебряный партнер, Ваша скидка 10%');
    discount = 0.1;
} else {
    console.log('К сожалению, у Вас еще нет партнерской скидки, Ваша скидка 0%');
    discount = 0;
}
console.log(`Ваш заказ на сумму ${currentPayment} со скидкой ${discount * 100} %`);
currentPayment -= currentPayment * discount;
console.log('К оплате: ', currentPayment);


/*Напиши скрипт выбора опци доставки товара. опция: 1 - самовывоз, 2 - курьер,  3 - почта
В переменную message  записать сообщение в зависимости от опции:
"Вы сможете забрать товар завтра с 12:00 в ашем офисе"
"Курьер доставит заказ завтра с 9:00 до 13:00"
"Посылка будет отправлена сегодня"
"Вам перезвонит менеджер"
*/
const option = 2;
let message;
switch (option) {
    case 1:
        message = 'Вы сможете забрать товар завтра с 12:00 в ашем офисе';
        break;
    case 2:
        message = 'Курьер доставит заказ завтра с 9:00 до 13:00';
        break;
    case 3:
        message = 'Посылка будет отправлена сегодня';
        break;
    default:
      message = 'Вам перезвонит менеджер';  
}
console.log(message);
 
/* Напиши скрипт который подсчитывает общую сумму зарплат работников (количество их хранится в employees).
Зарплата каждого работника это случайное число от 500 до 5000
Запиши сумму в переменную totalSalary и выведи в консоль */
const employees = 10;
const minSalary = 500;
const maxSalary = 5000;
let totalSalary = 0;
let salary = 0;
for (let i = employees; i > 0; i -= 1) { 
    salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
    console.log(`Зарплата работника ${i} составляет ${salary}`);
    totalSalary += salary;
}
console.log('Общая сумма зарплат ', totalSalary);

/* Напиши скрипт который подсчитывает сумму всех четных чисел, которые входят в диапазон от min до max.*/
const min = 1;
const max = 13;
let totalSumEven = 0;
for (let i = min; i <= max; i += 1) { 
    if (i % 2 === 0) {
        totalSumEven += i;
        console.log(`Четное число ${i}, сумма ${totalSumEven}`);
    }
}
console.log(`Сумма четных чисел в диапазоне от ${min} до ${max} равна ${totalSumEven}`);
//Вариант 2:
let totalSumEven2 = 0;
for (let i = min; i <= max; i += 1) { 
    if (i % 2 !== 0) {
        console.log('Нечетное число: ', i);
        continue;
    }
    totalSumEven2 += i;
        console.log(`Четное число ${i}, сумма ${totalSumEven2}`);
}
console.log(`Сумма четных чисел в диапазоне от ${min} до ${max} равна ${totalSumEven2}`);
/* Напиши скрипт который подсчитывает сумму всех нечетных чисел, которые входят в тот же диапазон от min до max.*/

let totalSumOdd = 0;
for (let i = min; i <= max; i += 1) { 
    if (i % 2 === 0) {
        continue;
    }
        totalSumOdd += i;
        console.log(`Нечетное число ${i}, сумма ${totalSumOdd}`);
}
console.log(`Сумма нечетных чисел в диапазоне от ${min} до ${max} равна ${totalSumOdd}`);



