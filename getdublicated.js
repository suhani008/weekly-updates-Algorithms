function duplicat(str){
    let frequecny ={};
    let result =[];

    for (const char of str.toLowerCase()){
        if(char >='a' && char <='z'){
            frequecny[char] =(frequecny[char]||0)+1;
        }
    }

    for (const char in frequecny){
        if(frequecny[char] > 1){
            result.push(char);
        }
    }
 return result;
}
console.log(duplicat("suhddanii"));