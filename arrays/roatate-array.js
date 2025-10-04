function rotate(arr,k){
    const n = arr.length;
    
    k = k%n ;
    const endPart = arr.slice(-k);
    const startPArt= arr.slice(0,n-k);
    
    return endPart.concat(startPArt);
}

console.log(rotate(["s","u","h","a","n","i"],2));