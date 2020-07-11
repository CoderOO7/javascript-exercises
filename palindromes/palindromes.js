const palindromes = function(string) {
    const parsedString = parseAlphabetsFromSting(string);
    console.log({parsedString})
    const size = parsedString.length;
    for(let i = 0; i < size; i++){
        if(parsedString[i] !== parsedString[size-i-1])
            return false;
    }
    return true;
}

const parseAlphabetsFromSting = (string) => string.match(/[A-z]+/g).join('').toLowerCase();

module.exports = palindromes
