'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    for (let j = this.length + elements.length - 1; j >= 0; j--) {
      this[j] = this[j - elements.length];
    }

    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
