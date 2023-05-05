// Inheritance

class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive() {
    console.log(`Driving ${this.make} ${this.model}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, color, numSeats) {
    super(make, model, year, color);
    this.numSeats = numSeats;
  }
}

class RideShareCar extends Car {
  constructor(make, model, year, color, numSeats, isAvailable) {
    super(make, model, year, color, numSeats);
    this.isAvailable = isAvailable;
  }
}

// Polymorphism

class Shape {
  calculateArea() {}
}

class Rectangle extends Shape {
  calculateArea(width, height) {
    return width * height;
  }
}

var rectangle = new Rectangle();

console.log(rectangle.calculateArea(10, 5));

class Triangle extends Shape {
  calculateArea(base, height) {
    return (base * height) / 2;
  }
}

var triangle = new Triangle();

console.log(triangle.calculateArea(10, 5));

class Circle extends Shape {
  calculateArea(radius) {
    return Math.PI * radius ** 2;
  }
}

var circle = new Circle();

console.log(circle.calculateArea(10));

// Abstraction and encpasulation

class BankAccount {
  #accountNumber;
  #balance;
  #accountHolderName;

  constructor(accountNumber, balance, accountHolderName) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
    this.#accountHolderName = accountHolderName;
  }

  depositAmount(amount) {
    this.#balance += amount;
  }

  withdrawAmount(amount, type) {
    if (type == "checking") {
      this.#balance -= amount;
    } else if (this.#balance - amount > 0) {
      this.#balance -= amount;
    }
  }

  getBalanceAmount() {
    return this.#balance;
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }

  deposit(amount) {
    this.depositAmount(amount);
  }

  withdraw(amount) {
    this.withdrawAmount(amount, "checking");
  }
}

console.log(" \n Checking Account Related Stuff : \n ");

var checkingAccount = new CheckingAccount(123, 100, "checking account holder");

console.log(
  "Balance before deposit of 50 : " + checkingAccount.getBalanceAmount()
);

checkingAccount.deposit(50);

console.log(
  "Balance after deposit of 50 : " + checkingAccount.getBalanceAmount()
);

console.log(
  "Balance before withdrawel of 100 : " + checkingAccount.getBalanceAmount()
);

checkingAccount.withdraw(100);

console.log(
  "Balance after withdrawel of 100 : " + checkingAccount.getBalanceAmount()
);

class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }

  deposit(amount) {
    this.depositAmount(amount);
  }

  withdraw(amount) {
    this.withdrawAmount(amount, "savings");
  }
}

console.log(" \n Savings Account Related Stuff : \n");

var savingsAccount = new SavingsAccount(124, 100, "savings account holder");

console.log(
  "Balance before deposit of 50 : " + savingsAccount.getBalanceAmount()
);

savingsAccount.deposit(50);

console.log(
  "Balance after deposit of 50 : " + savingsAccount.getBalanceAmount()
);

console.log(
  "Balance before withdrawel of 100 : " + savingsAccount.getBalanceAmount()
);

savingsAccount.withdraw(100);

console.log(
  "Balance after withdrawel of 100 : " + savingsAccount.getBalanceAmount()
);

console.log(
  "Balance before withdrawel of 150 : " + savingsAccount.getBalanceAmount()
);

savingsAccount.withdraw(150);

console.log(
  "Balance after withdrawel of 150 : " + savingsAccount.getBalanceAmount()
);

console.log("Not withdrawn because withdrawel amount is more than balance");
