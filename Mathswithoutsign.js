
// subtraction without using - operator
function subtraction(a,b){
    return a +(~b +1);
}
console.log(subtraction(3,2));

// multiplication without using * operator
function multiplication(a,b){
    let result = 0;
    const positive = Math.abs(b);
    for (i = 0 ; i < positive; i++){
        result +=a
    };
    /*if (b<0){
        return -result;
    }
    else{
        return result;
    }; */
    return b <0 ? -result : result;
}
console.log(multiplication(3,2));



// Next Smallest Number
function nextSmallestPalindrome(num){
    let number = num + 1;
    while(true){
        let stri = number.toString();
        let reversed = stri.split("").reverse().join("");
        if (stri === reversed){
            return number
        }
        number++;
    }
}

let number1 = nextSmallestPalindrome(222);
console.log(number1);

//Swap Two Numbers Without Temp Variable
function Swap(num1,num2){
    num1 = num1 + num2 ;
    num2 = num1 - num2 ;
    num1 = num1 -num2;
    
    return {
        num1 ,
        num2
    };
    
}

console.log(Swap(3,9));


// SUBTRACT TWO NUMBERS WithOUT USING subtract 
function subtraction(a,b){
    let subtractioned = a +(~b + 1);
    return subtractioned;
}

console.log(subtraction(3-4));


//multipication without multiplication

function multiplication(num1,num2){
    let result = 0;
    let convert = Math.abs(num2);
    for(i = 0 ; i < convert; i ++){
     result += num1;
    };
    
    return num2 <0 ? -result : result;
   /* if (num2 < 0){
       // return -result
    //}
    return result */
}

console.log(multiplication(2,-4));

//DIVISON 

function division(a,b){
    if (b == 0){
        throw new Error ("bhai neeche zero hai ");
    };
    let quotient = 0;
    
    const negative = (a< 0 !== b < 0);
    let num1 = Math.abs(a);
    let num2 = Math.abs(b);
    
    while(num1 >= num2){
        num1 = num1 - num2; // num1 -= num2
        quotient ++;
    }
  return negative ? -quotient : quotient;
}

console.log(division(4,-2));