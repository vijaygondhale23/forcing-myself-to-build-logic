// Question: Find the longest word in a sentence.
// Solution: Split the sentence into words, sort them by length, and return the first one.


let findLongestWord = (str) => {

    if(str.trim().length === 0){
        return false;
    }

    words = str.split(" ");
    words = words.sort((a,b) => b.length - a.length);
    return words[0];
}

console.log(findLongestWord("Watch Vijay getting a job in 2026 comonn"))