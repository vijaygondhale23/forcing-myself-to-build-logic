function sumOfDigits(num){
    let arr = Array.from(String(num), Number);
    return arr.reduce((accum,curr) => accum + curr);
}

console.log(sumOfDigits(1234));
console.log(sumOfDigits(12343434));
console.log(sumOfDigits(12347899));




const sumOfDigit=(val)=>{
    let val2=JSON.stringify(val).split('')
    let sum=val2.reduce((acc,curVal)=> acc + parseInt(curVal), 0);
    return sum;
}
console.log(sumOfDigit(12345)); //output 15


// With out Converting Number into a string


const findSum = (num) =>{
    let sum = 0; 
    while(num > 0){
        let temp = num % 10;
        sum += temp;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log(findSum(12345))

