function validateForm(event){
    event.preventDefault();

    const name = document.querySelector(`#name`).value.trim();
    const message = document.querySelector(`#message`).value.trim();
    const phone = document.querySelector(`#phone`).value.trim();
    const email = document.querySelector(`#email`).value.trim();

    const nameError = document.querySelector(`#nameError`);
    const messageError = document.querySelector(`#messageError`);
    const phoneError = document.querySelector(`#phoneError`);
    const emailError = document.querySelector(`#emailError`);

    nameError.textContent = ``;
    messageError.textContent = ``;
    phoneError.textContent = ``;
    emailError.textContent = ``;

    if(name === `` || !isNaN(name)){
        nameError.textContent = `NOO this is wrong!`;
    } else {
        console.log(name)
    }

    if(message.length < 5){
        messageError.textContent = `NOO type more!`;
    } else {
        console.log(message)
    }

    const phoneRegEx = /^380\d{9}$/;
    // без плюсу тому що поведінка type=phone виводить у консоль без плюсу навіть коли ти його пишеш
    if(!phoneRegEx.test(phone)){
        phoneError.textContent = `NOO wrong number!`;
    } else {
        console.log(`+` + phone)
    }


    const emailRegEx = /^[^\s@]+@{1}[^\s@]+\.{1}[^\s@]+$/;
    if(!emailRegEx.test(email)){
        emailError.textContent = `NOO wrong email!`;
    } else {
        console.log(email)
    }
 
}