let id = 0

generateTransactionId = () => {
    id += 1
    return Symbol('TRANSACTION_ID_' + id)
}

const transaction1 = generateTransactionId();
console.log(transaction1);

const transaction2 = generateTransactionId();
console.log(transaction2);

const transaction3 = generateTransactionId();
console.log(transaction3);
