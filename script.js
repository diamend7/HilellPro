//Homework 12.1
let link;
function getLink() {
  let linkValue = prompt(`enter a link`);
  link = linkValue;
}
function goToLink() {
  location.href = link;
}

//Homework 12.2

const sectorButton = document.querySelector(`#buttonMain`);
sectorButton.addEventListener(`click`, function (e) {
  console.log(e.target.textContent);
});

//Homework 12.3

const addButton = document.querySelector(`#addButton`);
const inputTask = document.querySelector(`#inputTask`);
const tasksTree = document.querySelector(`#tasksTree`);
addButton.addEventListener(`click`, function (e) {
  const newTask = document.createElement(`li`);
  const newTaskText = document.createElement(`p`);
  const newTaskButton = document.createElement("button");
  newTaskButton.setAttribute(`type`, `button`);
  newTaskButton.setAttribute(`onclick`, `removeItem(event)`);
  newTaskButton.innerText = `Видалити`;
  newTaskText.innerText = inputTask.value;
  tasksTree.appendChild(newTask);
  newTask.appendChild(newTaskText);
  newTask.appendChild(newTaskButton);
});
function removeItem(event) {
  const currentLi = event.target;
  const mainLi = currentLi.closest(`li`);
  mainLi.remove();
}
