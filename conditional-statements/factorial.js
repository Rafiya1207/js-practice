const number = 5;
let factorial = number;

for(let previousNumber = number - 1; previousNumber >= 1; previousNumber = previousNumber - 1) {
    factorial = factorial * previousNumber;
}

console.log(factorial, "is factorial of", number);
