const removeFromArray = function(arr, 
    ...args) {
    const newArr = []
    for(const element of arr){
        if(!args.includes(element)){
            newArr.push(element);
        }
    }
    return newArr

    //return arr.filter(element => !args.includes(element))
};

// Do not edit below this line
module.exports = removeFromArray;
