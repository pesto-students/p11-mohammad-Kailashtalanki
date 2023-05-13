function* arrayGenerator(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        yield Symbol(arr[i])
    }
}

const testArray = ['hello', 'world', 'test']

const generator = arrayGenerator(testArray)

for (const symbol of generator) {
    console.log(symbol);
}