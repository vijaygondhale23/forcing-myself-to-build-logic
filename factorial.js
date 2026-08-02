// Question: Calculate the factorial of a number.
// Solution: Multiply numbers from 1 up to the given number and return the result.


const factorial = (num) => {
    let fact = 1
    for(let i = 1; i <= num; i++){
        fact = fact * i;
    }
    return fact;
}

console.log(factorial(5));