function sum(arr, target){

    let left = 0;
    let right = arr.length -1;

    while(left < right){

        const suming= arr[left] + arr[right];
        if(suming === target){
            return true;
        }
        else if(suming < target){
            left ++;
        }
        else {
            right --;
        }
    }
return false;
}

console.log(sum([1,2,3,4,5,6], 14));