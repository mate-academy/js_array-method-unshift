'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    if (this.length === 0) {
      return undefined;
    }

    this.reverse();

    for (let i = elements.length - 1; i >= 0; i--) {
      this.length += 1;
      this[this.length - 1] = elements[i];
    }

    this.reverse();

    return this.length;
  };
}

module.exports = applyCustomUnshift;
