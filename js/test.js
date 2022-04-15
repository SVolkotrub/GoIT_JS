
const statistic = '';
let number = statistic.length;
console.log(number);
let percent = 0;
  let count = 0;
  for (let ones of statistic){
    if (ones === '1'){
      count += 1;
    }
  } 
console.log('count ones ', count, 'all:', number, '  percent: ', Math.round((count / number) * 100) );