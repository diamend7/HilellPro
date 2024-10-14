//Homework 7.1

function getSum() {
  let result = 0;
  return function (sum) {
    result += sum;
    return result;
  };
}
const numberPlus = getSum();

console.log(numberPlus(2));
console.log(numberPlus(4));
console.log(numberPlus(6));
console.log(numberPlus(8));

//Homework 7.2

function getTwoSum(firstNum = 0) {
  return (secondNum) => {
    return firstNum * secondNum;
  };
}
console.log(getTwoSum(2)(5));

//Homework 7.3

function askNumber() {
  for (i = 0; i <= 10; i++) {
    const number = prompt(`Введіть число більше 100`);
    if (number > 100 || i === 10) {
      return number;
    } else {
      console.log(`Введіть число більше 100`);
    }
  }
}
console.log(askNumber());
