const findMin = (arr) => {
    arr = arr.sort((a, b) => {
        if ( b > a) return -1;
    });
    return arr[0];
}

console.log(findMin([343,5,23,3,78,2]));
