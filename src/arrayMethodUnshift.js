'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const quantityArguments = elements.length;

    for (let i = this.length - 1; i >= 0; i--) {
      this[i + quantityArguments] = this[i];
    }

    let count = 0;

    for (let i = 0; i < quantityArguments; i++) {
      this[count] = arguments[i];
      count++;
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
