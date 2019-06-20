'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    for (let elemIndex = elements.length - 1; elemIndex >= 0; elemIndex--) {
      this.length = this.length + 1;

      for (let i = this.length - 1; i > 0; i--) {
        this[i] = this[i - 1];
      }

      this[0] = [...elements][elemIndex];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
