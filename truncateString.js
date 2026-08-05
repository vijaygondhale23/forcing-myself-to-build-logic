function truncateString(str, count){
    
    if(count <= 0){
        return str;
    } else {
        return str.slice(0,count).concat("...");
    }

    // return count <= 0 ? str : str.slice(0,count).concat("...")
}

console.log(truncateString("A-ticket is worth 1000 rupees",1));
