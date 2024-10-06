//Homework 5,1
for (i = 20; i <= 30; i += 0.5) {
  console.log(i);
}

//Homework 5.2
const dollar = 26;
console.log(`курс долара: ${dollar}`);
for (i = 10; i <= 100; i += 10) {
  let exchange = i * dollar;
  console.log(`${i} доларів коштують ${exchange} гривень`);
}

//homework 5.3
const N = +prompt(`Введіть ціле число(1-100):`);
for (i = 2; i <= N; i++) {
  let result = i * i;
  if (result > N) {
    break;
  } else {
    console.log(`${i}(${result})`);
  }
}

//Homework 5.4
const number = +prompt(`Введіть ціле число:`);
let isNumber = true;

if (number > 1) {
  for (i = 2; i < number; i++) {
    if (number % i == 0) {
      isNumber = false;
      break;
    }
  }
} else {
  console.log(`не цифра або менше 2`);
}

if (!isNumber) {
  console.log(`число не є парним`);
} else {
  console.log(`число  є парним`);
}
