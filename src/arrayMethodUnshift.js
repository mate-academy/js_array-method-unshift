'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const quontity = [...elements].length;

    for (let i = this.length - 1; i >= 0; i--) {
      this[i + quontity] = this[i];
    }

    let count = 0;

    for (let q = 0; q < quontity; q++) {
      this[count] = arguments[q];
      count++;
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
