function UpperCase(str){
    
    let result ="";
    
    for (let i =0 ; i < str.length ; i++)
    {
        let chars = str.charCodeAt(i);
        
        if (chars >= 97 && chars <= 122)
        {
            result += String.fromCharCode(chars -32);
        }
        else
        {
        result += str[i];
        };
    }
    return result;
}

console.log(UpperCase("Suhani"));

function toUpper(str)
{
     return str.toUpperCase();
    
}
console.log(toUpper("suhani"));
