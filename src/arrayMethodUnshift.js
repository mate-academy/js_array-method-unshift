'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    for (let i = arguments.length - 1; i >= 0; i--) {
      this[this.length] = elements[i];

      for (let j = this.length - 1; j > 0; j--) {
        const replacedElement = this[j - 1];
        this[j - 1] = this[j];
        this[j] = replacedElement;
      }
    }
    return this.length;
  };
}

module.exports = applyCustomUnshift;
