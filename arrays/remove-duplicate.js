//remove Duplicate from an sorted array 

// unique things about this is that spread operator is used to convert the set back into an array 
function removeDuplicate(arr){
    return [...new Set(arr)];
}

console.log(removeDuplicate([1,2,3,4,55,5,5,5,5]));


//using for loop 
function remove(arr){
    let result =[];
    for (let i = 0;i<arr.length;i++){
        if(i ===0 || arr[i] !==arr[i-1]){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(remove([1,2,3,4,5,5,5,5]));

//two pointer loop (in place style = which basically means that we just have one array and everything is happening in that array )
function removeDupes(str){
    if(arr.length === 0 ) return 0;
    let i =0;

    for (let j =i,j < arrlength)
}




