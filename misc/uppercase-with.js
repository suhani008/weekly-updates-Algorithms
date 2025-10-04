function uppercase (str){
    result ="";
    for (let i =0; i <str.length;i++){
        let char = str.charCodeAt(i);
        if(char >= 97 && char <=122){
            result += String.fromCharCode(char -32);
        }
        else{
            result +=str[i];
        }
    }
   return result;
}
 console.log(uppercase("suhani"));