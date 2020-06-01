'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    for (let i = 0; i < elements.length; i++) {
      for (let j = this.length; j > 0; j--) {
        this[j] = this[j - 1];
      }
      this[0] = elements[elements.length - i - 1];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
