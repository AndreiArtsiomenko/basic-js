const {
    NotImplementedError
} = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] === -1) {
            continue;
        }
        let min = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] === -1) continue;
            if (arr[j] < arr[min]) min = j;
        }
        let k = arr[min];
        arr[min] = arr[i];
        arr[i] = k;
    }
    return arr;
}

module.exports = {
    sortByHeight
};