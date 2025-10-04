function mostFrequentChar(str){
    const frequent ={};

    for (const char of str) {
    if(frequent[char] === undefined){
        frequent[char] = 1;
    }else {
        frequent[char] += 1;
    }}

    let maxchar = null;
    let maxcount = 0;

    for (const char in frequent)
        {
        if (frequent[char] > maxcount ){
             maxcount = frequent[char];
            maxchar = char ;
        }
        }
        return maxchar;
 }

 console.log(mostFrequentChar("bbccaa"));
