//17.1
class Calculator {

    add(num1, num2){
        return num1 + num2;

    }
    subtract(num1, num2){
        return num1 - num2;

    }
    multiply(num1, num2){
        return num1 * num2;

    }
    divide(num1, num2){
        return num1 / num2;

    }
   }
   
   const calc = new Calculator();
   
   console.log(calc.add(5, 3)); // 8
   
   console.log(calc.subtract(10, 4)); // 6
   
   console.log(calc.multiply(3, 6)); // 18
   
   console.log(calc.divide(8, 2)); // 4

//17.2

class Coach {
    constructor(name, specialization, rate){
        this.name = name;
        this.specialization = specialization;
        this.rate = rate;
    }

    displayInfo(){
        console.log(`Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rate}`)
    }
}

const coach1 = new Coach('John Doe', 'Fitness', 4.7);

const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

coach1.displayInfo(); // "Coach: John Doe, Specialization: Fitness, Rating: 4.7"

coach2.displayInfo(); // "Coach: Alice Smith, Specialization: Yoga, Rating: 4.9"

//17.3

class BankAccount {
    constructor(money){
        this.money = money;
    }

    getBalance(){
        return this.money;
    }
    deposit(addMoney){
        this.money += addMoney;
    }
    withdraw(getMoney){
        this.money -= getMoney;

    }
    
}
    
    const account1 = new BankAccount(1000);
    
    console.log(account1.getBalance()); // 1000
    
    account1.deposit(500);
    
    console.log(account1.getBalance()); // 1500
    
    account1.withdraw(200);
    
    console.log(account1.getBalance()); // 1300