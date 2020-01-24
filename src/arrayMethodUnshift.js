'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    if (elements.length === 0) {
      return this.length;
    }

    for (let j = elements.length - 1; j >= 0; j--) {
      for (let i = this.length - 1; i >= 0; i--) {
        this[i + 1] = this[i];
      }

      this[0] = elements[j];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
