const numberRange = (a , b) => {
    let arr = [];
    for(let i = a; i <= b; i++){
        arr.push(i);
    }
    return arr;
}
console.log(numberRange(-2,2));
