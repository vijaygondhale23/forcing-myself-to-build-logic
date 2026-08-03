const startsWithSubstring = (str, subStr) => {
    str = str.toLowerCase();
    subStr = subStr.toLowerCase();
    return str.startsWith(subStr);



    
    // Another Approach
    // return str.toLowerCase().slice(0,subStr.length) === subStr.toLowerCase();
}
console.log(startsWithSubstring("Hello World", "hello"));
console.log(startsWithSubstring("Hello World", "world"));