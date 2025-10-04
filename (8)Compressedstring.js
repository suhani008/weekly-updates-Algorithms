function compressedString(str){
    if (str.length === 0) return "no compression available ";

    const char =str.split("");
        let compressedString ="";
        let count =1;
        let currentchar =char[0];

        for(let i =1;i<char.length;i++){
            if(char[i] === currentchar){
                count ++;
            }
            else{
                compressedString += currentchar + count;
                currentchar =char[i];
                count =1;
            }
        }
            compressedString += currentchar + count;
            return compressedString;;    
}

console.log(compressedString("ssssuhanimishra "));

function compressString(str) {
    // Edge case: if input is empty, return an empty string
    if (!str) return "";

    let compressed = ""; // Final compressed string
    let count = 1;       // Start count at 1 (we've seen the first character once)

    // Loop through the string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character is the same as the next one
        if (str[i] === str[i + 1]) {
            count++; // Same character repeated → increase count
        } else {
            // Character changed or end of string reached
            // Append current character and its count to result
            compressed += str[i] + count;

            // Reset count for the next character group
            count = 1;
        }
    }

    // Return the compressed result
    return compressed;
}
