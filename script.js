const addButton = document.querySelector('.form__btn');
const inputForm = document.querySelector('.js--form__input');
const ulForm = document.querySelector('.js--todos-wrapper');


addButton.addEventListener('click', function(event){
    event.preventDefault();

    const taskLi = document.createElement('li');
    taskLi.classList.add('todo-item');
    const taskInput = document.createElement('input');
    taskInput.setAttribute('type', 'checkbox')
    const taskSpan = document.createElement('span');
    taskSpan.classList.add('todo-item__description');
    taskSpan.textContent = inputForm.value;
    const taskButton = document.createElement('button');
    taskButton.classList.add('todo-item__delete');
    taskButton.textContent = 'Видалити';

    taskLi.appendChild(taskInput);
    taskLi.appendChild(taskSpan);
    taskLi.appendChild(taskButton);
    ulForm.appendChild(taskLi);

    saveLocaleStorage()


    taskInput.addEventListener('click', function(event){
        taskLi.classList.toggle(`todo-item--checked`);
        saveLocaleStorage();

    });
    taskButton.addEventListener('click', function(event){
        event.preventDefault();
        let removeLi = event.target.closest('li');
        removeLi.remove();
        saveLocaleStorage();
        

    });
    inputForm.value = '';

});

function saveLocaleStorage(){
    const localTasks = [];

    ulForm.querySelectorAll('.todo-item').forEach(function (task) {
        const taskText = task.querySelector(`.todo-item__description`).textContent;
        const taskChecked = task.querySelector(`input`).checked;

        localTasks.push({taskDescription: taskText, complete: taskChecked });

        

    });
    localStorage.setItem(`tasks`, JSON.stringify(localTasks));
}

function getLocaleStorage(){
    const localTasks = JSON.parse(localStorage.getItem(`tasks`) || []);

    localTasks.forEach(function (task){

    const taskLi = document.createElement('li');
    taskLi.classList.add('todo-item');
    if(task.complete){
        taskLi.classList.toggle(`todo-item--checked`);
    }
    const taskInput = document.createElement('input');
    taskInput.setAttribute('type', 'checkbox')
    taskInput.checked = task.complete;
    const taskSpan = document.createElement('span');
    taskSpan.classList.add('todo-item__description');
    taskSpan.textContent = task.taskDescription;
    const taskButton = document.createElement('button');
    taskButton.classList.add('todo-item__delete');
    taskButton.textContent = 'Видалити';

    taskLi.appendChild(taskInput);
    taskLi.appendChild(taskSpan);
    taskLi.appendChild(taskButton);
    ulForm.appendChild(taskLi);

    taskInput.addEventListener('click', function(event){
        taskLi.classList.toggle(`todo-item--checked`);
        saveLocaleStorage();


    });
    taskButton.addEventListener('click', function(event){
        event.preventDefault();
        let removeLi = event.target.closest('li');
        removeLi.remove();
        saveLocaleStorage();

    });

    });
}

getLocaleStorage();

