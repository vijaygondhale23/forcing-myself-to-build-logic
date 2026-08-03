// Write a function to calculate the sum of squares of all elements in an array.



const sumOfSquares = (arr) => {
    let result = arr.map((val,index) => {
        return val * val;
    }).reduce((accum, currVal) => accum + currVal);
    return result;
}

console.log(sumOfSquares([1,2,3]));
console.log(sumOfSquares([1,2,3,5,6]));


// const sumOfSquares = (arr) => {
//      return arr.reduce((accum, currval) => (accum = accum + currval * currval), 0)
// }

// console.log(sumOfSquares([1,2,3]));
// console.log(sumOfSquares([1,2,3,5,6]));
