function lastel(arr){
    if (arr <=1){
        return arr;
    }
    const element =arr.pop();
    arr.unshift(element);
    return arr;
}

console.log(lastel([1,23,4,4,9]));