function isPalindrome(str){
    const text = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    return text ===text.split("").reverse().join("");
    
}

console.log(isPalindrome("suhani"));


// second way using two pointer

function palindrome(str){
    const string = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    let left =0;
    let right = string.length -1;

    while(left < right){
        if (string[left] !== string[right]){
            return false;
        }

        left++;
        right --
    }
    return true;
}

console.log(palindrome("mad am"))