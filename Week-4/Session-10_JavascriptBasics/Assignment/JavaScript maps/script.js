function calcWordFrequencies() {
  var input = prompt("Enter the string");
  var inputWords = input.split(" ");

  var wordCountMap = new Map();

  inputWords.forEach((word) => {
    if (wordCountMap.has(word)) {
      wordCountMap.set(word, wordCountMap.get(word) + 1);
    } else {
      wordCountMap.set(word, 1);
    }
  });

  console.log(wordCountMap);
}
