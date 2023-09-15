function myUpperCase(string) {
    let result = '';
    for (const l in string) {
        result += string[l] - 32;
    }

    return result;
}


console.log(myUpperCase('salut'));