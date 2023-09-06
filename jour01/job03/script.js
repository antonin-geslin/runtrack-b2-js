function myIsInString(haystack, needle) {
    var i = 0;
    var k = 0;
    var result = "";
    var length = 0;
    while (needle[length] !== undefined) {
        length++;
    }
    while (haystack[i] !== undefined) {
        if (haystack[i] === needle[0]) {
            var j = i;
            while (k < length) {
                result += haystack[j];
                k++;
                j++;
            }
        }
        i++;
    }
    if (result === needle) {
        return true;
    } else {
        return false;
    }
}


console.log(myIsInString('Hello World', 'llo'));
console.log(myIsInString('Hello World', 'rele'));