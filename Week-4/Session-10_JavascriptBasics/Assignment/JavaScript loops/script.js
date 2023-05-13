function drawTriangle(triangleSize) {
  // Your solution goes here
  for (let i = 1; i <= triangleSize; i += 1) {
    let line = "";
    for (let j = 1; j <= i; j += 1) {
      line += "*";
    }
    console.log(line);
  }
}

drawTriangle(10);
