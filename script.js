// Homework 3.1
const str = `Bob`;
const num = 42;
const bigNum = 10n;
const boolean = true;
const obj = { name: `bob`, number: 25 };
const zero = null;
const symb = Symbol(`foo`);

console.log(typeof str);
console.log(typeof num);
console.log(typeof bigNum);
console.log(typeof boolean);
console.log(typeof obj);
console.log(typeof symb);
console.log(zero);
console.log(typeof nothing);

// Homework 3.2
const first = prompt(`Введіть що небудь`);
const second = prompt(`Введіть що небудь`);
const third = prompt(`Введіть що небудь`);

const text = `${first}
${second}
${third}`;

console.log(text);

//Homework 3.3
const mainNumber = "10369";
console.log(mainNumber);
const spaceNumber = function () {
  const spaceNumber = mainNumber.split(``).join(` `);
  console.log(spaceNumber);
};
spaceNumber();
