// using sorting
function anagram(str1,str2)
{
    const cleanstr1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const cleanstr2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

    if (cleanstr1.length !== cleanstr2.length){
        return false;
    }
    return cleanstr1.split("").sort().join("") === cleanstr2.split("").sort().join("");
}

console.log(anagram("suhani","huanis"));

//using frequent counter 
function isAnagram(str1,str2)
{
    cleaned1= str1.replace(/[^a-zA-Z]/g,'').toLoweCase();
    cleaned2= str2.replace9(/[^a-zA-Z]/g,'').toLowerCase();

    if (str1.length !==str2.length){
        return false;
    }

    const count = {};

}
console.log(isAnagram("suhani","huanis"));