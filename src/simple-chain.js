const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    console.log(this.chain.length)
  },
  addLink(value) {
    typeof value !== 'undefined' ? this.chain.push(`( ${value} )`) : this.chain.push('( )');
    return this
  },
  removeLink(position) {
    if (isNaN(+position) || position <= 0 || position > this.chain.length || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!')
    }
    this.chain.splice(position - 1, 1);
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result
  }
};

module.exports = {
  chainMaker
};
