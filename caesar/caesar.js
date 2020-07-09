const caesar = function(plainText, shiftFactor) {
    let char = '';
    let shiftedChar = '';
    let encodedText = '';
    for(let i = 0; i < plainText.length; i++){
        char = plainText[i];
        shiftedChar = String.fromCharCode((char.charCodeAt() + shiftFactor));
        encodedText += getEncodedChar(char, shiftedChar);
    }
    console.log({encodedText});
    return encodedText;
}

const getEncodedChar = (char, shiftedChar) => {
    let encodedChar = '';

    if(char >= 'A' && char <= 'Z'){
        encodedChar = shiftedChar.charCodeAt() > 90 ? String.fromCharCode((shiftedChar.charCodeAt() - 90)  + 64): 
                      shiftedChar.charCodeAt() < 65 ? String.fromCharCode(91 - (65 - shiftedChar.charCodeAt())): 
                      shiftedChar;

        if(encodedChar < 'A' || encodedChar > 'Z')
            encodedChar = getEncodedChar(char,encodedChar);
    }
    else if(char >= 'a' &&  char <= 'z'){
        encodedChar = shiftedChar.charCodeAt() > 122 ? String.fromCharCode((shiftedChar.charCodeAt() - 122) + 96): 
                      shiftedChar.charCodeAt() < 97 ? String.fromCharCode(123 -(97 - shiftedChar.charCodeAt())): 
                      shiftedChar;

       if(encodedChar < 'a' || encodedChar > 'z')
            encodedChar = getEncodedChar(char,encodedChar);
    }
    else{
        encodedChar += char;
    }
    return encodedChar;
}

module.exports = caesar
