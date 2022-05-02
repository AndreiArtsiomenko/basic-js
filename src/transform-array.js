const {
    NotImplementedError
} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!")
    }
    let arrNew = arr.map((item, index, arrays) => {
        let n = arr.length - 1;
        if (item === '--double-next' && index !== n) return item = arrays[index + 1];
        if (item === '--double-next' && index === n) return ' ';
        if (item === '--double-prev' && index !== 0) return item = arrays[index - 1];
        if (item === '--double-prev' && index === 0) return ' ';

        if (item === '--discard-next' && index !== n) return item = arrays[index + 1] = ' ';
        if (item === '--discard-next' && index === n) return ' ';
        if (item === '--discard-prev' && index !== 0) return item = arrays[index - 1] = ' ';
        if (item === '--discard-prev' && index === 0) return ' ';

        return item;
    })
    return arrNew.filter(elem => elem !== ' ')
}

module.exports = {
    transform
};