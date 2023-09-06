function myCountChar(haystack, needle) {
    let counter = 0;
    for (var l in haystack) {
        if (haystack[l] === needle) {
            counter++;
        }
    }
    return counter;
}


console.log((myCountChar('Hello World', 'o')) === 2);