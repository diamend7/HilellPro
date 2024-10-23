//Homework 9.1
let company = {
  sales: [
    { name: `john`, salary: 1000 },
    { name: `Alice`, salary: 600 },
  ],
  development: {
    web: [
      { name: `peter`, salary: 2000 },
      { name: `Alex`, salary: 1000 },
    ],
    internals: [{ name: `jack`, salary: 1300 }],
  },
};

function getAllSalarySum(object) {
  let salarysSum = 0;
  for (let item in object) {
    if (Array.isArray(object[item])) {
      object[item].forEach((array) => {
        if (array.salary) {
          salarysSum += array.salary;
        }
      });
    } else if (typeof object[item] == `object`) {
      salarysSum += getAllSalarySum(object[item]);
    }
  }

  return salarysSum;
}
console.log(getAllSalarySum(company));
