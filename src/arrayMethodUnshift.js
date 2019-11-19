'use strict';

/**
 * Implement method unshift
 */
function applyCustomUnshift() {
  [].__proto__.unshift2 = function(...elements) {
    this.length += elements.length;
    for (let i = this.length - 1; i >= 0; i--) {
      if (i >= elements.length) {
        this[i] = this[i - elements.length];
      } else {
        this[i] = elements[i];
      }
    }
    return this.length;
  };
}

module.exports = applyCustomUnshift;
