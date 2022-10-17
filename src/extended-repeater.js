const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let result = String(str)

  let addSep = options.additionSeparator ? options.additionSeparator : '|'

  let sep = options.separator ? options.separator : '+'

  let strNew = '';

  if (String(options.addition) !== 'undefined') {
    strNew = String(options.addition)
  }

  if (options.additionRepeatTimes) {
    let arr = [];
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      arr.push(String(options.addition))
    }
    strNew = arr.join(addSep)
  }

  result = result + strNew;

  if (options.repeatTimes) {
    let arr = []
    for (let i = 0; i < options.repeatTimes; i++) {
      arr.push(result)
    }
    result = arr.join(sep)
  }
  return result
}


module.exports = {
  repeater
};
