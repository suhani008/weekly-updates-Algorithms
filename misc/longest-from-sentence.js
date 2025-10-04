function longest(str){
    let words = str.split(" ");
    let longest ="";
    for (let word of words){
        if (word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}

console.log(longest("I am Suhani and I love programming"));