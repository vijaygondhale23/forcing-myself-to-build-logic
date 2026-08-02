// Question: Check whether a string is a palindrome.
// Solution: Remove non-alphanumeric characters, compare the reversed string with the original, and ignore case.


const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/\W/g,"");
    let rev_str = str.split("").reverse().join("");
    console.log(rev_str);
    if (rev_str === str) return true;
    return false;

}

console.log(isPalindrome("A man, a plan, a canal, Panama"))
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));