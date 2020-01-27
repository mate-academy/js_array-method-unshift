'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    this.length = this.length + elements.length;

    let j = this.length - 1;

    for (let i = j - elements.length; i >= 0; i--) {
      this[j] = this[i];
      j--;
    }

    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }

    return this.length;
  };
}

module.exports = applyCustomUnshift;
