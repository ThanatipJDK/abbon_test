const primeNumbersArray = (n) => {
    if (n <= 0) {
        throw new Error('Input must be a positive integer.');
    }

    const primeArray = [];
    let num = 2;

    while (primeArray.length < n) {
        if (isPrime(num)) {
            primeArray.push(num);
        }
        num++;
    }

    return primeArray;
}

// ตรวจสอบว่าตัวเลขเป็นจำนวนเฉพาะ
const isPrime = (num) =>{
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

try {
    console.log(primeNumbersArray(3));  // [2, 3, 5]
    console.log(primeNumbersArray(6));  // [2, 3, 5, 7, 11, 13]
} catch (error) {
    console.error(error.message);
}
