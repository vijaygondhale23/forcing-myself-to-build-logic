// Question: Sort an array in ascending order.
// Solution: Use a comparison function to arrange numbers from smallest to largest.


const sortAscending = (arr) => {
    return arr.sort((a,b) => a - b);
}
console.log(sortAscending([5,3,1,8]));
console.log(sortAscending([5,3,10,8]));