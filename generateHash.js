// Question: Convert a sentence into a hashtag by capitalizing the first letter of each word.
// Solution: Split the sentence into words, capitalize each word's first letter, join them together, and add a # prefix.


let generateHash = (str) => {

    if(str.length > 280 || str.trim().length === 0){
        return false;
    }
    str = str.split(" ");
    str = str.map((eachWord) => 
        eachWord.replace(eachWord[0],eachWord[0].toUpperCase()));

    str = `#${str.join("")}` 
    return str;
}

console.log(generateHash("hello my name is vijay"));