function myNearZero(array) {
    var result = 10000;
    var length = 0;
    while(array[length] !== undefined) {
        length++;
    }
    for (var l in array ) {
        if (array[l] == 0) {
            result = 0;
        } else if (array[l] < 0) {
            array[l] = array[l] * -1;
            if (array[l] < result && result > 0) {
                result = array[l] * -1;
            } else if (array[l] > result && result < 0) {
                result = array[l] * -1;
            }
        } else if (array[l] > 0) {
            if (array[l] < result) {
                result = array[l];
            }
        }    
    }
    return result;
}


console.log(myNearZero([3, 8, 4, 2, -1]));
console.log(myNearZero([234, -142, 512, 1223, 451, -59]));
