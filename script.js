//Homework 11.1
const table = document.getElementById("multiplicationTable");
function getTable(size) {
  const headerRow = document.createElement("tr");
  const emptyHeader = document.createElement("th");
  headerRow.appendChild(emptyHeader);

  for (let i = 1; i <= size; i++) {
    const th = document.createElement("th");
    th.innerText = i;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  for (let i = 1; i <= size; i++) {
    const row = document.createElement("tr");
    const th = document.createElement("th");
    th.innerText = i;
    row.appendChild(th);

    for (let j = 1; j <= size; j++) {
      const td = document.createElement("td");
      td.innerText = i * j;
      row.appendChild(td);
    }

    table.appendChild(row);
  }
}
getTable(10);

//Homework 11.2
const colorText = document.getElementById(`colorText`);
function textColorClick() {
  colorText.classList.toggle(`colorRed`);
}

//Homework 11.3
const randomNumber = Math.floor(Math.random() * 10);
const randomImage = `images/image${randomNumber}.png`;
document.getElementById("randomImage").src = randomImage;
