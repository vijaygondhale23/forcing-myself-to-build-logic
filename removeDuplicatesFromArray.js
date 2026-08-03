const removeDuplicates = (arr) => {
    let newarr = [...new Set(arr)];
    return newarr;
}

console.log(removeDuplicates([1,2,2,3,5,6,6]));
console.log(removeDuplicates([1,2,2,3,5,6,6,8,9,9,9]));




// Another Approach

function removeDuplicates(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  }
  return newArr.sort((a, b) => a - b);
}

console.log(removeDuplicates([5, 6, 9, 7, 7, 8, 8]));
