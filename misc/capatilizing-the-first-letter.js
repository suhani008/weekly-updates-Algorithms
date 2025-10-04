function captalizedWords(str){
    const words = str.toLowerCase().split(" ");
    const afterCap =[];

    for( let i =0; i < words.length; i++){
        const word = words[i];
        const cap = word.charAt(0).toUpperCase() + word.slice(1);
         afterCap.push(cap);
    }
    return afterCap.join(" ");
}
console.log(captalizedWords("I love suhani mishra"));


function capatlizeWords2(str){
    const Words = str.toLowerCase().split(" ");
    const after= Words.map(word => 
        {
            return word.charAt(0).toUpperCase() + word.slice(1)
        });
        return after.join(" ");
}
console.log(capatlizeWords2("I love suhani Mishra"));
