//Homework 8.1
let i = 1;
let ladder = {
  up: function () {
    if (i <= 1) {
      console.log(`up`);
      i++;
    } else {
      console.log(`Неможливо виконати операцію!`);
    }
    return this;
  },
  down: function () {
    if (i >= 2) {
      console.log(`down`);
      i--;
    } else {
      console.log(`Неможливо виконати операцію!`);
    }
    return this;
  },
  showStep: function () {
    console.log(`current Step:${i}`);
    return this;
  },
};
ladder.up().up().down().showStep();
