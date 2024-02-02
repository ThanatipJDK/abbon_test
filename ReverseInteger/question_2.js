const reverseDigits = (input) => {
    if (typeof input !== 'string' || !/^-?\d+$/.test(input)) {
        throw new Error('Input must be a string containing only digits.');
    }

    const reversed = parseInt([...input].reverse().join(''), 10);

    return input[0] === '-' ? -reversed : reversed;
};

try {
    console.log('1. ',reverseDigits('123'));    // 321
    console.log('2. ',reverseDigits('-321'));   // -123
    console.log('3. ',reverseDigits('120'));    // 21
} catch (error) {
    console.error(error.message);
}