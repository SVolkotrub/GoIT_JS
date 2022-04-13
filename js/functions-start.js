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

