'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const reverseElements = elements.reverse();

    for (const element of reverseElements) {
      this.length++;

      for (let i = this.length - 1; i > 0; i--) {
        this[i] = this[i - 1];
      }
      this[0] = element;
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
