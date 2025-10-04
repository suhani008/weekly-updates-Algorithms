function removeNonAlphaChar(str){
    return str.replace(/[^a-zA-Z0-9 ]/g,'');
}
console.log(removeNonAlphaChar("I@ lo#ve Suha$ni Mi%sh^ra&*()123"));