// Question: Count how many times a character appears in a string.
// Solution: Convert the string and target to lowercase, then count matching characters.


const countChar = (words, target) => {
    words = words.toLowerCase();
    target = target.toLowerCase();

    totalCount = words.split("").reduce((accum, currChar) => {
        if (currChar === target){
            accum++;
        }
        return accum;
    }, 0);
    return totalCount;
}


console.log(countChar("VijayIsGreatRiiight", "I"))