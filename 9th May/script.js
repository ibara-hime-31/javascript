function capitalizeFirstLetter(str){
    return str.split(" ").map(word=> word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

console.log(capitalizeFirstLetter("We are cybrom javascript students"));


//Write a javascript program to check whether a string is blank or not

function isBlank(str){
    return !str.trim();
}

console.log(isBlank(""));
console.log(isBlank("   "));
console.log(isBlank("Hello"));
console.log(isBlank("    Hello     "));