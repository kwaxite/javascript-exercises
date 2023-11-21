const sumAll = function(sta, end) {
    total = 0
    if (typeof sta !== 'number' | typeof end !== 'number' | end < 0 | sta < 0){
        return 'ERROR'
    }
    if (sta > end){
        let temp = sta
        sta = end
        end = temp
    }
    for (let i=sta; i<end+1; i++){
        total += i
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
