// Protecting the Object

person = {};

Object.defineProperty(person, "name", { value: "Name", writable: false });
Object.defineProperty(person, "email", { value: "Email", writable: false });
Object.defineProperty(person, "age", { writable: true });

person = {
  ...person,
  getAge() {
    return this.age;
  },
  setAge(age) {
    this.age = age;
  },
};

person.age = 25;
console.log(person.getAge());
person.setAge(50);
console.log(person.getAge());

// JavaScript Prototype

class Vehicle {
  make = "Hyundai";
  model = "i20";
  year = 2022;
  getDetails() {
    return `Make is ${this.make}, model is ${this.model}, year is ${this.year}`;
  }
}

class Car extends Vehicle {
  numDoors = 4;

  getDetails() {
    return `Make is ${this.make}, model is ${this.model}, year is ${this.year}, number of doors ${this.numDoors}`;
  }
}

console.log(new Vehicle().getDetails());

console.log(new Car().getDetails());
