function findMode (arr) {
    let counts = {}
    let maxNum = 0
    let mode;

    for (element of arr){
        counts[element] = (counts[element] || 0) + 1;
        if(counts[element] > maxNum){
            maxNum = counts[element];
            mode = element;

        }
    }
    console.log(counts);
    
    return("Mode: " +mode)
    
}





console.log(findMode([1,2,2,3,1,4,2]));
