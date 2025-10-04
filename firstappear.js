function firstappear(str){
    const frequent ={};
    for (const char of str){
        frequent[char] = (frequent[char]||0)+1;
    }

    for (const char of str){
        if(frequent[char] ===1){
            return char;
        }
    }
}

console.log(firstappear("wwwwgsr"));