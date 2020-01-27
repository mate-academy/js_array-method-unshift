'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    // write code here
    const lenElemnts = elements.length;

    if (lenElemnts === 0) {
      return this.length;
    }

    for (let i = this.length - 1; i >= 0; i--) {
      this[i + lenElemnts] = this[i];
    }

    for (let i = 0; i < lenElemnts; i++) {
      this[i] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
