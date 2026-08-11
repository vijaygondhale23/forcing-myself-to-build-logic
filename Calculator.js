function calculator(num1, num2, operator){
    let result;
    switch (operator) {
        case "+":
            return num1 + num2;
            break;

        case "-":
            return num1 - num2;
            break;

        case "*":
            return num1 + num2;
            break;
    
        default:
            return "no oeprator found";
    }
}

console.log(calculator(5,8,"+"));
