
//one number missng in array
function missing(str){
    const n = str.length + 1;
    const total = (n*(n+1)/2);
    let sum  = 0 ;
    for (let i = 0;i < str.length;i++){
        sum += str[i];
    }

    return total - sum;
}
console.log(missing([1,2,3,5]));;

//when we dont know what number is missing
 function missingvalue (str)
 {
    const max = Math.max(...str);
    const numset = new Set(str);
    const missing=[];
    for (let i = 1;i <=max;i++){
        if(!numset.has(i)){
            missing.push(i);
        }
    }
    return missing;
 }

 console.log(missingvalue([3,7,1,2,8,4,5]));;