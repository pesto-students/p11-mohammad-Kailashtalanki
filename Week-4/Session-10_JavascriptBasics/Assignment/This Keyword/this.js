class Person {
  constructor(name, age, gender, nationality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }

  introduce() {
    return (
      "My name is " +
      this.name +
      ", I am " +
      this.age +
      " years old, I am " +
      this.gender +
      ", and I am " +
      this.nationality +
      "."
    );
  }
}

var firstPerson = new Person("first", "20", "male", "Indian");

var secondPerson = new Person("second", "30", "female", "Pakistani");

var thirdPerson = new Person("third", "40", "male", "Nepali");

console.log(firstPerson.introduce());

console.log(secondPerson.introduce());

console.log(thirdPerson.introduce());

class Student extends Person {
  constructor(name, age, gender, nationality, subject) {
    super(name, age, gender, nationality);
    this.subject = subject;
  }

  study() {
    return "I am studying " + this.subject;
  }
}

var student = new Student("fourth", "50", "male", "Bangladeshi", "Math");

console.log(student.introduce() + " " + student.study());
