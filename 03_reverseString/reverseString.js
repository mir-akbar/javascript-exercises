const reverseString = function(string) {
    let splitter = string.split("");
    let reversedArr = []
    for(let i = splitter.length-1;  i >= 0; i--){
        reversedArr.push(splitter[i]);
    }
    return reversedArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
