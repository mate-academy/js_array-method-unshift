'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    // write code here
    if (elements) {
      this.length = this.length + elements.length;
      for (let i = this.length - 1; i > elements.length - 1; i--) {
        this[i] = this[i - elements.length];
      }
      for (let i = 0; i < elements.length; i++) {
        this[i] = elements[i];
      }
      return this.length;
    } else {
      return undefined;
    }
  };
}

module.exports = applyCustomUnshift;
