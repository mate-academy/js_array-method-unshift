'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    this.length += elements.length;

    for (let i = this.length - 1; i > 0; i--) {
      this[i] = this[i - elements.length];
    }

    for (let j = 0; j < elements.length; j++) {
      this[j] = elements[j];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
