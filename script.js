const submit = document.querySelector(`#submit`);
submit.addEventListener(`click`, function(event){
    event.preventDefault();

    let isValid = true

    const name = document.querySelector(`#name`).value.trim();
    const message = document.querySelector(`#message`).value.trim();
    const phone = document.querySelector(`#phone`).value.trim();
    const email = document.querySelector(`#email`).value.trim();

    const nameError = document.querySelector(`#nameError`);
    const messageError = document.querySelector(`#messageError`);
    const phoneError = document.querySelector(`#phoneError`);
    const emailError = document.querySelector(`#emailError`);

    if(name === `` || !isNaN(name)){
        nameError.textContent = `NOO this is wrong!`;
        isValid = false
    } 

    if(message.length < 5){
        messageError.textContent = `NOO type more!`;
        isValid = false
    } 

    const phoneRegEx = /^380\d{9}$/;
    // без плюсу тому що поведінка type=phone виводить у консоль без плюсу навіть коли ти його пишеш
    if(!phoneRegEx.test(phone)){
        phoneError.textContent = `NOO wrong number!`;
        isValid = false
    } 


    const emailRegEx = /^[^\s@]+@{1}[^\s@]+\.{1}[^\s@]+$/;
    if(!emailRegEx.test(email)){
        emailError.textContent = `NOO wrong email!`;
        isValid = false
    } 


    if(isValid === true){
        console.log(name);
        console.log(message);
        console.log(`+${phone}`);
        console.log(email);
    }
 
});

function nameErrorFunc(){ nameError.textContent = ``};
function messageErrorFunc(){ messageError.textContent = ``};
function phoneErrorFunc(){ phoneError.textContent = ``};
function emailErrorFunc(){ emailError.textContent = ``};