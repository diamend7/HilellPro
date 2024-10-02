//Homework 4.1
const name = prompt("ім'я користувача");
console.log("Hello," + name + "! How are you?");

//Homework 4.2
const num = prompt("Введіть 3-значне число");

const num1 = num[0];
const num2 = num[1];
const num3 = num[2];
if (isNaN(+num) || num.length !== 3) {
  console.log("введіть 3-значне число");
} else {
  if (num1 === num2 && num2 === num3) {
    console.log("усі цифри однакові");
  } else if (num1 === num2 || num1 === num3 || num2 === num3) {
    console.log("є однакові цифри");
  } else {
    console.log("цифри різні");
  }
}

//Homework 4.3

const birthYear = prompt("Рік народження");
const city = prompt("Місто в якому ви проживаете");
const sport = prompt("Улюблений вид спорту");
let birthAnswer;
let cityAnswer;
let sportAnswer;

//birthYear
if (
  city === null ||
  birthYear.trim() === `` ||
  !+birthYear ||
  birthYear.length !== 4
) {
  birthAnswer = "Шкода, що Ви не захотіли ввести свій(ю) дату нарождення";
} else {
  birthAnswer = 2024 - +birthYear;
}

//city
if (city === null || city.trim() === `` || !isNaN(city)) {
  cityAnswer = "Шкода, що Ви не захотіли ввести свій(ю) місто";
} else if (city === "Київ") {
  cityAnswer = "Ти живеш у столиці України";
} else if (city === "Вашингтон") {
  cityAnswer = "Ти живеш у столиці США";
} else if (city === "Лондон") {
  cityAnswer = "Ти живеш у столиці Великої британії";
} else {
  cityAnswer = "Ти живеш у місті " + city;
}

//sport
if (sport === null || sport.trim() === `` || !isNaN(sport)) {
  sportAnswer = "Шкода, що Ви не захотіли ввести свій(ю) улюблений спорт";
} else if (sport === "Футбол") {
  sportAnswer = "Круто! Хочеш стати як Роналду?";
} else if (sport === "Плавання") {
  sportAnswer = "Круто! Хочеш стати як Фелпс Майкл?";
} else if (sport === "Бігання") {
  sportAnswer = "Круто! Хочеш стати як Усєйн Болт?";
} else {
  sportAnswer = "Круто! Твій улюблений вид спорту це " + sport;
}

alert(`${birthAnswer}
${cityAnswer}
${sportAnswer}`);

//Homework 4.4

const numOrStr = prompt("input number or string");
console.log(numOrStr);

switch (true) {
  case numOrStr === null:
    console.log("ви скасували");
    break;
  case numOrStr.trim() === "":
    console.log("Empty String");
    break;
  case isNaN(+numOrStr):
    console.log("number is Ba_NaN");
    break;
  default:
    console.log("OK!");
}
