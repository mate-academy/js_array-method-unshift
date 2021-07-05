'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    // write code here
    const length = this.length;
    const newLength = this.length + elements.length;

    for (let i = length - 1; i >= 0; i--) {
      const itemNewNumber = newLength - length + i;
      this[itemNewNumber] = this[i];
    }

    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
