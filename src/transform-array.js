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

    let arrNew = arr.slice()

    arrNew.forEach((item, index, arrays) => {
        let n = arr.length - 1;

        if (item === '--double-next' && index !== n) arrNew.splice(index, 1, arrNew[index + 1]);
        if (item === '--double-next' && index === n) arrNew.splice(index, 1)

        if (item === '--double-prev' && index !== 0) arrNew.splice(index, 1, arrNew[index - 1]);
        if (item === '--double-prev' && index === 0) arrNew.splice(index, 1)


        if (item === '--discard-next' && index !== n) arrNew.splice(index, 2, '', '');
        if (item === '--discard-next' && index === n) arrNew.splice(index, 1);

        if (item === '--discard-prev' && index !== 0) arrNew.splice(index - 1, 2);
        if (item === '--discard-prev' && index === 0) arrNew.splice(index, 1)

    })
    return arrNew.filter(elem => elem !== '')
}

module.exports = {
    transform
};