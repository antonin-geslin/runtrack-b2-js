function myArraySum(array) {
    result = 0;
    for (var l in array) {
        result += array[l];
    }
    return result;
}

console.log(myArraySum([4, 24, 52, 14, 32, 56])) === 182;