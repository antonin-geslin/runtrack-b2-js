function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    if (number <= 3) {
        return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }

    for (var i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

function myPrimeList(limit) {
    var primeList = [];
    for (var i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primeList += i;
        }
    }
    return primeList;
}


console.log(myPrimeList(18)) === [2,3,5,7,11,13,17];

