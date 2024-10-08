//Homework 6,1
const arraySymbols = prompt(`Введіть речення:`);
const deleteSymbols = prompt(`Введіть букви для видалення:`);

function removeSymbols(array, ...symbols) {
  symbols.forEach((symbol) => {
    array = array.replaceAll(symbol, "");
  });
  return array;
}

console.log(removeSymbols(arraySymbols, deleteSymbols));

//Homework 6.2

function getAverageNumber() {
  const arrayNumbers_String = [2, `some`, null, 4, 9, undefined, 5, `maybe`];
  let sum = 0;
  let count = 0;
  //null вважається за число хоча тип в нього - обьект тому я не став його вписувати
  for (const target of arrayNumbers_String) {
    if (!isNaN(target) && target !== null) {
      sum += target;
      count++;
    }
  }
  return sum / count;
}

console.log(getAverageNumber());

//Homework 6.3

function removeElement(array, item) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === item) {
      array.splice(i, 1);
      return array;
    }
  }
}

const array = [1, 3, 4, 60, 2, 5, 7];
console.log(removeElement(array, 60));
