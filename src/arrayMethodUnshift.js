'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    if (!elements.length) {
      return this.length;
    }

    for (let i = this.length - 1; i >= 0; i--) {
      this[i + elements.length] = this[i];
    }

    for (const [index, value] of elements.entries()) {
      this[index] = value;
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
