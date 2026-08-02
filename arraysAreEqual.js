// Question: Check whether two arrays contain the same values in the same order.
// Solution: Compare their lengths first, then verify every element matches at the same index.


const areArrayEqual = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false;
    }
    return arr1.every((currVal, index) => currVal === arr2[index]);
}


console.log(areArrayEqual([1,2,3],[1,2,4]));