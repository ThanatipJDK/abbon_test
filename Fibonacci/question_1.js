function fibonacciArray(n) {
    if (n <= 0) {
        throw new Error('Input must be a positive integer.');
    }

    const fibArray = [1];

    let a = 0, b = 1;
    while (fibArray.length < n) {
        const nextFib = a + b;
    
        fibArray.push(nextFib);
        a = b;
        b = nextFib;
   
       
    }

    return fibArray;
}

try {
    console.log('1. ',fibonacciArray(15));   // [1, 1, 2, 3, 5, 8, 13]
    console.log('2. ',fibonacciArray(8));    // [1, 1, 2, 3, 5, 8]
} catch (error) {
    console.error(error.message);
}
