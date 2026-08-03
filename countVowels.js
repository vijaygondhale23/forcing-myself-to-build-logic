// Count Vowels
// function countVowels(str) {
//     str = str.toLowerCase();
//     let count = 0;
//     for( let i = 0; i < str.length; i++){
//         if (str[i] === "a" ||str[i] ===  "e" ||str[i] === "i" ||str[i] === "o" ||str[i] === "u") {
//             count++
//         }
//     }    
//     console.log(count);
// }
// countVowels("Hello vijayA");


// Another Approach

const countVowels = (str) => {

    let vowels = ['a','e','i','o','u'];
    let arr = str.split('');
    console.log(arr);

    let count = 0;
    for (const char of arr) {
        if(vowels.includes(char.toLowerCase())){
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello Vijay How are You"));
