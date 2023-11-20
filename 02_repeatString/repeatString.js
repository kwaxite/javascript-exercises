const repeatString = function(string,num) {
    var numStr = ''
    if (num < 0){return 'ERROR'}
    for (let i=0; i<num; i++){
        
        numStr = numStr + string
    }
    return numStr
};

// Do not edit below this line
module.exports = repeatString;
