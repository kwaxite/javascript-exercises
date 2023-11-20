const reverseString = function(string) {
    if (string.length === 0){
        return ''
    }
    return reverseString(string.slice(1,string.length )) + string[0]

};

// Do not edit below this line
module.exports = reverseString;
