function counter() {
  var count = 0;
  return () => {
    count += 1;
    return count;
  };
}

var firstCounter = counter();

var secondCounter = counter();

var firstCounterArray = [
  firstCounter(),
  firstCounter(),
  firstCounter(),
  firstCounter(),
  firstCounter(),
];

var secondCounterArray = [secondCounter(), secondCounter(), secondCounter()];

console.log("firstValues array: " + firstCounterArray);

console.log("secondValues array: " + secondCounterArray);
