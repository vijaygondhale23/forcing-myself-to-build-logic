// Question: Calculate the average of numbers in an array.
// Solution: Add all numbers and divide by the array length.


const calculateAverage = (arr) => {
    let total = arr.reduce((accumulator, currValue) => 
        accumulator + currValue, 0)
    console.log(total)
    return total / arr.length;
}

console.log(calculateAverage([5,10,4,8]))