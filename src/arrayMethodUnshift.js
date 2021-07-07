'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const resultArray = [...elements];
    for (let i = 0; i < this.length; i++) {
      resultArray[resultArray.length] = this[i];
    }
    for (let i = 0; i < resultArray.length; i++) {
      this[i] = resultArray[i];
    }
    return this.length;
  };
}

module.exports = applyCustomUnshift;
