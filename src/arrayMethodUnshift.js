'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const elCount = elements.length;

    if (elCount < 1) {
      return this.length;
    }

    for (let i = this.length; i > 0; i--) {
      this[i + elCount - 1] = this[i - 1];
    }

    for (let j = 0; j < elCount; j++) {
      this[j] = elements[j];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
