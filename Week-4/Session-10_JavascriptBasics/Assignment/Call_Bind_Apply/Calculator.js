class Calculator {
  add(number1, number2) {
    return number1 + number2;
  }

  subtract(number1, number2) {
    return number1 - number2;
  }

  multiply(number1, number2) {
    return number1 * number2;
  }

  divide(number1, number2) {
    return number1 / number2;
  }
}

class ScientificCalculator extends Calculator {
  square(number) {
    return number * number;
  }

  cube(number) {
    return number * number * number;
  }

  power(number1, number2) {
    return number1 ** number2;
  }
}

const scientificCalculator = new ScientificCalculator();

console.log(scientificCalculator.add.call(Calculator, 10, 5));

console.log(scientificCalculator.subtract.apply(Calculator, [10, 5]));

function multiplyByTwo(number) {
  return number * 2;
}

var multiplyByTwoBind = multiplyByTwo.bind(scientificCalculator);

function powerOfThree(number) {
  return number ** 3;
}

var powerOfThreeBind = powerOfThree.bind(scientificCalculator);

console.log(multiplyByTwoBind(5));

console.log(powerOfThreeBind(2));
