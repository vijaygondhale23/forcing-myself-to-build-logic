function simplePasswordValidator(password){
    let hasUpperCase = false;
    let hasLowerCase = false;
    let isNumber = false;


    for(let char of password){
        if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <=90){
            hasUpperCase = true;
        } else if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
            hasLowerCase = true;
        } else if(!isNaN(Number(char))){
            isNumber = true;
        }
    }


    if(!hasLowerCase || !hasUpperCase || !isNumber || password.length < 8){
        return false;
    }
    return true;
};

console.log(simplePasswordValidator("afdhhwduwdh"));
console.log(simplePasswordValidator("afdFhwduwdh1"));
console.log(simplePasswordValidator("afdFhh1"));