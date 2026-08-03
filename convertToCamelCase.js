const toCamelCase = (str) => {
    str = str.trim().split(' ');
    str = str.map((val, index) => {
        if( index === 0){
            return val.toLowerCase();;
        } else {
            return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
        }
    });
    return str.join("");
}

console.log(
 toCamelCase("hello world vijay"));