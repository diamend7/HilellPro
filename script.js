//Homework 10.1
const userInfo = {
  userName: `Bob`,
  userAge: 49,
  location: `Kalponi 58/3`,

  getUserInfo: function () {
    return `
    Name: ${this.userName}
    Age: ${this.userAge}
    Location: ${this.location}`;
  },
};
console.log(userInfo.getUserInfo());

//Homework 10.2

const someNumbers = [80, 61, 77, 89, 56, 7, 34, 23];
const filteredNumbers = someNumbers.filter(function (number) {
  if (number % 2 === 0) {
    return number;
  }
});
console.log(filteredNumbers);

// Homework 10.3

const contactBook = {
  contacts: [],

  addContact: function (contactName, phoneNumber, email) {
    const newContact = {
      contactName: contactName,
      phoneNumber: phoneNumber,
      email: email,
    };
    this.contacts.push(newContact);
  },
  getContact: function (userName) {
    for (i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].contactName === userName) {
        return this.contacts[i];
      }
    }
  },
};

contactBook.addContact(`Bob`, `+3809678590`, `email@gmail.com`);
contactBook.addContact(`Alex`, `+38094658590`, `email@gmail.com`);
contactBook.addContact(`Alice`, `+38096636590`, `email@gmail.com`);
console.log(contactBook.getContact(`Alex`));
