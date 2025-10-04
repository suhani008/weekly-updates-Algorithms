//arrayreverse using the built in function 
/*The .reverse() method in JavaScript is the simplest way to reverse an array in-place, meaning it modifies the original array rather than creating a new one.
✅ Example:
let arr = [1, 2, 3, 4, 5];

arr.reverse();

console.log(arr); // Output: [5, 4, 3, 2, 1]
🔍 Key Points:
In-place: The original arr is changed — no new array is created.
Return value: .reverse() also returns the reversed array (which is the same as the original, now modified one).
*/


let array =[1,2,3,4,5];
array.reverse();
console.log(array);

//temp method

let arr =[1,2,3,45];
for (let i =0;i <arr.length/2;i++){
    let temp =arr[i];
    arr[i]= arr[arr.length -1-i];
    arr[arr.length -1 -i] = temp;
}
console.log(arr);