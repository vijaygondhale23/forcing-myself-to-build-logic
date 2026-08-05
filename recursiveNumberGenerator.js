const recursiveNumberRange = (a,b, arr = []) => {
    if(a <= b){
        arr.push(a);
        return recursiveNumberRange(a + 1, b, arr)
    }
    return arr;
}
console.log(recursiveNumberRange(0,5));
