function swap(num1,num2){

    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    return [num1,num2];
}
console.log(swap(4,2));