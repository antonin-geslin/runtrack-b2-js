function myArraySort(array, sorting) {
    length = 0;
    while (array[length] !== undefined) {
        length++;
    }
    if (sorting == "ASC") {
        for (var i = 0; i < length; i++){
            minIndex = i;
            for (var j = i; j < length; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                temp = array[i];
                array[i] = array[minIndex];
                array[minIndex] = temp;
            }
        }
    } else if (sorting == "DESC") {
        for (var i = 0; i < length; i++){
            maxIndex = i;
            for (var j = i; j < length; j++) {
                if (array[j] > array[maxIndex]) {
                    maxIndex = j;
                }
            }
            if (maxIndex !== i) {
                temp = array[i];
                array[i] = array[maxIndex];
                array[maxIndex] = temp;
            }
        }
    }
    return array;
}


console.log(myArraySort([3, 8, 4, 2, 5], "ASC"));
console.log(myArraySort([-1, -4, 2, 5, 6, 9], "DESC"));