const checkBracket = (expr) => {
    const stack = [];
    const openBrackets = ['(', '{', '['];
    const closedBrackets = [')', '}', ']'];

    for (let bracket of expr) {
        if (openBrackets.includes(bracket)) {
            stack.push(bracket);
        } else if (closedBrackets.includes(bracket)) {
            const expectedOpenBracket = openBrackets[closedBrackets.indexOf(bracket)];

            if (stack.length === 0 || stack.pop() !== expectedOpenBracket) {
                stack.push(bracket);
                break;
            }
        }
    }

    return stack.length === 0;
};

try {
    console.log('1. ',checkBracket("(){}[]"));
    console.log('2. ',checkBracket("([{}])"));
    console.log('3. ',checkBracket("(}"));
    console.log('4. ',checkBracket("[(])"));
    console.log('5. ',checkBracket("[({})](]"));
    console.log('6. ',checkBracket("}{()[]}"));
} catch (error) {
    
}
