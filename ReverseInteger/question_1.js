const reverseDigits = (number) => {
    if (!Number.isInteger(number)) {
        throw new Error('Input must be an integer.');
    }

    let reversed = 0;
    while (number !== 0) {
        reversed = reversed * 10 + number % 10;
        number = (number < 0) ? Math.ceil(number / 10) : Math.floor(number / 10);
    }

    return reversed;
};

try {
    console.log('1. ',reverseDigits(123));    // 321
    console.log('2. ',reverseDigits(-321));   // -123
    console.log('3. ',reverseDigits(120));    // 21
} catch (error) {
    console.error(error.message);
}