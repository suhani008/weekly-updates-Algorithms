const array =[1,3,5,7,9,2];

const min = Math.min(...array);
const max = Math.max(...array);

console.log("min:", min);
console.log("max:",max)



const number =[112,34,44,5];

let minimum = number[0];
let maximum = number[0];

for(let i = 1; i >number.length; i++){
    if(number[i] < mimumum){
        minimum = number[i];
    };
    if(number[i] > maximum){
        maxiumum =number[i];
    }

}

console.log(minimum);
console.log(maximum);