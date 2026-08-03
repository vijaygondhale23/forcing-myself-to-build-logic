// Write a function to check if the character is lowercase or uppercase.

const isUpperCase = (char) => {
    if(char.charCodeAt() >= 65 && char.charCodeAt() <= 90){
        return true;
    } else {
        return false;
    }
}

console.log(isUpperCase("s"));
