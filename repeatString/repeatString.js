const repeatString = function(strToRepeat,repeatCount) {
    let str = "";
    if(repeatCount < 0)
        return "ERROR"

    for(let i=0; i<repeatCount; i++){
        str += strToRepeat;
    }
    return str;
}

module.exports = repeatString
