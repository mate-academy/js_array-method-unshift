'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const sourceArrFrom = [...elements];
    for (let i = 0; i < this.length; i++) {
      sourceArrFrom[sourceArrFrom.length] = this[i];
    }
    for (let i = 0; i < sourceArrFrom.length; i++) {
      this[i] = sourceArrFrom[i];
    }
    return this.length;
  };
}

module.exports = applyCustomUnshift;
