function frequency(str){
    if (str.length ===0)return "wrong babe";

    const frequency ={};
    let last = "";

    for(const char of str){
        frequency[char] = (frequency[char] ||0)+1;
    }

    const seen = new Set();
    for (const char of str){
        if(!seen.has(char)){
            last += char + frequency[char];
            seen.add(char);
        }
    }
    return last;

}
console.log(frequency("suhani mishra"));