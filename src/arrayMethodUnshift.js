'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    if (elements.length === 0) {
      return this.length;
    }

    const oldLength = this.length;
    this.length += elements.length;

    for (let i = oldLength - 1; i >= 0; i--) {
      this[i + elements.length] = this[i];
    }

    for (let i = elements.length - 1; i >= 0; i--) {
      this[i] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
