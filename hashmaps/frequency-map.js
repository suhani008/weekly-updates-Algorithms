function frequencyMap(str){

    let frequency ={};
    for (let char of str.toLowerCase()){
        if(char >='a' && char <='z'){
            (frequency[char]) =(frequency[char]||0) +1;
        }

    }
    return frequency;
}
console.log(frequencyMap("Suhani"));