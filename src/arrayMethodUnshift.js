'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    const argLength = elements.length;

    for (let i = this.length + argLength - 1; i >= 0; i -= 1) {
      this[i] = this[i - argLength];
    }

    for (let i = 0; i < argLength; i += 1) {
      this[i] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
