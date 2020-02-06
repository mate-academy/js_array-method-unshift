'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift(...elements) {
  [].__proto__.unshift2 = function() {
    for (let i = elements.length - 1; i >= 0; i--) {
      for (let j = this.length; j > 0; j--) {
        this[j] = this[j - 1];
      }
      this[0] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
