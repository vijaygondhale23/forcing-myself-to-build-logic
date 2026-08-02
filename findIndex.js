// Question: Find the indices of two consecutive numbers that add up to 30.
// Solution: Loop through the array and return the pair of indices when the sum matches 30.


let arr = [10,12,18,6,4];
const findIndex = () => {
    let output = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] + arr[i + 1] === 30){
            output = [i, i + 1]
        }
    }
    return output
}

console.log(findIndex());