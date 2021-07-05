'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    for (let i = 0; i < elements.length; i++) {
      for (let j = this.length - 1; j >= 0; j--) {
        this[j + 1] = this[j];
      }
      this[0] = elements[elements.length - 1 - i];
    }
    return this.length;
  };
}

module.exports = applyCustomUnshift;
