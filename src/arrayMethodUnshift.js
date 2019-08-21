'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const arrLength = elements.length;
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + arrLength] = this[i];
    }

    for (let i = 0; i < arrLength; i++) {
      this[i] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
