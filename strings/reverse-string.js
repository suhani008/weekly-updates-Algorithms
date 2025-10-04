// BASIC OF REVERSING A STRING

function reverseString(str){
    const string = str.split("").reverse().join("");
    return string;
}

console.log(reverseString("hello"));


//two pointer method
function reverse(str){
    const strings= str.split("");
    let left = 0;
    let right = strings.length -1;

    while(left < right){
        [strings[left],strings[right]] = [strings[right],strings[left]];
        left ++;
        right --;
    }
    return strings.join("");
}

console.log(reverse("harsh"));


// for loop 
function goingRverse(str){
    let strin = "";
    for (let i = str.length - 1 ; i >= 0;  i--)
        {

        strin += str[i];
    }
    return strin;
}


console.log(goingRverse("suhani"));