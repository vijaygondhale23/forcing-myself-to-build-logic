// Question: Find the largest number in an array.
// Solution: Compare each element to the current largest and keep the biggest value.


const findMax = (arr) => {
    let largest = arr[0];
    arr.forEach(element => {
        if(element > largest) {
            largest = element;
        }
    });
    return largest;
}

console.log(findMax([1,51,3,9,12]));
console.log(findMax([-2,-10,-5]));