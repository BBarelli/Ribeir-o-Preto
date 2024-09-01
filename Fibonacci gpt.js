function isFibonacci(num) {
    if (num < 0) {
        return "O número informado não pertence à sequência de Fibonacci.";
    }

    let a = 0;
    let b = 1;

    if (num === a || num === b) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    }

    while (b <= num) {
     
        let c = a + b;
        a = b;
        b = c;

        if (b === num) {
            return `O número ${num} pertence à sequência de Fibonacci.`;
        }
    }

    return `O número ${num} não pertence à sequência de Fibonacci.`;
}

const numero = 8;
console.log(isFibonacci(numero));
