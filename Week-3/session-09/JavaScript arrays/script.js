// Put your solution here
function divideArray(numbers) {
  let evenNum = [];
  let oddNum = [];
  numbers.forEach((number) => {
    number % 2 === 0 ? evenNum.push(number) : oddNum.push(number);
  });
  evenNum.sort((a, b) => a - b);
  oddNum.sort((a, b) => a - b);
  console.log("Even numbers : ", evenNum.length > 0 ? evenNum : "None");
  console.log("Odd numbers : ", oddNum.length > 0 ? oddNum : "None");
}
