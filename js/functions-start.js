function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { 
    message =  'Canceled by user!';
  } else if (ADMIN_PASSWORD=== password) { 
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

function checkStorage(available, ordered) {
  let message;
 
if(ordered===0) {
  message = 'There are no products in the order!';
} else if (ordered >available) {
  message = 'Your order is too large, there are not enough items in stock!';
} else {
  message = 'The order is accepted, our manager will contact you';
}

  return message;
}
function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType ==='vip'; 

  return canAccessContent;
}

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; 

  return isNotInRange;
}

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  
if (totalSpent >= 5000 && totalSpent < 20000) {
      discount = BRONZE_DISCOUNT;
} else if (totalSpent >= 20000 && totalSpent < 50000) { 
     discount = SILVER_DISCOUNT;
} else if (totalSpent >= 50000) { 
    discount = GOLD_DISCOUNT;
} else {
    
    discount = BASE_DISCOUNT;
}
  
  return discount;
}

function getSubscriptionPrice(type) {
  let price;
 
 switch (type) { 
    case 'starter': 
      price = 0; 
      break;

    case 'professional': 
      price = 20; 
      break;

    case 'organization': 
      price = 50; 
      break;
  }

    return price;
}

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  switch (password) {
   case null:
    message = "Canceled by user!";
    break;
  case ADMIN_PASSWORD:
    message = "Welcome!";
    break;
  default:
    message = "Access denied, wrong password!";
  }

  return message;
}

function getShippingCost(country) {
  let message;
 
switch (country){
  case 'China':
  message = `Shipping to ${country} will cost 100 credits`;
  break;
  case 'Chile':
  message = `Shipping to ${country} will cost 250 credits`;
  break;
  case 'Australia':
  message = `Shipping to ${country} will cost 170 credits`;
  break;
  case 'Jamaica':
  message = `Shipping to ${country} will cost 120 credits`;
  break;
  default:
  message = 'Sorry, there is no delivery to your country';
}

  return message;
}

const courseTopic = "JavaScript essentials";
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

function getSubstring(string, length) {
  const substring = string.slice(0, length); 

  return substring;
}

function formatMessage(message, maxLength) {
  let result;
if (message.length <= maxLength) {
  result = message;
} else {
  result = message.slice(0, maxLength)+'...';
}

  return result;
}

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase (); 

  return normalizedInput;
}
function checkForName(fullName, name) {
 const result = fullName.includes(name); 
  return result;
}

function checkForSpam(message) {
  let result;
  
message = message.toLowerCase();
result = message.includes('spam') || message.includes('sale');

  return result;
}

function getTipsRating(amount) {
  if(amount === 0) {
    return 'terrible';
  }
  if (amount >= 1 && amount <= 10){
    return 'poor';
  } 
  if (amount >= 11 && amount <= 20) {
    return 'good';
  }
  if (amount >=21 && amount <= 50) {
    return 'great';
   } 
   if (amount > 50) {
     return 'excellent';
   }
}

function getLargestExpressionResult(a, b) {
  let result = a + b;
 if (result < (a - b)) {
   result = a - b;
 } 
 if (result < a * b ) {
   result = a * b;
 }
 if (result < a / b ) {
   result = a / b;
 }
   return result;
}

function calculateProfit(amount, percent, period) {
  let profit = amount;
  for (let i = 0; i < period; i+=1) {
    profit += profit * percent / 100;
  }
  return profit - amount;
}

//Проверить, что буква большая

function isBigLetter(ch) {
  const isLetter = ch.toLowerCase() !== ch.toUpperCase();
  const isBig = ch === ch.toUpperCase();
  
  return isLetter && isBig;
}
 
function search(text, part) {
  const normalizedText = text.toLowerCase();
  const normalizedPart = part.toLowerCase();
  
  return normalizedText.includes(normalizedPart);
}

console.log(search('Sveta', 'm'), search('Sveta', 'Sv'));

// Проверить является ли символ буквой
function isLetter(ch) {
  return ch.toLowerCase() !== ch.toUpperCase();
}


function countMs(text) {
  let count = 0;
  for (let letter of text){
    if (letter === 'm' || letter === 'M'){
      count +=1;
    }
  }
  return count;
}

function removeVowels(doc) {
  let result = '';
  for (let letter of doc){
    if (letter !== 'a' && letter !== 'e' && letter !== 'i' && letter !== 'o' && letter !== 'u' && letter !== 'y' && letter !== 'A' && letter !== 'E' && letter !== 'I' && letter !== 'O' && letter !== 'U' && letter !== 'Y'){
        result += letter;
    }
  }
  return result;
}

function makeAbbr(words) {
  let abbreviation = words.charAt(0);
  for (let i = 0; i < words.length; i +=1) {
    if (words.charAt(i) === ' '){
      abbreviation += words.charAt(i + 1);

    }
  }
  return abbreviation.toUpperCase();
}

function decryptMessage(message) {
  let result ='';
  for(let i = message.length - 1; i >= 0; i -= 1) {
    result += message[i];
  }
  return result;
}

function isWerewolf(target) {
  let direct = '';
let reversed = '';
  
  for (let letter of target.toLowerCase()) {
    if (letter.toLowerCase() !== letter.toUpperCase()) {
        direct += letter;
      } 
}
  for(let i = direct.length - 1; i >= 0; i -= 1) {
      reversed += direct.charAt(i);
 }
 return direct === reversed;
}

function getSuccessRate(statistic) {
  let number = Number(statistic.length);
  let count = 0;
  for (let ones of statistic){
    if (ones === '1'){
      count += 1;
    }
  } 
  let percent = 0;

if (number !== 0) {
  percent = Math.round((count / number) * 100)
} else { percent = 0;}
return percent;
}

function getWordsLengths(words) {
  
  const result = [];
  for (const word of words) {
        const length = word.length;
       result.push(length);
  }
  console.log(result);
  return result;
}

// отримаємо [3, 3, 5, 4, 4]
getWordsLengths(['one', 'two', 'three', 'four', 'five']);

function makeArray(firstArray, secondArray, maxLength) {
    const result = firstArray.concat(secondArray);
let newRes = [];
if (result.length > maxLength) {
  newRes = result.slice(0, maxLength);
  return newRes;
}
return result;

}
 /*Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только 
 из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.*/
function findLongestWord(string) {
  
const array = string.split(" ");
let theLongestWord = array[0];
for (let i = 1; i < array.length; i += 1){
  if (theLongestWord.length < array[i].length){
    theLongestWord = array[i];
  }
}
return theLongestWord;
  
}
function getTheLongestWord(words) {
  
  let theLongest = words[0];
  
  for (let i = 1; i < words.length; i++) {
    // якщо поточне слово довше theLongest
    if (words[i].length >theLongest.length) {
      // то зберігаємо його замість попереднього theLongest
      theLongest = words[i];
    }
  }
    return theLongest;
}
/*Напиши функцию filterArray(numbers, value), которая 
принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers,
 которые больше чем значение параметра value (число).*/

function filterArray(numbers, value) {
 
const result = [];
for(let i = 0; i < numbers.length; i += 1){
  if(numbers[i] > value) {
    result.push(numbers[i]);
  }
}
 return result;

}

