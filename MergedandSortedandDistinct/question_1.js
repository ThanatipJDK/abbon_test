const mergedandSortedandDistinct = (arrFirst, arrSecond) => {
    const mergeArr = arrFirst.concat(arrSecond)
    const duplicateArr = removeDuplicate(mergeArr)
    const sortArr = duplicateArr.sort((a, b) => a - b);

    return sortArr
}
const removeDuplicate = (arr) => {
    return Array.from(new Set(arr));
}

try {
    const a = array1 = [1, 2, 4] 
    const b = array2 = [1, 3, 4]
    const c = array1 = [2, 2, 4] 
    const d = array2 = [2, 3, 6]
    const e = array1 = [1, 3, 5, 7, 9]
    const f = array2 = [6, 11]
    console.log('1. ',mergedandSortedandDistinct(a, b));  // [[1, 2, 3, 4]]
    console.log('2. ',mergedandSortedandDistinct(c, d));  // [2, 3, 4, 6]
    console.log('3. ',mergedandSortedandDistinct(e, f));  // [1, 3, 5, 6, 7, 9, 11]
    
} catch (error) {
    console.error(error.message);
}