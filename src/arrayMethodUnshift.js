'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    for (let i = 0; i < elements.length; i++) {
      for (let j = 0; j < this.length; j++) {
        this[this.length - j] = this[this.length - j - 1];
      }
    }

    for (let k = 0; k < elements.length; k++) {
      this[k] = elements[k];
    }

    const quantity = this.length;

    return quantity;
  };
}

module.exports = applyCustomUnshift;
