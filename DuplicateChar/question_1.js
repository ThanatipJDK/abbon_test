const duplicateChar = (text) => {
    const splitText = text.toLowerCase().split('')
    let findDuplicates = splitText.filter((item, index) => splitText.indexOf(item) !== index)

    const countDuplicate = [...new Set(findDuplicates)]
    
    return countDuplicate.length
}

try {
    console.log('1. ',duplicateChar("abcde"));    // 0
    console.log('2. ',duplicateChar("aabbcde"));    // 2
    console.log('3. ',duplicateChar("aabBcde"));    // 2
    console.log('4. ',duplicateChar("indivisibility"));    // 1
    console.log('5. ',duplicateChar("Indivisibilities"));    // 2
    console.log('6. ',duplicateChar("aA11"));    // 2
    console.log('7. ',duplicateChar("ABBA"));    // 2
} catch (error) {
    console.error(error.message);
}