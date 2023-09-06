function mySquareArray(array) {
    result = [];
    for (var l in array) {
        result += array[l] * array[l];
    }
    return result;
}


console.log(mySquareArray([3, 8, 4, 2, 5]));